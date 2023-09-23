let buttons = document.querySelectorAll('button');
let divResult = document.querySelector('#result');
let divOperations = document.querySelector('#operations')
let n1 = 0; // should only hold the acumulated number of the operation
let n2 = 0; // should always hold the value displayed in result
let operator = '';
let strOperations = '';
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
                strOperations = ''
                divOperations.textContent = ''
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
                divResult.textContent = n2;
            } else { // operation
                if (content == 'clear') {
                    n1 = 0;
                    n2 = 0;
                    operator = '';
                    strOperations = '';
                    divResult.textContent = 0;
                    divOperations.textContent = ''
                } else if (content == '=') {
                    if (!operator) return;
                    strOperations += ` ${n2} = `
                    n2 = operate(operator, n1, n2);
                    divResult.textContent =  n2;
                    divOperations.textContent = strOperations;
                    gaveResult = true;
                    giveNextNumber = true;
                } else {
                    if (operator) {
                        n1 = operate(operator, n1, n2);
                    } else {
                        n1 = n2;
                    }
                    operator = content;
                    strOperations += ` ${n2} ${operator}`;
                    divOperations.textContent = strOperations;
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