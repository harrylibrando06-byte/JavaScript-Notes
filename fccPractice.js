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

// ================================================================================================

/*JavaScript Math review {

*Number data type includes integers, floating number(numbers with decimal places), infinity and NaN.
*common arithmetic operations: +(adds number), -(subract), *(multiply), /(devide), %(remeinder operator: returns the reminder of a devision),
 **(exponentiation: raises a number to the power of another).
 
 Increment Operator: This operator is used to increase the value by one. The prefix notation ++num increases the value of the variable first, then returns a new value. The postfix notation num++ returns the current value of the variable first, then increases it, flip it and there is decrement operator.

 compound assignment operators {
 addition assignment: += add a value and assign it in a variable.
 subtraction assignment: -= subtract a value and assign it in a variable.
}

Ternary operator: 
Condition ? Run this if True : Run this if False
const gt = true
const tern = gt ? "real" : "fake"; 

}*/

// date: 6/13/2026
const weatherCondition = Math.floor(Math.random() * 3 + 1);
switch (weatherCondition) {
  case 1:
    // console.log("It is sunny");
    break;
  case 2:
    // console.log("It is rainy");
    break;
  case 3:
    // console.log("It is cloudy");
    break;
  default:
    // console.log("I don't know what tf is going on");
    break;
}

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

// 6/16/2026
function booWho(boolean) {
  if (typeof boolean == "boolean") {
    return true;
  } else {
    return false;
  }
}
// console.log(booWho(true));        // true
// console.log(booWho(false));       // true
// console.log(booWho([1, 2, 3]));   // false
// console.log(booWho(NaN));         // false
// console.log(booWho("true"));      // false

function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let strStart = email[0];
  let strEnd = email[atIndex - 1];
  let thatNumber = atIndex - 2;
  let asterisk = "*".repeat(thatNumber);
  let domain = email.slice(atIndex); // Fixed: slicing at index position
  return strStart + asterisk + strEnd + domain;
}
// console.log(maskEmail("apple.pie@example.com"));
// console.log(maskEmail("user@domain.org"));

// 6/21/2026
let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A" ||
    card === 10
  ) {
    count--;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
// console.log(cardCounter(3))

let grade;

function simpleGrader(score) {
  if (score >= 90 && score <= 100) {
    return (grade = "A");
  } else if (score >= 80 && score <= 89) {
    return (grade = "B");
  } else if (score >= 70 && score <= 79) {
    return (grade = "C");
  } else {
    return (grade = "F");
  }
}
// console.log(simpleGrader(81));

let year = 1000;
function isLeapYear(year) {
  if (year % 400 === 0) {
    // Fixed order of checks:
    return year + " is a leap year."; // Specific 400 rule goes first
  } else if (year % 100 === 0) {
    return year + " is not a leap year.";
  } else if (year % 4 === 0) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}
// console.log(isLeapYear(year));

function truncateString(string, length) {
  if (string.length > length) {
    return string.slice(0, length) + "...";
  } else if (string.length <= length) {
    // Fixed missing .length property
    return string;
  }
}
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))

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

//fcc build a shopping list ===========================
// console.log("Grocery shopping list");

const shoppingList = [];

// console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

// console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
// console.log(getShoppingListMsg(shoppingList));

// console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
// console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
// console.log(getShoppingListMsg(shoppingList));

// console.log("This looks like too much junk food.");

shoppingList.pop();
// console.log(getShoppingListMsg(shoppingList));

// console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
// console.log(getShoppingListMsg(shoppingList));

// console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

// console.log(getShoppingListMsg(shoppingList))

// Build a Lunch Picker Program 6/28/2026 =========================================================

// let lunches = [];

// function addLunchToEnd(array, string) {
//   array.push(string);
//   // console.log(`${string} added to the end of the lunch menu.`)
//   return array;
// }
// addLunchToEnd(lunches, "Tacos");
// addLunchToEnd(["Pizza", "Tacos"], "Burger");
// // console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

// function addLunchToStart(array, string) {
//   array.unshift(string);
//   // console.log(`${string} added to the start of the lunch menu.`)
//   return array;
// }
// addLunchToStart(lunches, "Sushi");

// function removeLastLunch(array) {
//   let removedLunch = array.pop();
//   if (array.length == "0") {
//     // console.log("No lunches to remove.");
//   } else {
//     // console.log(`${removedLunch} removed from the end of the lunch menu.`)
//   }
//   return array;
// }
// removeLastLunch(["Stew", "Soup", "Toast"]);
// removeLastLunch([]);
// // console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

// function removeFirstLunch(array) {
//   let removedLunch = array.shift();
//   if (array.length == 0) {
//     // console.log("No lunches to remove.")
//   } else {
//     // console.log(`${removedLunch} removed from the start of the lunch menu.`)
//   }
//   return array;
// }
// removeFirstLunch([]);
// removeFirstLunch(["Salad", "Eggs", "Cheese"]);
// // console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

// function getRandomLunch(array) {
//   let randomIndex = Math.floor(Math.random() * array.length);
//   let randomItem = array[randomIndex];
//   if (array.length == 0) {
//     // console.log("No lunches available.");
//   } else {
//     // console.log(`Randomly selected lunch: ${randomItem}`)
//   }
//   return array;
// }
// getRandomLunch(["hotdog", "Taco", "cheese"]);

// function showLunchMenu(array) {
//   if (array.length == 0) {
//     // console.log("The menu is empty.");
//   } else {
//     // console.log(`Menu items: ${array.join(", ")}`)
//   }
//   return array;
// }
// showLunchMenu(["Greens", "Corns", "Beans"]);
// showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);

