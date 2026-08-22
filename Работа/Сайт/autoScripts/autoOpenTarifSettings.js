document.addEventListener('auxclick', (e) => {
  // Ищем ближайшую ссылку от места клика (вдруг кликнули по тексту внутри <a>)
  const a = e.target.closest('a');
  
  // Если это не ссылка — ничего не делаем
  if (!a || !a.href) return;

  // Отменяем стандартное поведение (чтобы не открылось просто так)
  e.preventDefault();

  // Создаём корректный URL (учитывает относительные ссылки)
  const url = new URL(a.href, window.location.href);

  // Добавляем /settings, если его ещё нет в конце пути
  if (!url.pathname.endsWith('/settings')) {
    url.pathname = url.pathname.replace(/\/?$/, '') + '/settings';
  }

  console.log('Открываем:', url.toString());
  window.open(url.toString(), '_blank');
}, true); // true — слушаем на этапе перехвата, чтобы точно поймать событие