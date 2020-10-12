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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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

const user = {
  difficultyLevel: "",
  numberOfQuestions: "",
  currentType: "",
  question: [],
  options: [],
  correct_answer: [],
  userChoice: [],
  scorePoint: 0,
  currentQuestion: 1,
};

const isUserSet = () => {
  if (user.difficultyLevel !== "" && user.numberOfQuestions !== "") {
    return true;
  } else {
    return false;
  }
};

// Create Elements
const createDiv = (setID, setClassName) => {
  let div = document.createElement("div");
  div.id = setID;
  div.className = setClassName;
  return div;
};

const createSpan = (setID) => {
  let span = document.createElement("span");
  span.id = setID;
  return span;
};

const createSection = () => {
  return document.createElement("section");
};

const createHeader1 = () => {
  let h1 = document.createElement("h1");

  return h1;
};

const createHeader2 = (setID, setClassName) => {
  let h2 = document.createElement("h2");
  h2.id = setID;
  h2.className = setClassName;
  return h2;
};

const createHeader3 = (setID, setClassName) => {
  let h3 = document.createElement("h3");
  h3.id = setID;
  h3.className = setClassName;
  return h3;
};

const createParagraph = (setID, setClassName) => {
  let para = document.createElement("p");
  p.id = setID;
  p.className = setClassName;
  return para;
};

const createUnorderedList = (setID) => {
  let ul = document.createElement("ul");
  ul.id = setID;

  return ul;
};

const createListItems = () => {
  return document.createElement("li");
};

const createRadioInput = (setID, setName, setValue) => {
  let radio = document.createElement("input");
  radio.type = "radio";
  radio.id = setID;
  radio.name = setName;
  radio.value = setValue;
  return radio;
};

const createRadioInputLabel = (setFor) => {
  let label = document.createElement("label");
  label.htmlFor = setFor;
  return label;
};

const createComboBox = (setID, setName) => {
  let cb = document.createElement("select");
  cb.id = setID;
  cb.name = setName;
  return cb;
};

const createComboBoxOption = () => {
  let cbOption = document.createElement("option");
  return cbOption;
};

const createInputButton = (setID, setType, setValue) => {
  let button = document.createElement("input");
  button.id = setID;
  button.type = setType;
  button.value = setValue;
  return button;
};

/****************  Initialize Game ********************/
let quizGame = document.querySelector("#quiz-game");
let section = createSection();
let header = createHeader1();

const initGame = () => {
  // return quizGame
  header.innerText = "Quiz Game";
  section.appendChild(header);
  return quizGame.appendChild(section);
};

/****************  Helper Functions ********************/

// returns Total Number of Questions from Question Bank
const getTotalNumberOfQuestions = (array) => {
  return array.length;
};

