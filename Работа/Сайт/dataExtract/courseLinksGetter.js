// ПОЛУЧАЕТ И СКАЧИВАЕТ ВСЕ ССЫЛКИ НА ФОРМАТЫ ОБУЧЕНИЯ НА ГОРОДЕ НА ССЫЛКАХ ТИПА https://prod.top-academy.tech/@editor/tarifs/74

(() => {
  const keys = [...document.querySelectorAll(
    '.styles_list__qUhRr a[href^="/@editor/courses/"]'
  )]
    .map(item => item.getAttribute("href"))
    .filter(Boolean);

  const blob = new Blob([keys.join("\n")], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "course-links.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);

  console.log(`Скачано ${keys.length} ссылок`);
})();