let buttons = document.querySelectorAll('button');
let result = document.querySelector('#result');
let operations = document.querySelector('#operations')
let n1 = 0;
let n2 = 0;
let operator = '';
let operationsStr = '';
let giveNextNumber = false;
let gaveResult = false;

main()
function main() {
    linkButtons()
}

function linkButtons() { 
    for (const b of buttons) {
        b.addEventListener('click', () => {
            if (gaveResult) {
                operationsStr = ''
                operations.textContent = ''
                gaveResult = false;
                operator = ''
            }

            let content = b.textContent;
            if (+content || +content == 0) { // number
                if (giveNextNumber) {
                    n2 = 0;
                    giveNextNumber = false
                }
                n2 = +(n2 + content);
                result.textContent = n2;
            } else { // operation
                if (content == 'clear') {
                    n1 = 0;
                    n2 = 0;
                    operator = '';
                    operationsStr = '';
                    result.textContent = 0;
                    operations.textContent = ''
                } else if (content == '=') {
                    if (!operator) return;
                    operationsStr += ` ${n2} = `
                    n2 = operate(operator, n1, n2);
                    result.textContent =  n2;
                    operations.textContent = operationsStr;
                    gaveResult = true;
                    giveNextNumber = true;
                } else {
                    if (operator) {
                        n1 = operate(operator, n1, n2);
                    } else {
                        n1 = n2;
                    }
                    operator = content;
                    operationsStr += ` ${n2} ${operator}`;
                    operations.textContent = operationsStr;
                    giveNextNumber = true;
                }
            }
        });
    }
}

function operate(operator, n1, n2) {
    n1 = +n1;
    n2 = +n2;
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