//6/29/2026 Build a Golf Score Translator =========================================================
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];
// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }
// }
// console.log(golfScore(1, 1));
// golfScore(3, 1);

//recreation of lunch picker program
let lunches = [];

function addLunchToEnd(array, string) {
  array.push(string);
  // console.log(`${string} added to the end of the menu.`);
  // return array;
}
// addLunchToEnd(lunches, "tacos");
// console.log(addLunchToEnd(['hatdog', 'chicken'], 'corndog'))

function addLunchToStart(array, string) {
  array.unshift(string);
  // console.log(`${string} added to the start of the menu.`);
  // return array;
}

function removeLastLunch(array) {
  if (array.length == 0) {
    // console.log("No lunches to remove.");
  } else {
    let lastLunch = array.pop();
    // console.log(`${lastLunch} removed from the end of the menu.`);
  }
  // return array;
}
// removeLastLunch(["pork and beans", "beans and hotdog"]);
// console.log(removeLastLunch(["pork and beans", "beans and hotdog"]));

function removeFirstLunch(array) {
  if (array.length == 0) {
    // console.log("No lunches to remove.");
  } else {
    let firstLunch = array.shift();
    // console.log(`${firstLunch} removed from the start of the menu.`);
  }
  // return array;
}
// removeFirstLunch(["potato", "siopao"]);

function getRandomLunch(array) {
  let randomLunch = Math.floor(Math.random() * array.length);
  if (array.length == 0) {
    // console.log("No lunches available");
    // return array;
  }
  // console.log(`Randomly selected: ${array[randomLunch]}`);
  // return array;
}
// console.log(getRandomLunch(["shawarma", "chick fillet", "fish"]));

function showLunchMenu(array) {
  let lunchMenu = array.join(", ");
  if (array.length == 0) {
    // console.log("The menu is empty");
  } else {
    // console.log(`Menu Items: ${lunchMenu}`);
  }
  // return array;
}
// console.log(showLunchMenu(["pasta", "fillet", "caldereta"]));

//6/30/2026 Build a Golf Score Translator(recreation) =========================================================
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, stroke) {
  if (stroke === 1) {
    return names[0];
  } else if (stroke <= par - 2) {
    return names[1];
  } else if (stroke === par - 1) {
    return names[2];
  } else if (stroke === par) {
    return names[3];
  } else if (stroke === par + 1) {
    return names[4];
  } else if (stroke === par + 2) {
    return names[5];
  } else if (stroke >= par + 3) {
    return names[6];
  }
}
//  console.log(golfScore(2, 3))

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

/*  ================================Object in javascript=========================================== */
// 7-11-2026

//object is like a cabinet

const objectExample = {
  propertyName: "value",
};

const objectPerson = {
  name: "alice",
  age: 18,
  city: "cidade de deus",
  "the quick brown fox": "jumps over the lazy dog",
};

//how to access a object properties, there are two ways: dot notation and bracket notation

console.log(objectPerson.name);
console.log(objectPerson["age"]);
console.log(objectPerson["the quick brown fox"]);

const obPer = {
  name: "Bobet",
  age: 30,
  city: "pampanga",
};

const { name, ...natitira } = obPer;

console.log(natitira);

let propertyName = "name";

console.log(obPer[propertyName]); // 'Bobet'

//how to delete an object
delete obPer.name;
console.log(obPer["name"]); // undefined

//question: what is destructuring

// How to Check If an Object Has a Property?

// Let's start with the hasOwnProperty() method: it returns boolean
//example

const propPerson = {
  name: "bogart",
  age: 6,
  city: "lb liquors",
};

// console.log(propPerson.hasOwnProperty("name")); // true
// console.log(propPerson.hasOwnProperty("alcohol")); //false

//hasOwnProperty() it's use if an object has a specific property

// object.hasOwn() is the modern version.
//syntax is: object.hasOwn(object, propertyName)
// example

console.log(Object.hasOwn(propPerson, "age")); // true
console.log(Object.hasOwn(propPerson, "job")); // false
// object.hasOwn() only check if the property exist, that means it still return true if the value is 0, null, undefined

let user = {
  name: "chigibogs",
  score: 0,
  isActive: false,
  nickname: null,
};

// Object.hasOwn() correctly reports these all exist
console.log(Object.hasOwn(user, "nickname")); //true (value is null, but property exists)
console.log(Object.hasOwn(user, "score")); //true (value is 0, but property exists)
console.log(Object.hasOwn(user, "isActive")); //true (value is false, but property exists)
console.log(Object.hasOwn(user, "email")); //true (property was never added)

// Danger! Using if() directly gives wrong results for falsy values
if (user.score) {
  // console.log('has score'); //this will not print even though score exist
}

// Safe! Object.hasOwn() gives correct result
if (Object.hasOwn(user, "score")) {
  console.log("has score:", user.score); // Has score: 0
}

// another way to check for an existence of a property in an object is to use in operator
//example:

let fused = {
  nel: "tex",
  san: "dugo",
};

console.log("nel" in fused); //true
//basically it's means is there a nel 'in' fused = true

function person() {
  return {
    name: "alice",
    age: 18,
    contact: {
      email: "alice@example.com",
      phone: {
        home: "123-456-789",
        work: "398-765-4321",
      },
    },
  };
}

console.log(person().contact.phone.home); //'123-456-789'
console.log(person()["contact"]["phone"]["work"]);
