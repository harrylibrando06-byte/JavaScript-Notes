const fearNoLetter = (str) => {
  const alphabet = "abcdefjhijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length - 1; i++) {
    let currentIndex = alphabet.indexOf(str[i]);
    let expectedNext = alphabet[currentIndex + 1];
    let actualNext = str[i + 1];

    if (expectedNext !== actualNext) {
      return expectedNext;
    }
  }
};

console.log(fearNoLetter("abce")); // "d"
console.log(fearNoLetter("abcdefghjklmno")); // "i"
console.log(fearNoLetter("stvwx")); // "u"
console.log(fearNoLetter("bcdf")); // "e"
console.log(fearNoLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
