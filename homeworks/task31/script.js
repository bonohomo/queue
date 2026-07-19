let start = document.querySelector("#start");
let game = document.querySelector("#game");
let time = document.querySelector("#time");
let timeHeader = document.querySelector("#time-header");
let resultHeader = document.querySelector("#result-header");
let result = document.querySelector("#result");
let gameTime = document.querySelector("#game-time");
let score = 0;
let isGameStarted = false;

start.addEventListener('click', startGame);
game.addEventListener('click', handleBoxClick);
gameTime.addEventListener('input', setGameTime);

function startGame(){
    isGameStarted = true;
    score = 0;
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
    setGameTime();
    gameTime.setAttribute("disabled", "true");

    start.classList.add("hide");
    game.style.background = '#FFF';

    let interval = setInterval(function(){
        let t = time.textContent;
        if(t <= 0){
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (t - 0.1).toFixed(1); // после точки одно число остаётся
        }
    }, 100);

    renderBox();
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function renderBox(){
    game.innerHTML = '';
    let box = document.createElement("div");
    let boxSize = getRandom(30, 100);
    let gameSize = game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;

    box.style.width = box.style.height = boxSize + "px";
    box.style.background = "#000";
    box.style.position = "absolute"; // у родительского relative, поэтому позициронируемся относительно него
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.top = getRandom(0, maxTop) + 'px';
        
    // делаем каждый квадрат случайного цвета
    box.style.background = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    
    box.style.cursor = 'pointer';
    box.setAttribute("data-box", "true");


    game.insertAdjacentElement("afterbegin", box);
}

function setGameTime(){
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
}

function handleBoxClick(event){
    if(!isGameStarted){
        return;
    }
    if(event.target.dataset.box){
        score++;
        renderBox();

    }
    
}

function endGame(){
    isGameStarted = false;
    result.textContent = score + " очков";
    gameTime.removeAttribute("disabled");
    start.classList.remove("hide");
    game.innerHTML = '';
    game.style.background = '#9be8fb';
    timeHeader.classList.add("hide");
    resultHeader.classList.remove("hide");
    
}