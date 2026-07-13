// 6/26/2026 arrays ===============================================================================

let fruits = ["mullberry", "apple", "banana"];

fruits[3] = "Mango";
// console.log(fruits[3]);

const newLength = fruits.push("Hatdog");
// console.log(newLength);
// push() method insert a new string or whatever at the end of an array.
// console.log(fruits[4]);

let lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);
// pop() method removes the last element in the array and returns that removed element

let number = [2, 3];
let newValue = number.unshift(1);
// console.log(newValue);
// console.log(number);
// unshift() method are similar to push() method but instead of changing the last index it change the starting index.

let colors = ["red", "orange", "purple", "white"];
let coNewValue = colors.shift(); // Fixed: shift doesn't take an index parameter
// console.log(coNewValue);
// console.log(colors);
// shift() method removes the first element in the array and returns that element.

//one dimensional and three dimensional arrays
// *One dimensional array often called arrays are one line of code that stores multiple values, think of it like a locker horizontally that stores an object and can be accessed if you know the number.

//2 dimensional arrays
let chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];
// console.log(chessboard[0][3])
// console.log(chessboard[7][4])

//6/27/2026

//array destructuring:
let anotherFruits = ["apple", "banana", "orange"];
//array destructuring allows us to access arrays without using indexing

let [first, second, third] = anotherFruits;

// console.log(first); // "apple"
// console.log(second); // "banana"
// console.log(third); // "orange

let dColor = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = dColor;
// console.log(firstColor);
// console.log(thirdColor);

let dNumbers = [1, 2, 4, 5, 6, 7];
let [a, b, c, ...rest] = dNumbers;

// console.log(a);
// console.log(b)
// console.log(c)
// console.log(rest)

// How Can You Use String and Array Methods to Reverse a String?
/* split() 

* "" splits the string to individual characters
* " " splits the string wherever the space occur
* "_" splits the string at each dash

reverse()
-reverses the element arrays in place

join() 
-The join() method creates and returns a new string by concatenating all the elements in an array, separated by a specified separator string.
*/

let splitStr = "hello";
let charArray = splitStr.split("").reverse().join("");
// console.log(charArray);
// let reverseStr = charArray.reverse();
// console.log(charArray);
// console.log(reverseStr.join(""))

// 7/2/2026 =======================================================================================

/* IndexOfMethod 
* to find the first element inside an array.
* if the element cannot be found then it will return -1.
*here is the basic syntax: array.indexOf(element, fromIndex). 
-element represent the value you want to search for within the array.
-fromIndex parameter is the position from which the search would start(fromIndex parameter is optional);

/* splice()
*allows you to add or remove elements from any position in an array.
*return value are the removed items from the array.
*if nothing was removed, empty array [] will be return.
*it will mutate the array instead of returning a new array.

*here is the basic syntax
array.splice(startIndex, itemsToRemove, item1, item2)
*start index - specifies the index at which to begin modifying the array.
*itemsToRemove is an optional parameter indicating how many elements to remove.
*If itemsToRemove is omitted, splice will remove all elements from startIndex to the end of the array.
startIndex specifies the index at which to begin modifying the array, while itemsToRemove is an optional parameter indicating how many elements to remove. If itemsToRemove is omitted, splice() will remove all elements from startIndex to the end of the array. The subsequent parameters (item1, item2, and so on) are the elements to be added to the array, beginning at the start index.


/* includes()
-to check if an arrays hold a specific values.
-includes(valueToCheck, optionalStartingPoint)
-includes used ===(strict equality)

/* shallow copy of an array. 
-concat() method. This method creates a new array by merging two or more arrays.
-concat pulls the elements out and puts them into a new flat array. The empty array [] is just the starting container — it receives all the copied elements.

* slice() method
-if no arguments it will return shallow copy of the whole array

* (...) spread operator 
- example: 
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

In summary, shallow copies of arrays can be easily created using methods like concat(), slice(), or the spread operator. These methods are useful for creating new arrays that can be manipulated independently of the original array.


*javascript review
-to access an array: array[index], it will return undefined if nothing was found.
-length property: this property used to return the number of items in an array. example {
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers.length) // 3
}

Accessing Elements From Arrays: To access elements from an array, you will need to reference the array followed by its index number inside square brackets.

example code: 
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers[0]) // "Jessica"
console.log(developers[1]) // "Naomi"

console.log(developers[10]) // undefined


length Property: This property is used to return the number of items in an array.
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers.length) // 3


Array Destructuring: 
const fruits = ["apple", "banana", "orange"];

const [first, second, third] = fruits;

console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"


Rest Syntax:
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
const [first, second, ...rest] = fruits;

console.log(first); // "apple"
console.log(second); // "banana"
console.log(rest); // ["orange", "mango", "kiwi"]
*/
