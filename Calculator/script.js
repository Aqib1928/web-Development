const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'clear') {
      clearDisplay();
    } else if (value === '=') {
      calculateResult();
    } else if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
    } else {
      appendValue(value);
    }
  });
});

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  display.textContent = '0';
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function appendValue(value) {
  if (value === '.' && currentInput.includes('.')) return;
  currentInput += value;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || previousInput || '0';
}

function calculateResult() {
  if (operator === null || currentInput === '') return;

  const current = parseFloat(currentInput);
  const previous = parseFloat(previousInput);
  let result;

  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}
