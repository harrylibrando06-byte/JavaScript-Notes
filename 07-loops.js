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

/* What Is the For...in Loop, and When Should You Use It? =========================================
- A for...in loop is best used when you need to loop over the properties of an object.
- Here is the basic syntax for for...in loop: 

for (variable in object) {
    code block to be executed;
};

- The variable in the example is the current object property that is being looped over.
*/
// Example:

const fruit = {
  name: "apple",
  color: "red",
  price: 0.99,
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}

// Example
const personIn = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

for (const prop in personIn) {
  console.log(personIn[prop]);
}
// The address property is an object itself. The for...in loop will also loop over the properties of the person object and log the entire address object to the console.
// If you want to loop over the properties of the address object, you can nest another for...in loop inside the first one.

const isObject = (obj) => {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};

for (const prop in personIn) {
  if (isObject(personIn[prop])) {
    for (const nestedProp in personIn[prop]) {
      console.log(personIn[prop][nestedProp]);
    }
  } else {
    console.log(personIn[prop]);
  }
}
// In this example, we have a custom function isObject that checks if the value is an object.

// The Array.isArray method is used to check if the value is an array. By placing the logical NOT operator (!) in front of the method, we are checking if the value is not an array.

// The reason why we can't just use typeof equals 'object' is because arrays are also considered objects in JavaScript. We want to exclude arrays from the check.

// Also, due to a historical bug in JavaScript, typeof null returns 'object'. So we want to also exclude null values from the check.

// If the condition is true, we nest another for...in loop that will loop over the properties of the nested object and log the value to the console.

// The nestedProp variable represents the current property of the nested object.

/* What Is a While Loop, and How Does It Differ from the Do...while Loop? =========================
- A while loop will execute a block of code as long as the condition is true. Here is the basic syntax:

while (condition) {
code block to be executed
}

- While loop is important if you do not know how many times you need to run a block of code.
*/

// Example;
let counter = 0;
while (counter <= 5) {
  console.log(counter);
  counter++;
}

/* Another loop similar to the while loop would be the do...while loop. Here is the basic syntax:
do {
    code block to be executed
} while (condition);
*/
// One key difference between a do...while loop and a while loop is that the do...while loop will execute the block of code at least once before checking the condition. Example of a do...while loop:

let counterD = 0;

do {
  console.log(counterD);
  counterD++;
} while (counterD < 5);

// while loop will check the condition first, if it's true it will execute the code block, the do...while loop will execute first the code block then just check the condition, if it's true it will execute the code block again.
