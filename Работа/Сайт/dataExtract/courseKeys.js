// ПОЛУЧАЕТ И СКАЧИВАЕТ ВСЕ КЛЮЧИ КУРСОВ

(() => {
  const keys = [...document.querySelectorAll(".styles_listItem__Yyumz")]
    .map(item =>
      item.querySelector("span.max-w-2\\/3.truncate")?.textContent.trim()
    )
    .filter(Boolean);

  const blob = new Blob([keys.join("\n")], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "course-keys.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);

  console.log(`Скачано ${keys.length} ключей`);
})();