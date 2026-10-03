const mutation = (arr) => {
  if (arr[0].toLowerCase() === arr[1].toLowerCase()) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

mutation(["hello", "hey"]);
