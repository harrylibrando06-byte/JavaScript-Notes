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
