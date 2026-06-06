let reg = document.querySelector(".register");

reg.addEventListener("submit", function (event) {
    event.preventDefault();

    let login = reg.login.value;
    let password = reg.psw.value;
    let password2 = reg.psw2.value;
    console.log(login);

    if (login == "" || password == "" || password2 == "") {
        alert("Все поля должны быть заполнены");
        return;
    } else if (password !== password2) {
        alert("Пароли не совпадают");
        return;
    } else if (password.length < 6) {
        alert("Слишком короткий пароль");
        return;
    } else {
        alert("Регистрация прошла успешно");
        return;
    }
});