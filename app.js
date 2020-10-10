const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let score = [];
let questionNumber = [];

const quizGameApp = () => {
  let quizGame = document.querySelector("#quiz-game");

  const section = document.createElement("section");

  const header = document.createElement("h1");
  header.innerText = "Quiz Game";

  const questionContainer = document.createElement("div");
  questionContainer.className = "questions";

  const questionHeader = document.createElement("h3");
  questionHeader.id = "category";
  const question = document.createElement("h3");
  question.id = "question";

  const optionsContainer = document.createElement("div");
  optionsContainer.id = "option-container";

  const options = document.createElement("ul");
  options.id = "options";

  optionsContainer.appendChild(options);
  questionContainer.appendChild(questionHeader);
  questionContainer.appendChild(question);
  questionContainer.appendChild(optionsContainer);
  section.appendChild(header);
  section.appendChild(questionContainer);
  quizGame.appendChild(section);
};

let loadQuestions = () => {
  const questionContainer = document.querySelector(".questions");
  const questionHeader = document.querySelector("#category");
  const question = document.querySelector("#question");
  const optionsContainer = document.querySelector("#option-container");
  const options = document.querySelector("#options");

  const numberOfQuestions = questions.length;

  for (let i = 0; i < numberOfQuestions; i++) {
    questionHeader.innerHTML = `<h3>${
      questions[i].category
    } <br><br> <span>Question ${i + 1}</span></h3>`;
    question.innerText = questions[i].question;
    let type = questions[i].type;
    let optionsList = [];
    switch (type) {
      case "multiple":
        optionsList.push(questions[i].correct_answer); // add correct answer to the options array

        for (let option of questions[i].incorrect_answers) {
          optionsList.push(option); // add incorrect answers to the option array
        }
        const shuffleOptions = shuffle(optionsList);
        for (let i = 0; i < shuffleOptions.length; i++) {
          const option = document.createElement("li");

          option.innerHTML = `<input type="radio" id="option${
            i + 1
          }" name="option${i + 1}" value="${shuffleOptions[i]}"
          >
   <label for="option${i + 1}">${shuffleOptions[i]}</label>`;
          option.style.display = "block";
          options.appendChild(option);
        }
        break;
      case "boolean":
        break;
      default:
        return;
        break;
    }
  }

  return questions;
};

let shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

let nextQuestion = () => {};

let prevQuestion = () => {};

window.onload = function () {
  //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
  //HINT: for each question, create a container with the "question"
  //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
  //when EVERY question has an answer (google for how to get a value from a radio button with JS)
  //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  //Display first question with a title + radio button
  //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.

  quizGameApp();
  loadQuestions();
  console.log(shuffleOptions(arr));
};

//HOW TO calculate the result
//You can do it in 2 ways:
//If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
//If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
