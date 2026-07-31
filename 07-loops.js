/* How Do Loops and Iteration Work in JavaScript? 
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
