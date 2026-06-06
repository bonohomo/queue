let factorialSimple = n => {
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}

document.writeln("Факториал через обычную функцию: " + factorialSimple(5) + "<br>");

function factorial(n) {
    if(n <= 1) {
        return n;
    }
    let fact = n;
    return factorial(n - 1) * fact;
}

document.writeln("Факториал через рекурсивную функцию: ", factorial(5), "<br>");