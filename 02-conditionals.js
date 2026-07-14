// date: 6/13/2026
const weatherCondition = Math.floor(Math.random() * 3 + 1);
switch (weatherCondition) {
  case 1:
    console.log("It is sunny");
    break;
  case 2:
    console.log("It is rainy");
    break;
  case 3:
    console.log("It is cloudy");
    break;
  default:
    console.log("I don't know what tf is going on");
    break;
}
// Ternary operator:
// Condition ? Run this if True : Run this if False
// const gt = true
// const tern = gt ? "real" : "fake";
