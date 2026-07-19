export function calculate(expression) {
    validate(expression);

    const tokens = tokenize(expression);

    const postfix = toPostfix(tokens);

    return evaluatePostfix(postfix);
}

const OPERATORS = new Set([
    "+",
    "-",
    "*",
    "/"
]);

const OPERATOR_PRIORITY = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
};

function validate(expression) {
    if (typeof expression !== "string") {
        throw new TypeError("Выражение должно быть строкой.");
    }

    expression = expression.trim();

    if (expression === "") {
        throw new TypeError("Строка не может быть пустой.");
    }

    if (!/^[\d+\-*/\s]+$/.test(expression)) {
        throw new SyntaxError("Выражение содержит недопустимые символы.");
    }
}

function tokenize(expression) {
    const tokens = [];
    let currentNumber = "";

    for (let index = 0; index < expression.length; index++) {
        const char = expression[index];

        if (/\s/.test(char)) {
            continue;
        }

        if (/\d/.test(char)) {
            currentNumber += char;
        } else if (OPERATORS.has(char)) {
            if (currentNumber === "") {
                throw new SyntaxError(`Перед оператором '${char}' ожидалось число.`);
            }

            tokens.push(Number(currentNumber));
            tokens.push(char);

            currentNumber = "";
        } else {
            throw new SyntaxError(`Недопустимый символ '${char}' на позиции ${index}.`);
        }
    }

    if (currentNumber !== "") {
        tokens.push(Number(currentNumber));
    }

    if (typeof tokens.at(-1) === "string") {
        throw new SyntaxError("Выражение не может заканчиваться оператором.");
    }

    return tokens;
}

function toPostfix(tokens) {
    const output = [];
    const operatorStack = [];

    for (const token of tokens) {
        if (typeof token === "number") {
            output.push(token);
            continue;
        }

        while (operatorStack.length > 0) {
            const topOperator = operatorStack.at(-1);

            if (OPERATOR_PRIORITY[topOperator] < OPERATOR_PRIORITY[token]) {
                break;
            }

            output.push(operatorStack.pop());
        }

        operatorStack.push(token);
    }

    while (operatorStack.length > 0) {
        output.push(operatorStack.pop());
    }

    return output;
}

function evaluatePostfix(postfix) {
    const stack = [];

    for (const token of postfix) {
        if (typeof token === "number") {
            stack.push(token);
            continue;
        }

        const rightOperand = stack.pop();
        const leftOperand = stack.pop();

        if (leftOperand === undefined || rightOperand === undefined) {
            throw new SyntaxError("Некорректное математическое выражение.");
        }

        let result;

        switch (token) {
            case "+":
                result = leftOperand + rightOperand;
                break;

            case "-":
                result = leftOperand - rightOperand;
                break;

            case "*":
                result = leftOperand * rightOperand;
                break;

            case "/":
                result = leftOperand / rightOperand;
                break;

            default:
                throw new SyntaxError(`Неизвестный оператор "${token}"`);
        }

        stack.push(result);
    }

    if (stack.length !== 1) {
        throw new SyntaxError("Некорректное математическое выражение.");
    }

    return stack[0];
}