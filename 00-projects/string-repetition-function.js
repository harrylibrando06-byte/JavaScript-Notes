const repeatStringNumTimes = (str, num) => {
  let result = "";

  for (let i = 0; i < num; i++) {
    if (num <= 0) return result;
    else {
      result += str;
    }
  }

  return result;
};

console.log(repeatStringNumTimes("*", 3));
