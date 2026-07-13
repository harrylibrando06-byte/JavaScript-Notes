let grade;

function simpleGrader(score) {
  if (score >= 90 && score <= 100) {
    return (grade = "A");
  } else if (score >= 80 && score <= 89) {
    return (grade = "B");
  } else if (score >= 70 && score <= 79) {
    return (grade = "C");
  } else {
    return (grade = "F");
  }
}
// console.log(simpleGrader(81));
