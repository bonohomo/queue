let cardsArray = [
    { name: 'card1', img: 'c0.jpg' },
    { name: 'card2', img: 'c1.jpg' },
    { name: 'card3', img: 'c2.jpg' },
    { name: 'card4', img: 'c3.jpg' },
    { name: 'card5', img: 'c4.jpg' },
    { name: 'card6', img: 'c5.jpg' },
    { name: 'card7', img: 'c6.jpg' },
    { name: 'card8', img: 'c7.jpg' }
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createBoard(){
    let gameBoard = document.querySelector(".game-board");
    let suffledCards = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random()); // соберёт так все объекты и перемешает их
    console.log(suffledCards);
    
    suffledCards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name = card.name; // пользовательский атрибут

        let cardImage = document.createElement("img");
        cardImage.src = card.img;
        cardElement.append(cardImage);


        cardElement.addEventListener('click', flipCard);
        gameBoard.append(cardElement);
    });
}

function flipCard(){
    if(lockBoard){
        return;
    }
    if(this === firstCard){
        return;
    }
    this.classList.add("flipper");

    if(!firstCard){ // если здесь было false (null)
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();

    checkWin();
}

function checkForMatch(){
    if(firstCard.dataset.name === secondCard.dataset.name){
        disabledCard();
    } else {
        unflipCards();
    }
}

function disabledCard(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipper");
        secondCard.classList.remove("flipper");
        resetBoard();
    }, 1000);
}

function resetBoard(){
    [firstCard, secondCard, lockBoard] = [null, null, null]; // каждому присваиваем Null
}

function checkWin(){
    let allFlipCards = document.querySelectorAll(".card.flipper img");
    console.log(allFlipCards.length);
    
    if(allFlipCards.length == 16){
        alert("Ты победила! Твой приз: поцелуй")
    }
    return;
}

createBoard();