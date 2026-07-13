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
