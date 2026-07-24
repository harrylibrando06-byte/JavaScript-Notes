const questions = [
  // The instruction says, create a 5 object with 4 keys.
  {
    category: "Movies",
    question: "Who directed Parasite?",
    choices: ["Park Chan-wook", "Bong Joon-ho", "Kim Ki-duk"],
    answer: "Bong Joon-ho",
  },
  {
    category: "Technology",
    question: "What does RAM stand for?",
    choices: [
      "Random Access Memory",
      "Read And Modify",
      "Rapid Application Module",
    ],
    answer: "Random Access Memory",
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Beijing", "Tokyo"],
    answer: "Tokyo",
  },

  {
    category: "Science",
    question: "What is H2O?",
    choices: ["Water", "Oxygen", "Hydrogen"],
    answer: "Water",
  },
  {
    category: "History",
    question: "Who discovered the Philippines?",
    choices: ["Magellan", "Columbus", "Vespucci"],
    answer: "Magellan",
  },
];

const getRandomQuestion = (question) => {
  let randomNum = Math.floor(Math.random() * question.length);
  return question[randomNum];
};

const getRandomComputerChoice = (choices) => {
  let randomAnswers = Math.floor(Math.random() * choices.length);
  return choices[randomAnswers];
};
