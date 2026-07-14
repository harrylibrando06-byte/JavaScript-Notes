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

function truncateString(string, length) {
  if (string.length > length) {
    return string.slice(0, length) + "...";
  } else if (string.length <= length) {
    // Fixed missing .length property
    return string;
  }
}
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
