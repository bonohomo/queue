// ПРОСТЕЙШИЙ РЕДАКТОР В БРАУЗЕРЕ

let brush = document.createElement("div");
brush.classList.add("brush");

brush.hidden = true; // hidden прячет элемент по булевому зачению

document.addEventListener("mouseover", function(){
    // console.log("Событие отработало");
    brush.hidden = false;
});

document.addEventListener("mouseout", function(){
    // console.log("Событие отработало");
    brush.hidden = true;
});

document.addEventListener("mousemove", function(event){
    // console.log("Событие сработало", event.clientX, event.clientY);
    brush.style.left = `${event.clientX}px`;
    brush.style.top = `${event.clientY}px`;
    
    // console.log(event.buttons); // какую кнопку нажали на мышке

    if(event.buttons === 1){
        let paint = document.createElement("div");
        paint.classList.add("paint");

        paint.style.left = `${event.clientX}px`;
        paint.style.top = `${event.clientY}px`;

        document.body.append(paint);
    }
    
});

document.addEventListener("mousedown", function(){
    // console.log("Событие отработало");
    brush.style.scale = "0.8";
});

document.addEventListener("mouseup", function(){
    // console.log("Событие отработало");
    brush.style.scale = "1";
});

document.body.append(brush);