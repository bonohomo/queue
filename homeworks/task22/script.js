let lengthPath = 5;
let pagination = document.querySelector(".pagination");
let product = document.querySelector(".product-cover");
let data = new Array(18);

for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node);
    product.append(data[i]);
}

let chunks = splitParts(data);
renderChunk(0);

function splitParts(arr) {
    if (arr.length > lengthPath) {
        let chunks = [];

        for (let i = 0; i < arr.length; i += lengthPath) {
            chunks.push(arr.slice(i, i + lengthPath))
        }

        return chunks;
    } else {
        return arr;
    }
}

function renderChunk(part) {
    if (part >= 0 && part <= chunks.length) {
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));
    } else {
        return false;
    }
}



let nxt = document.querySelector("#next");
let prv = document.querySelector("#prev");
let j = 0;

nxt.addEventListener("click", function(){
    if(data.length % lengthPath !== 0 && j >= 0 && j <= (parseInt(data.length / lengthPath)) - 1) {
        renderChunk(++j);
    } else if(data.length % lengthPath == 0 && j >= 0 && j <= (parseInt(data.length / lengthPath)) - 2){
        renderChunk(++j);
    } else {
        renderChunk(j);
    }
});

prv.addEventListener("click", function(){
    if(data.length % lengthPath !== 0 && j >= 1 && j <= (parseInt(data.length / lengthPath))) {
        renderChunk(--j);
    } else if(data.length % lengthPath == 0 && j >= 1 && j <= (parseInt(data.length / lengthPath)) - 1){
        renderChunk(--j);
    } else {
        renderChunk(j);
    }
});