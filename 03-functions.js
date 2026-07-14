// FUNCTION =======================================================================================
function greet(name) {
  // console.log(`Hello ${name}!`);
}
greet("NIKI");

function doSomething() {
  // console.log("Doing something...");
}

doSomething();

const dogadog = function sum(hatdog, doghat) {
  return hatdog + doghat;
};
// console.log(dogadog(5, 12));

function gadogdog(pangalan = "robert", doggy = "miki") {
  // console.log(`Hello! ${pangalan} and ${doggy}`)
}
gadogdog();
gadogdog("bobet", "bon");

const greetings = (name) => console.log(`Hellow ${name}`);
// greetings(`bobet`)

// date: 6/14/2026
const add = (a, b) => a + b;
// console.log(add(1, 2));
const jay = () => "Hello";
// console.log(jay());

// variable scope
let globalVar = "Here is a global scope variable";
function printGlobalVar() {
  // console.log(globalVar);
}
printGlobalVar();

function localVar() {
  let localVariable = "Here is a local variable";
  // console.log(localVariable);
}
localVar();

if (true) {
  let blockVar = "Here is a block variable";
  // console.log(blockVar);
}
// console.log(blockVar); //throws an error because that variable is only accessible inside a block

// function calculator in fcc
function calculateQuotientTwo(num) {
  return num ** 2;
}
// console.log(calculateQuotientTwo(5))
function calculateSum(num1, num2) {
  return num1 + num2;
}

// console.log(calculateSum(2, 5));
// console.log(calculateSum(10, 10));
// console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

// console.log(calculateDifference(22, 5));
// console.log(calculateDifference(12, 1));
// console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

// console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

// console.log(calculateQuotient(7, 11));
// console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

// console.log(calculateSquare(2));
// console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

// console.log(calculateSquareRoot(25))
// console.log(calculateSquareRoot(100))
