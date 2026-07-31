/* How Do Loops and Iteration Work in JavaScript? =================================================
-loops in programming are used to repeat a block of code multiple times
*/

// basic syntax for "for" loop:
/*
for (inialization; condition; increment or decrement)  {
   block of code to be excuted  
}
*/

// A counter variable is a variable that is used to keep track of how many times a loop has run
// An iteration is a single pass through the loop
// If the condition is true, the code block inside the loop is executed. If the loops is false, the loop stops and move onto the next block of code.
// The last part of the loop is the increment/decrement statement. This statement is executed after each iteration of the loop. It is typically used to decrement or increment the counter variable.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// in the first part of the example above, we initialize a counter variable i to 0. It is a common convention to use i as the counter variable in a for loop.
// The next part is to check for the condition. In this case, the condition is checking if i is less than 5. Since i is 0 which is less than 5, then the condition is true, and the code block inside the loop is executed.
// The code block inside the loop is to log the value of i to the console. The value of i is 0 so the code will show the value of 0.

/* How Does the For...of Loop Work, and When Should You Use It? ===================================
-A for...of loop is used when you need to loop over values from an iterable. Examples of iterables would be arrays, and strings.
-Here is the basic syntax for for...of loops:

for (variable of iterable) {
    code block to be executed
}

- If you have an array of numbers, the variable would be the current number in the array. If you have a string, the variable would be the current character in the string.
*/

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
// We have created a variable num and in the first iteration it is 1, then 2, then so on.

// Here is another example where we have a string and we want to loop over each character and log it to the console

const str = "freeCodeCamp";

for (let char of str) {
  console.log(char);
}
// It is important to note that you can use "let" and "const" when declaring a variable inside a for...of loop.
// But when you are using const though, make sure that the value doesnt change inside the loop. if it does you will get an error.

// Let's take a look at one last example dealing with an array of object.
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 },
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
