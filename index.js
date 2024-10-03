const displayContainer = document.querySelector('.display');
const displayExpression = document.querySelector('.display .expression');
const displayResult = document.querySelector('.display .result');

const isResultHidden = () => displayResult.classList.contains('hidden');
const isResultShow = () => !isResultHidden();
const getResultValue = () => displayResult.innerText;

const isSymbol = (button) => /[\+\-\*\/]$/.test(button.innerHTML);

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
});

function handleButtonClick(button) {
    switch (button.innerHTML) {
        case 'C': {
            displayExpression.innerHTML = '0';
            displayResult.classList.add('hidden');
            break;
        }
        case '=': {
            try {
                displayResult.classList.remove('hidden');
                displayResult.innerHTML = eval(displayExpression.innerHTML);
            } catch {
                displayResult.innerHTML = "Error";
            }
            break;
        }
        default: {
            if (isResultShow()) {
                displayExpression.innerHTML = isSymbol(button) ? getResultValue() : '0';
                displayResult.classList.add('hidden');
            } else {
                displayExpression.innerHTML += button.innerHTML;
            }
        }
    }
}
