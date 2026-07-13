//6/29/2026 Build a Golf Score Translator =========================================================
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];
// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }
// }
// console.log(golfScore(1, 1));
// golfScore(3, 1);

//6/30/2026 Build a Golf Score Translator(recreation) =========================================================
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, stroke) {
  if (stroke === 1) {
    return names[0];
  } else if (stroke <= par - 2) {
    return names[1];
  } else if (stroke === par - 1) {
    return names[2];
  } else if (stroke === par) {
    return names[3];
  } else if (stroke === par + 1) {
    return names[4];
  } else if (stroke === par + 2) {
    return names[5];
  } else if (stroke >= par + 3) {
    return names[6];
  }
}
//  console.log(golfScore(2, 3))
