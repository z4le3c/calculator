let operation = {
    operator, // string
    n1, // number
    n2, // number
  };

function operate(operator, n1, n2) {
    switch (operator) {
        case '+':
            return add(n1, n2).toFixed(2);
        case '-':
            return substract(n1, n2).toFixed(2);
        case '*':
            return multiply(n1, n2).toFixed(2);
        case '/':
            return divide(n1, n2).toFixed(2);
    }
}

function add(n1, n2) {
    return n1 + n2;
}

function substract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}