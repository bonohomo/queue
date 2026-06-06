// Function Declaration

maxTwo(3, 5);
maxTwo(7, 9);
maxTwo(5, 5);

function maxTwo(n, m) {
    if (n > m) {
        document.writeln("Большее число: " + n + "<br>");
    } else if (n == m) {
        document.writeln("Числа равны: " + n + " = " + m + "<br>");
    } else {
        document.writeln("Большее число: " + m + "<br>");
    }
}

document.writeln("<br><br>");

// Function Expression

let findMaxTwo = function (n, m) {
    if (n > m) {
        document.writeln("Большее число: " + n + "<br>");
    } else if (n == m) {
        document.writeln("Числа равны: " + n + " = " + m + "<br>");
    } else {
        document.writeln("Большее число: " + m + "<br>");
    }
}

findMaxTwo(34, 55);
findMaxTwo(1079, 1001);
findMaxTwo(33, 33);

document.writeln("<br><br>");

// Arrow Function

let arwMaxTwo = (n, m) => n > m ? document.writeln("Большее число: " + n + "<br>") : n == m ? document.writeln("Числа равны: " + n + " = " + m + "<br>") : document.writeln("Большее число: " + m + "<br>");

arwMaxTwo(57, 63);
arwMaxTwo(423, 11);
arwMaxTwo(11, 11);

document.writeln("<br><br>");

// Function Declaration

maxArr([1, 5, 9, 43, 33, 11, 55, 3]);

function maxArr(arr) {
    let m = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (m < arr[i]) {
            m = arr[i];
        }
    }
    document.writeln("Большее число: " + m + "<br>");
}

document.writeln("<br><br>");

// Function Expression

let maxArrExp = function (arr) {
    let m = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (m < arr[i]) {
            m = arr[i];
        }
    }
    document.writeln("Большее число: " + m + "<br>");
}

maxArr([66, 106, 202, 11, 32, 71, 7, 9]);

document.writeln("<br><br>");

// Arrow Function

let maxArrArw = (arr) => {
    let m = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (m < arr[i]) {
            m = arr[i];
        }
    }
    document.writeln("Большее число: " + m + "<br>");
}

maxArrArw([21, 88, 10, 7, 73, 58, 8]);