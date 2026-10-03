// const mutation = (arr) => {
//   if (arr[0].toLowerCase() === arr[1].toLowerCase()) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// };

// mutation(["hello", "hey"]);

const mutation = (arr) => {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();

  for (let letter of secondStr) {
    if (!firstStr.includes(letter)) {
      return false;
    }
  }

  return true;
};

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
