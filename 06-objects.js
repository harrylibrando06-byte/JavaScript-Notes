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

// console.log(objectPerson.name); // alice
// console.log(objectPerson["age"]); // 18
// console.log(objectPerson["the quick brown fox"]); // jumps over the lazy dog

const obPer = {
  name: "Bobet",
  age: 30,
  city: "pampanga",
};

const { name, ...natitira } = obPer;

// console.log(natitira);

let propertyName = "name";

// console.log(obPer[propertyName]); // 'Bobet'

//how to delete an object
delete obPer.name;
// console.log(obPer["name"]); // undefined

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

// console.log(Object.hasOwn(propPerson, "age")); // true
// console.log(Object.hasOwn(propPerson, "job")); // false
// object.hasOwn() only check if the property exist, that means it still return true if the value is 0, null, undefined

let user = {
  name: "chigibogs",
  score: 0,
  isActive: false,
  nickname: null,
};

// Object.hasOwn() correctly reports these all exist
// console.log(Object.hasOwn(user, "nickname")); //true (value is null, but property exists)
// console.log(Object.hasOwn(user, "score")); //true (value is 0, but property exists)
// console.log(Object.hasOwn(user, "isActive")); //true (value is false, but property exists)
// console.log(Object.hasOwn(user, "email")); //true (property was never added)

// Danger! Using if() directly gives wrong results for falsy values
if (user.score) {
  // console.log('has score'); //this will not print even though score exist
}

// Safe! Object.hasOwn() gives correct result
if (Object.hasOwn(user, "score")) {
  // console.log("has score:", user.score); // Has score: 0
}

// another way to check for an existence of a property in an object is to use in operator
//example:

let fused = {
  nel: "tex",
  san: "dugo",
};

// console.log("nel" in fused); //true
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

// console.log(person().contact.phone.home); //'123-456-789'
// console.log(person()["contact"]["phone"]["work"]);

//Now, let's take a look at how we can access data where one of the object properties has the value of an array.
function modifiedPerson() {
  return {
    name: "Alice",
    age: 30,
    addresses: [
      { type: "home", street: "123 Main St", city: "Anytown" },
      { type: "work", street: "67 gabort St", city: "Workville" },
    ],
  };
}

// console.log(modifiedPerson().addresses[1].city); // 'Workville'
// console.log(modifiedPerson().addresses[0].city); // 'Anytown'

/* What Is the Difference Between Primitive and Non-Primitive Data Types?
-primitive data types include: bigInt, number, string, boolean, null, undefined, and symbol.
-These types are called "primitive" because they represent single values and are not objects. 

-Non-primitive data types on the other hand 
 -In JavaScript, these are objects, which include regular objects, arrays, and functions. Unlike primitives, non-primitive types can hold multiple values as properties or elements.
example: 
let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num2); // 5
-In this example, we are assigning a primitive value (5) from num1 to num2. This creates an independent copy of the value. As a result, any changes made to the original variable (num1) do not affect the copy (num2).

example:
const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31
*/

// What Is the Difference Between Functions and Object Methods?

function gReet(name) {
  return `Hello ${name}!`;
}
// console.log(gReet("alice")); // 'Hello alice!'

const peRson = {
  name: "bob",
  age: 25,
  sayHello: function (name) {
    return `Hello my name is ${name} ${this.name}`;
  },
};
// console.log(peRson.sayHello("king"));
//this refers to the object that owns the method — in this case, peRson

/* What Is the Object() Constructor, and When Should You Use It?
-In JavaScript, a constructor is a special type of function used to create and initialize objects. It is invoked with the new keyword and can initialize properties and methods on the newly created object. */

const numForObj = 42;
const objNum = Object(numForObj); // create a wrapper for the number
// console.log(objNum); // 42
// console.log(typeof objNum); // 'object'

const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true,
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true,
};

const getSpecies = (animal) => {
  return animal.species;
};

// console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

// console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

// console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

// console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

// console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

// console.log(hasHabitat(tiger));
// console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};

// console.log(getProperty(tiger, "species"));
// console.log(getProperty(elephant, "age"));

/* Working with JSON ==============================================================================
-JSON stands for JavaScript Object Notation
-Lightweight, text-based data format
-commonly used to exchange data between a server and web app

##How Do JSON.parse() and JSON.stringify() Work?
-There are two powerful methods in JavaScript for handling JSON data: JSON.parse() and JSON.stringify(). These methods are commonly used to convert between JSON strings and JavaScript objects.
-JSON.stringify() used to convert JavaScript object into JSON string
-JSON.stringify() takes three arguments: JSON.stringify(value, replacer, space) 
*/

// Example for JSON.stringify()
const fuse = {
  prong: 3,
  material: "copper",
  outler: 4,
};

const stringify = JSON.stringify(fuse);

console.log(stringify);

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

console.log(JSON.stringify(developerObj, ["firstName", "country"]));
// In this example, we have a developerObj with four properties. When we use the JSON.stringify() method, we can pass in an array for the second parameter and specify which properties we want stringified. The result will be a stringified object containing only the firstName and country properties.

// another optional parameter for stringify would be the spacer parameter, this allows you to control the spacing for the stringified result
console.log(JSON.stringify(developerObj, null, 2));
