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
const display = document.querySelector("#display");

clearBtn.addEventListener("click", () => {
  display.textContent = "";
});

addBtn.addEventListener("click", () => {
  display.textContent += " + ";
});

oneBtn.addEventListener("click", () => {
  display.textContent += "1";
});

twoBtn.addEventListener("click", () => {
  display.textContent += "2";
});

threeBtn.addEventListener("click", () => {
  display.textContent += "3";
});

function operate() {}

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
