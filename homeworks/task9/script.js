document.writeln("<div id='termo'></div>");

let text1 = document.querySelector("#termo");
text1.textContent = "Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная температура. Другим примером термостата, широко используемого в быту, является холодильник.";
text1.style.backgroundColor = "yellow";
text1.style.color = "black";
text1.style.width = "256px";
text1.style.height = "256px";
text1.style.overflow = "scroll";
text1.style.outline = "1px dashed red";

text1.className = "resetFont";
let reset = document.querySelector(".resetFont");
reset.style.fontSize = "20pt";
reset.style.fontWeight = "400";
reset.style.textDecoration = "underline";