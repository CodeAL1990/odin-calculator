const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const backSpaceBtn = document.querySelector("#backSpace");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const clearBtn = document.querySelector("#clear");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const equalBtn = document.querySelector("#equal");
const zeroBtn = document.querySelector("#zero");
const displayTotal = document.querySelector("#displayTotal");
const displaySequence = document.querySelector("displaySequence");

clearBtn.addEventListener("click", () => {
  total = null;
  displayTotal.textContent = "";
  state = "waiting";
});

let state = "waiting";
let total = null;

addBtn.addEventListener("click", () => {
  if (state === "waitingForNextNumber") {
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
      total = `${total}` - currentValue;
    }
    displayTotal.textContent = total;
    state = "waiting";
  }
});

oneBtn.addEventListener("click", () => {
  if (state === "waiting") {
    displayTotal.textContent = "1";
    state = "waitingForNextNumber";
  } else if (state === "waitingForNextNumber") {
    displayTotal.textContent += "1";
  }
});

/* twoBtn.addEventListener("click", () => {
  if (state === "waiting") {
    displayTotal.textContent = "2";
    state = "waitingForNextNumber";
  } else if (state === "waitingForNextNumber") {
    displayTotal.textContent += "2";
  }
}); */

threeBtn.addEventListener("click", () => {
  displayTotal.textContent += "3";
});

function operate(operation) {
  if (operation === "addBtn") return add;
}

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
