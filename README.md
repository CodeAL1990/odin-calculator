# odin-calculator

odin-calculator

Created html and js files
Functions for add, subtract, multiply and divide added
Create html boilerplate for my calculator
Added querySelectors for buttons
Added some event listeners to test buttons
Figuring out how to trigger + operator between two numbers
Figuring out how to display 2 when 1 + 1 is pressed
1 + 1 - 1 computes as 1 - 1 instead
Got stuck, rewriting everything from scratch
Create calculator object with four properties
Create updateDisplay function to display numbers
Create keys event listener to track clicks on each button
Use console.log for button clicks for now
Create inputDigit function to display values of digits and operators
Update console.log in keys event listener to trigger inputDigit function and updateDisplay
Create inputDecimal function to display decimal
update console.log in keys event listener to trigger inputDecimal function and updateDisplay
Create handleOperator function to enable operators to separate digit clicks and operator clicks
Check if firstOperand is a null and a number
Fix handleOperator function appending numbers incorrectly to display instead of adding by adding a condition to inputDigit
Include property of waitingForSecondOperand to destructured calculator to switch it to false from true so the value gets overwritten or appended instead of only appending
Create operate function to enable the four original functions: add, subtract, multiply and divide
firstOperand, secondOperand and operator are passed as parameters onto operate function
If the operator is =, return the secondOperand
Update handleOperator with an else if condition after isNaN check to check for an existing operator and if so invoke operate, store it in result variable with inputValue as secondOperand
Also display result in displayValue for user and update firstOperand to result
Add a condition at handleOperator to allow user to change operators on their next operator click
Add clear function to restore calculator to default state on clear button click
Add a condition to inputDecimal so that the decimal after an operator appears as a secondOperand by explicitly putting the default value of 0 in front of the decimal
Refactor keys event listener to a switch statement and a destructured target property of event so that it only needs to call updateDisplay once at the end
//TODO --> backspace button, css styling
