// УДАЛИТЬ УСТАРЕВШИЕ (ОРАНЖЕВЫЕ) РУБРИКИ У КУРСА НА СТРАНИЦЕ ЕГО НАСТРОЕК

(async () => {
  while (true) {
    const pill = [...document.querySelectorAll(
      '.m_1dcfd90b.mantine-PillGroup-group .mantine-Pill-root'
    )].find(pill => {
      const style = pill.getAttribute('style') || '';
      return style.includes('mantine-color-orange-7');
    });

    if (!pill) {
      console.log('✅ Все оранжевые теги удалены');
      break;
    }

    const label = pill.querySelector('.mantine-Pill-label')?.textContent.trim();
    console.log('Удаляю:', label);

    pill.querySelector('.mantine-Pill-remove')?.click();

    await new Promise(resolve => setTimeout(resolve, 300));
  }
})();