// Shuffles an array
const shuffle = (array) => {
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

/****************  Start Game  ********************/

const startScreenContainer = createDiv("start-screen", "");
const questionNumberComboBox = createComboBox("qn-combo", "num-of-ques");
const difficultyLevelCombox = createComboBox("dl-combo", "difficulty-level");
const startButton = createInputButton("start", "submit", "Start Game");
const totalNumOfQuestions = getTotalNumberOfQuestions(questions);

const startGameScreen = () => {
  // return startScreenContainer

  for (let i = 0; i <= totalNumOfQuestions; i++) {
    if (i === 0) {
      let questionNumberComboBoxOption = createComboBoxOption();
      questionNumberComboBoxOption.value = `${i}`;
      questionNumberComboBoxOption.innerText = "Select Number of Questions";
      questionNumberComboBox.appendChild(questionNumberComboBoxOption);
    } else {
      let questionNumberComboBoxOption = createComboBoxOption();
      questionNumberComboBoxOption.value = `${i}`;
      questionNumberComboBoxOption.innerText = `${i}`;
      questionNumberComboBox.appendChild(questionNumberComboBoxOption);
    }
  }

  for (let i = 0; i <= 1; i++) {
    if (i === 0) {
      let difficultyLevelComboxOption = createComboBoxOption();
      difficultyLevelComboxOption.value = `${i}`;
      difficultyLevelComboxOption.innerText = "Select Difficulty Level";
      difficultyLevelCombox.appendChild(difficultyLevelComboxOption);
    } else {
      let difficultyLevelComboxOption = createComboBoxOption();
      difficultyLevelComboxOption.value = "easy";
      difficultyLevelComboxOption.innerText = "Easy";
      difficultyLevelCombox.appendChild(difficultyLevelComboxOption);
    }
  }
  startButton.addEventListener("click", startGame);
  startScreenContainer.appendChild(questionNumberComboBox);
  startScreenContainer.appendChild(difficultyLevelCombox);
  startScreenContainer.appendChild(startButton);
  return startScreenContainer;
};

const startGame = () => {
  let difficultyLevel = document.querySelector("#dl-combo");
  let numofQues = document.querySelector("#qn-combo");
  if (difficultyLevel.value !== "0" && numofQues.value !== "0") {
    user.numberOfQuestions = numofQues.value;
    user.difficultyLevel = difficultyLevel.value;

    initGame().removeChild(startGameScreen());
    initGame().appendChild(playGameScreen());
    loadQuestions(user.currentQuestion);
    //document.getElementById("question-container").style.display = "block";
    //document.getElementById("start-screen").style.display = "none";

    // // load first question
    // loadQuestions(user.currentQuestion);

    // // call onclick event on user choice
    // displayResult();

    // get list of radio buttons with specified name
  } else {
    alert("Select Number of Questions and Difficulty Level to Begin!");
    return false;
  }
};

/****************  Play Game  ********************/
const playGameContainer = createDiv("play-game", "");
const category = createHeader3("category", "");
const question = createHeader3("question", "");
const optionsContainer = createDiv("option-container");
const optionList = createUnorderedList("option-list");

const playGameScreen = () => {
  optionsContainer.appendChild(optionList);
  playGameContainer.appendChild(category);
  playGameContainer.appendChild(question);
  playGameContainer.appendChild(optionsContainer);

  return playGameContainer;
};

const loadQuestions = (questionNumber) => {
  const getoptionsContainer = document.querySelector("#play-game");
  if (!document.getElementById("option-list")) {
    getoptionsContainer.appendChild(optionList);
  }
  if (document.getElementById("right-answer")) {
    getPlayGameContainer.removeChild(document.getElementById("right-answer"));
  }
  const getOptionList = document.querySelector("#option-list");
  const numofQues = user.numberOfQuestions;

  if (questionNumber <= numofQues) {
    category.innerHTML = `<h2>${
      questions[questionNumber - 1].category
    } </h2><p><small>Question ${questionNumber} of ${numofQues}</small></p>`;

    question.innerText = questions[questionNumber - 1].question;
    // save question in user object
    user.question.push(questions[questionNumber - 1].question);

    user.currentType = questions[questionNumber - 1].type;
    let tempOptionsList = [];
    switch (user.currentType) {
      case "multiple":
        tempOptionsList.push(questions[questionNumber - 1].correct_answer); // add correct answer to the temporary Option List array
        user.correct_answer.push(questions[questionNumber - 1].correct_answer); // save correct answer in the user object
        for (let option of questions[questionNumber - 1].incorrect_answers) {
          tempOptionsList.push(option); // add incorrect answers to the option array
        }
        const shuffleOptions = shuffle(tempOptionsList);
        // save options in user object
        user.options.push(shuffleOptions);

        for (let i = 0; i < shuffleOptions.length; i++) {
          const option = createListItems();

          option.innerHTML = `<input type="radio" id="option${
            i + 1
          }" name="user_answer" value="${shuffleOptions[i]}">
              <label for="option${i + 1}">${shuffleOptions[i]}</label>`;
          option.addEventListener("click", displayResult);
          getOptionList.appendChild(option);
        }

        // Empty the tempOptionsList
        for (let i = 0; i < tempOptionsList.length; i++) {
          tempOptionsList.pop();
        }
        break;
      case "boolean":
        tempOptionsList.push(questions[questionNumber - 1].correct_answer); // add correct answer to the temporary Option List array
        user.correct_answer.push(questions[questionNumber - 1].correct_answer);
        tempOptionsList.push(
          questions[questionNumber - 1].incorrect_answers[0]
        ); // add incorrect answer to the options array
        const booleanOptions = shuffle(tempOptionsList);
        // save options in user object
        user.options.push(booleanOptions);
        for (let i = 0; i < booleanOptions.length; i++) {
          const option = document.createElement("li");

          option.innerHTML = `<input type="radio" id="option${
            i + 1
          }" name="user_answer" value="${booleanOptions[i]}">
            <label for="option${i + 1}">${booleanOptions[i]}</label>`;

          option.addEventListener("click", displayResult);
          getOptionList.appendChild(option);
        }

        // Empty the tempOptionsList
        for (let i = 0; i < tempOptionsList.length; i++) {
          tempOptionsList.pop();
        }
        break;
      default:
        return;
        break;
    }
  }
};

const displayResult = () => {
  if (getUserChoice() !== undefined) {
    result(user.currentQuestion);
    // disable option buttons
    let radios = document.getElementsByName("user_answer");
    // loop through list of radio buttons
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
    // remove event listnener on all the list
    let optionList = document.querySelectorAll("#option-list li");
    for (let list of optionList) {
      list.removeEventListener("click", displayResult);
    }
  }
};

const getUserChoice = () => {
  let val;
  // get list of radio buttons with specified name
  let radios = document.getElementsByName("user_answer");

  // loop through list of radio buttons
  for (let i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      // radio checked?
      val = radios[i].value; // if so, hold its value in val

      break; // and break out of for loop
    }
  }

  return val; // return value of checked radio or undefined if none checked
};

