let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let currentNumber = 0;
let acumulator = 0;

main()
function main() {
    linkButtons()
}

function linkButtons() {
    
    for (const b of buttons) {
        b.addEventListener('click', () => {
            let content = b.textContent;
            if (+content || +content == 0) {
                currentNumber = +(display.textContent+content)
                display.textContent = +(display.textContent+content)
            }
        });
    }
}

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
        case 'clear':
            console.log(operate);
            break;
        case '=':
            console.log(operate);
            break;
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