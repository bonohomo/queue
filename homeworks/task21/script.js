let remButton = document.querySelectorAll(".remove-button");
for(let i = 0; i < remButton.length; i++){
    remButton[i].addEventListener("click", remover);
}

function remover(elem) {
    elem.target.parentNode.style.display = "none";
}