const findLongestWordLength = (str) => {
  //   return str.split(" ").reduce((current, longest) => {
  //     return current.length > longest.length ? console.log(current.length) : longest.length;
  //   });
  function longFinder(current, longest) {
    if (longest.length < current.length) {
      return current;
    } else {
      return longest;
    }
  }
  let result = str.split(" ").reduce(longFinder);
  return result.length;
};

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);