const result = (qn) => {
  // qn stands for question number

  let userChoice = getUserChoice();
  // save user choice in the user object
  user.userChoice.push(userChoice);
  let correct_answer = user.correct_answer;

  let getPlayGameContainer = document.getElementById("play-game");
  let result = createDiv("result");
  let correctAnswer = createDiv("right-answer");
  result.innerText = userChoice;
  result.style.marginBottom = "10px";
  correctAnswer.innerText = correct_answer[qn - 1];
  getPlayGameContainer.appendChild(result);
  if (userChoice !== undefined) {
    if (userChoice === correct_answer[qn - 1]) {
      user.scorePoint += 1;
      result.style.backgroundColor = "#22bb33";
      result.style.color = "#ffffff";
      result.style.padding = "10px";
      result.style.marginBottom = "5px";
    } else {
      result.style.backgroundColor = "#bb2124";
      result.style.color = "#ffffff";
      result.style.padding = "10px";
      result.style.marginBottom = "5px";

      correctAnswer.style.borderColor = "#22bb33";
      correctAnswer.style.borderWidth = "4px";
      correctAnswer.style.borderStyle = "solid";
      correctAnswer.style.color = "#222222";
      correctAnswer.style.padding = "10px";
      getPlayGameContainer.appendChild(correctAnswer);
    }

    const nextQues = createInputButton("nextques", "submit", "Next Question");

    let endgame = createInputButton("result_summary", "submit", "Game Over");

    let totalQues = parseInt(user.numberOfQuestions);
    let currentQues = user.currentQuestion;

    if (currentQues < totalQues) {
      nextQues.addEventListener("click", getNextQuestion);
      getPlayGameContainer.appendChild(nextQues);
    } else if (currentQues === totalQues) {
      endgame.addEventListener("click", endGame);
      endgame.style.backgroundColor = "#808000";
      endgame.style.color = "#ffffff";

      getPlayGameContainer.appendChild(endgame);
    }
  }

  // displays user option with green if correct

  // display user option with red if wrong and also display the right answer
  // display a next question button
};

const getNextQuestion = () => {
  let nq = document.getElementById("nextques");
  let totalQues = parseInt(user.numberOfQuestions);
  let nextques = user.currentQuestion;

  if (nextques < totalQues) {
    nq.addEventListener("click", nextQuestion(user.currentQuestion));
  } else if (nextques === totalQues) {
    let endgame = createInputButton("show-result", "submit", "End Game");
    endgame.addEventListener("click", endGame());
  }
};

const nextQuestion = (n) => {
  // clear previous display
  // increment the next question property of the user object by 1
  // load next question
  // clear previousQuestion
  //document.getElementById("options").innerText = "";
  const getPlayGameContainer = document.getElementById("play-game");
  const getoptionsContainer = document.getElementById("option-list");

  if (document.getElementById("result")) {
    getoptionsContainer.innerHTML = "";
    getPlayGameContainer.removeChild(document.getElementById("result"));
    getPlayGameContainer.removeChild(document.getElementById("nextques"));
  }
  if (document.getElementById("right-answer")) {
    getPlayGameContainer.removeChild(document.getElementById("right-answer"));
  }

  user.currentQuestion = n + 1;

  loadQuestions(n + 1);
};

const endGame = () => {
  let result = user.scorePoint;
  let totalQuestion = user.totalQuestion;
};

window.onload = function () {
  //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
  //HINT: for each question, create a container with the "question"
  //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
  //when EVERY question has an answer (google for how to get a value from a radio button with JS)
  //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  //Display first question with a title + radio button
  //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.

  initGame();
  initGame().appendChild(startGameScreen());

  // const start = startScreen();
  // const quesContainer = questionContainer();
  // quesContainer.style.display = "none";
  // section.appendChild(header);
  // section.appendChild(start);
  // section.appendChild(quesContainer);
  // quizGame.appendChild(section);
};

//HOW TO calculate the result
//You can do it in 2 ways:
//If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
//If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
