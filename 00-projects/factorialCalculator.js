const num = 11;

const factorialCalculator = (num) => {
  let result = 1;
  if (num === 0) return "Error: Factorial of a negative number doesn't exist.";

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
};

const factorial = factorialCalculator(num);
const resultMsg = `The factorial of ${num} is ${factorial}`;
console.log(resultMsg);
