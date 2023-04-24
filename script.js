const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const displayTotal = document.querySelector("#displayTotal");
  displayTotal.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".grid-keys");

keys.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;

  if (!target.matches("button")) {
    return;
  }

  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      handleOperator(value);
      break;
    case ".":
      inputDecimal(value);
      break;
    case "clear":
      clear();
      break;
    default:
      //Check for integer
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }

  updateDisplay();

  /* if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("clear")) {
    clear();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay(); */
});

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  //Checks if operator already exist
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  //isNaN(value) method checks for number or not
  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = operate(firstOperand, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(5))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function operate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function clear() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

/* clearBtn.addEventListener("click", () => {
  total = null;
  displayTotal.textContent = "";
  state = "waiting";
});

let state = "waiting";
let total = null;
let operator = null;

addBtn.addEventListener("click", () => {
  if (state === "waitingForNextNumber") {
    operator = "+";
    const currentValue = parseInt(displayTotal.textContent);
    if (total === null) {
      total = currentValue;
    } else {
      total += currentValue;
    }
    displayTotal.textContent = total;
    state = "waiting";
  }
});

subtractBtn.addEventListener("click", () => {
  if (state === "waitingForNextNumber") {
    const currentValue = parseInt(displayTotal.textContent);
    if (total === null) {
      total = currentValue;
    } else {
      total = total - currentValue;
    }
    displayTotal.textContent = total;
    operator = "-";
    state = "waiting";
  }
});

oneBtn.addEventListener("click", () => {
  if (state === "waiting") {
    displayTotal.textContent = "1";
    state = "waitingForNextNumber";
  } else {
    displayTotal.textContent += "1";
    state = "waitingForNextNumber";
  }
}); */

/* twoBtn.addEventListener("click", () => {
  if (state === "waiting") {
    displayTotal.textContent = "2";
    state = "waitingForNextNumber";
  } else if (state === "waitingForNextNumber") {
    displayTotal.textContent += "2";
  }
}); */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
