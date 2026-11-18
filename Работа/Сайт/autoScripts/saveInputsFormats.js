
(async () => {
  const DB_NAME = 'AcademyFormBackups';
  const STORE = 'snapshots';
  const PREFIX = 'formBackup:v1:';

  // Открываем базу данных
  function openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  const db = await openDB();

  function transaction(mode, action) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, mode);
      const store = tx.objectStore(STORE);
      let result;

      try {
        result = action(store);
      } catch (error) {
        reject(error);
        return;
      }

      tx.oncomplete = () => resolve(result?.result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  }

  function requestResult(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function put(record) {
    return transaction('readwrite', store => store.put(record));
  }

  async function get(id) {
    return requestResult(
      db.transaction(STORE, 'readonly')
        .objectStore(STORE).get(id)
    );
  }

  async function getAll() {
    return requestResult(
      db.transaction(STORE, 'readonly')
        .objectStore(STORE).getAll()
    );
  }

  async function remove(id) {
    return transaction('readwrite', store => store.delete(id));
  }

  // Поиск полей
  function getFields() {
    return [...document.querySelectorAll(
      'input, textarea, select, [contenteditable="true"]'
    )].filter(el => {
      if (el.matches('input')) {
        return ![
          'hidden', 'password', 'file',
          'submit', 'button', 'reset', 'image'
        ].includes(el.type);
      }
      return true;
    });
  }

  function signature(el) {
    return [
      el.tagName,
      el.type || '',
      el.name || '',
      el.placeholder || '',
      el.getAttribute('aria-label') || '',
      el.labels
        ? [...el.labels].map(x => x.innerText.trim()).join(' ')
        : ''
    ].join('|');
  }

  function readValue(el) {
    if (el.matches('input[type="checkbox"], input[type="radio"]')) {
      return { value: el.value, checked: el.checked };
    }

    if (el.matches('select[multiple]')) {
      return {
        value: [...el.selectedOptions].map(x => x.value)
      };
    }

    if (el.isContentEditable) {
      return { html: el.innerHTML };
    }

    return { value: el.value };
  }

  // Сохранение
  async function save(name) {
    if (!name?.trim()) throw new Error('Укажи название');

    const fields = getFields();
    const counters = {};

    const snapshot = fields.map((el, index) => {
      const key = `${el.tagName}|${el.type || ''}|${el.name || ''}`;
      const nameIndex = counters[key] || 0;
      counters[key] = nameIndex + 1;

      return {
        index,
        id: el.id || '',
        name: el.name || '',
        nameIndex,
        tag: el.tagName,
        type: el.type || '',
        signature: signature(el),
        data: readValue(el)
      };
    });

    await put({
      id: name.trim(),
      name: name.trim(),
      url: location.href,
      savedAt: new Date().toISOString(),
      fields: snapshot
    });

    console.log(`✅ Сохранено: ${name}. Полей: ${fields.length}`);
  }

  // Восстановление
  function writeValue(el, data) {
    if (el.matches('input[type="checkbox"], input[type="radio"]')) {
      Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype, 'checked'
      ).set.call(el, data.checked);

    } else if (el.matches('select[multiple]')) {
      [...el.options].forEach(option => {
        option.selected = (data.value || []).includes(option.value);
      });

    } else if (el.isContentEditable) {
      el.innerHTML = data.html ?? '';

    } else {
      const proto = el.matches('input')
        ? HTMLInputElement.prototype
        : el.matches('textarea')
          ? HTMLTextAreaElement.prototype
          : HTMLSelectElement.prototype;

      Object.getOwnPropertyDescriptor(proto, 'value')
        .set.call(el, data.value ?? '');
    }

    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  async function load(name) {
    const snapshot = await get(name);

    if (!snapshot) {
      console.error(`❌ Сохранение "${name}" не найдено`);
      return;
    }

    const fields = getFields();
    const used = new Set();

    let restored = 0;
    let missed = 0;

    snapshot.fields.forEach(item => {
      let el = null;

      if (item.id) {
        const candidate = document.getElementById(item.id);
        if (candidate && fields.includes(candidate) &&
            !used.has(candidate)) el = candidate;
      }

      if (!el && item.name) {
        const candidates = fields.filter(x =>
          x.tagName === item.tag &&
          x.type === item.type &&
          x.name === item.name &&
          !used.has(x)
        );
        el = candidates[item.nameIndex] || null;
      }

      if (!el && fields[item.index] &&
          !used.has(fields[item.index]) &&
          signature(fields[item.index]) === item.signature) {
        el = fields[item.index];
      }

      if (!el) {
        el = fields.find(x =>
          !used.has(x) && signature(x) === item.signature
        );
      }

      if (el) {
        writeValue(el, item.data);
        used.add(el);
        restored++;
      } else {
        missed++;
        console.warn('Не найдено поле:', item);
      }
    });

    console.log(
      `✅ Восстановлено: ${restored}. Не найдено: ${missed}.`
    );
  }

  // Список
  async function list() {
    const records = await getAll();

    console.table(records.map(x => ({
      Название: x.name,
      Полей: x.fields.length,
      Страница: x.url,
      Дата: new Date(x.savedAt).toLocaleString()
    })));

    return records;
  }

  // Удаление
  async function removeBackup(name) {
    await remove(name);
    console.log(`🗑 Удалено: ${name}`);
  }

  // Экспорт
  async function exportAll() {
    const records = await getAll();

    const blob = new Blob(
      [JSON.stringify(records, null, 2)],
      { type: 'application/json' }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'academy-form-backups.json';
    a.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    console.log(`📦 Экспортировано: ${records.length}`);
  }

  // Импорт
  async function importFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      try {
        const parsed = JSON.parse(await file.text());

        // Поддерживаем новый формат и старый экспорт
        const records = Array.isArray(parsed)
          ? parsed
          : Object.entries(parsed).map(([name, item]) => ({
              ...item,
              id: name,
              name: item.name || name
            }));

        if (!records.every(x =>
          x &&
          typeof x.id === 'string' &&
          typeof x.name === 'string' &&
          Array.isArray(x.fields) &&
          x.fields.every(f =>
            f && typeof f === 'object' &&
            f.data && typeof f.data === 'object'
          )
        )) {
          throw new Error('Некорректная структура файла');
        }

        // Записываем по одной записи, не занимая localStorage
        for (const record of records) {
          await put(record);
        }

        console.log(`✅ Импортировано сохранений: ${records.length}`);

      } catch (error) {
        console.error('Ошибка импорта:', error);
      }
    };

    input.click();
  }

  // Пытаемся перенести старые сохранения из localStorage
  async function migrate() {
    let count = 0;

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (!key?.startsWith(PREFIX)) continue;

        const oldData = JSON.parse(localStorage.getItem(key) || '{}');

        for (const [name, item] of Object.entries(oldData)) {
          if (!Array.isArray(item.fields)) continue;

          if (!(await get(name))) {
            await put({
              ...item,
              id: name,
              name
            });
            count++;
          }
        }
      }
    } catch (error) {
      console.warn('Перенос старых данных:', error);
    }

    if (count) {
      console.log(`📦 Перенесено старых сохранений: ${count}`);
    }
  }

  await migrate();

  window.formBackup = {
    save,
    load,
    list,
    remove: removeBackup,
    export: exportAll,
    import: importFile
  };

  console.log(`
  💾 FORM BACKUP — INDEXEDDB

  formBackup.save("Название")
  formBackup.load("Название")
  formBackup.list()
  formBackup.remove("Название")
  formBackup.export()
  formBackup.import()

  База данных: ${DB_NAME}
  `);
})();