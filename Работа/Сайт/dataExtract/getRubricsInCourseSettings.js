// ПОЛУЧИТЬ РУБРИКИ НАЗНАЧЕННЫЕ КОНКРЕТНОМУ КУРСУ НА СТРАНИЦЕ ЕГО НАСТРОЕК

(() => {
  const group = document.querySelector('.m_1dcfd90b.mantine-PillGroup-group');

  if (!group) {
    console.error('Группа тегов не найдена');
    return;
  }

  const tags = [...group.querySelectorAll('.mantine-Pill-root')]
    .map(pill => pill.querySelector('.mantine-Pill-label')?.textContent.trim())
    .filter(Boolean);

  const content = tags.join(', ');

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'tags.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);

  console.log(`Скачан файл tags.txt (${tags.length} тегов)`);
})();