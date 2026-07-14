// random number generator=========================================================================
const maxNum = 100;
const minNum = 1;
const age = Math.random();

// console.log(Math.floor(age * maxNum) + minNum);

const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

// console.log(selectedFortune);

/*JavaScript Math review {

*Number data type includes integers, floating number(numbers with decimal places), infinity and NaN.
*common arithmetic operations: +(adds number), -(subract), *(multiply), /(devide), %(remeinder operator: returns the reminder of a devision),
 **(exponentiation: raises a number to the power of another).
 
 Increment Operator: This operator is used to increase the value by one. The prefix notation ++num increases the value of the variable first, then returns a new value. The postfix notation num++ returns the current value of the variable first, then increases it, flip it and there is decrement operator.

 compound assignment operators {
 addition assignment: += add a value and assign it in a variable.
 subtraction assignment: -= subtract a value and assign it in a variable.
} 

}*/
