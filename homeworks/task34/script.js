let name = document.getElementById("name");
let text = document.getElementById("text");
let button = document.getElementById("but");
let out = document.getElementById("output");

let str = '';
let regex = /^(.*?)<(b|u|i|s|h1|h2|h3|p)>(.*?)<\/\2>(.*?)$/ig;

button.addEventListener('click', function () {
    let userName = document.createElement("p");
    let textColored = document.createElement("p");
    userName.textContent = name.value;
    out.append(userName);

    
});