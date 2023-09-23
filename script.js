let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let n1 = 0;
let n2 = 0;
let operator = '';

main()
function main() {
    linkButtons()
}

function linkButtons() { 
    for (const b of buttons) {
        b.addEventListener('click', () => {
            let content = b.textContent;
            if (+content || +content == 0) { // number
                if (!operator) {
                    n1 = +(n1 + content)
                    display.textContent = n1;
                } else {
                    n2 = +(n2 + content)
                    display.textContent = n2;
                }
            } else { // operation
                if (content == 'clear') {
                    n1 = 0;
                    n2 = 0;
                    operator = '';
                    display.textContent = 0;
                } else if (content == '=') {
                    n1 = operate(operator, n1, n2);
                    display.textContent =  n1
                    operator = '';
                    n2 = 0;
                } else {
                    operator = content;
                }
            }
        });
    }
}

function operate(operator, n1, n2) {
    switch (operator) {
        case '+':
            return add(n1, n2).toFixed();
        case '-':
            return substract(n1, n2).toFixed();
        case '*':
            return multiply(n1, n2).toFixed();
        case '/':
            return divide(n1, n2).toFixed();
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