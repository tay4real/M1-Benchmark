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

const user = {
  difficultyLevel: "",
  numberOfQuestions: "",
  question: [],
  options: [],
  correct_answer: [],
  userChoice: [],
  scorePoint: 0,
  nextQuestion: 1,
};

const isUserSet = () => {
  if (user.difficultyLevel !== "" && user.numberOfQuestions !== "") {
    return true;
  } else {
    return false;
  }
};

const questionContainer = () => {
  // return container to hold question
  const questionContainer = document.createElement("div");
  questionContainer.id = "question-container";

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
  return questionContainer;
};

const startScreen = () => {
  const startScreenContainer = document.createElement("div");
  startScreenContainer.id = "start-screen";
  const selectQuestionNumber = chooseNumberOfQuestions();
  const selectDifficultyLevel = chooseDifficultyLevel();
  const startGame = startGameButton();
  startScreenContainer.appendChild(selectQuestionNumber);
  startScreenContainer.appendChild(selectDifficultyLevel);
  startScreenContainer.appendChild(startGame);
  return startScreenContainer;
};

const chooseNumberOfQuestions = () => {
  // return options to select number of questions
  const numberOfQuestionsContainer = document.createElement("div");
  numberOfQuestionsContainer.className = "grid-2";
  const selectNumberOfQuestions = document.createElement("select");
  selectNumberOfQuestions.id = "selectNumberOfQuestions";
  selectNumberOfQuestions.name = "selectNumberOfQuestions";

  for (let i = 0; i <= questions.length; i++) {
    if (i === 0) {
      const opt = document.createElement("option");
      opt.value = `${i}`;
      opt.innerText = "Select Number of Questions";
      selectNumberOfQuestions.appendChild(opt);
    } else {
      const opt = document.createElement("option");
      opt.value = `${i}`;
      opt.innerText = `${i}`;
      selectNumberOfQuestions.appendChild(opt);
    }
  }

  numberOfQuestionsContainer.appendChild(selectNumberOfQuestions);
  return numberOfQuestionsContainer;
};

const chooseDifficultyLevel = () => {
  // return options to select difficulty level

  const difficultyContainer = document.createElement("div");
  difficultyContainer.className = "grid-2";
  const selectDifficultyLevel = document.createElement("select");
  selectDifficultyLevel.id = "difficultyLevel";
  selectDifficultyLevel.name = "difficultyLevel";

  for (let i = 0; i <= 3; i++) {
    switch (i) {
      case 0:
        difficultyLevel = document.createElement("option");
        difficultyLevel.value = "0";
        difficultyLevel.innerText = "Select Difficulty Level";
        selectDifficultyLevel.appendChild(difficultyLevel);
        break;
      case 1:
        difficultyLevel = document.createElement("option");
        difficultyLevel.value = "1";
        difficultyLevel.innerText = "Easy";
        selectDifficultyLevel.appendChild(difficultyLevel);
        break;
      case 2:
        difficultyLevel = document.createElement("option");
        difficultyLevel.value = "2";
        difficultyLevel.innerText = "Medium";
        selectDifficultyLevel.appendChild(difficultyLevel);
        break;
      case 3:
        difficultyLevel = document.createElement("option");
        difficultyLevel.value = "3";
        difficultyLevel.innerText = "Hard";
        selectDifficultyLevel.appendChild(difficultyLevel);
        break;
      default:
        return;
    }
  }

  difficultyContainer.appendChild(selectDifficultyLevel);
  return difficultyContainer;
};

const startGameButton = () => {
  //return button to start game
  const startGameButtonContainer = document.createElement("div");
  startGameButtonContainer.className = "grid-1";
  const startGameButton = document.createElement("input");
  startGameButton.id = "start";
  startGameButton.type = "submit";
  startGameButton.value = "Start Game";
  startGameButton.onclick = setUserPreference;

  return startGameButtonContainer.appendChild(startGameButton);
};

let loadQuestions = (questionNumber) => {
  const questionContainer = document.querySelector(".questions");
  const questionHeader = document.querySelector("#category");
  const question = document.querySelector("#question");
  const optionsContainer = document.querySelector("#option-container");
  const options = document.querySelector("#options");

  const numberOfQuestions = questions.length;

  if (questionNumber <= numberOfQuestions) {
    questionHeader.innerHTML = `<h3>${
      questions[questionNumber - 1].category
    } </h3><p><small>Question ${questionNumber} of ${numberOfQuestions}</small></p>`;

    question.innerText = questions[questionNumber - 1].question;
    // save question in user object
    user.question.push(questions[questionNumber - 1].question);

    let type = questions[questionNumber - 1].type;
    let optionsList = [];
    switch (type) {
      case "multiple":
        optionsList.push(questions[questionNumber - 1].correct_answer); // add correct answer to the options array
        // save correct answer in the user object
        user.correct_answer.push(questions[questionNumber - 1].correct_answer);
        for (let option of questions[questionNumber - 1].incorrect_answers) {
          optionsList.push(option); // add incorrect answers to the option array
        }
        const shuffleOptions = shuffle(optionsList);
        // save options in user object
        user.options.push(shuffleOptions);
        for (let i = 0; i < shuffleOptions.length; i++) {
          const option = document.createElement("li");

          option.innerHTML = `<input type="radio" id="option${
            i + 1
          }" name="user_answer" value="${shuffleOptions[i]}">
              <label for="option${i + 1}">${shuffleOptions[i]}</label>`;
          option.style.display = "block";
          options.appendChild(option);
        }
        break;
      case "boolean":
        optionsList.push(questions[questionNumber - 1].correct_answer); // add correct answer to the options array
        optionsList.push(questions[questionNumber - 1].incorrect_answers[0]); // add incorrect answer to the options array
        const booleanOptions = shuffle(optionsList);
        // save options in user object
        user.options.push(booleanOptions);
        for (let i = 0; i < booleanOptions.length; i++) {
          const option = document.createElement("li");

          option.innerHTML = `<input type="radio" id="option${
            i + 1
          }" name="user_answer" value="${booleanOptions[i]}">
            <label for="option${i + 1}">${booleanOptions[i]}</label>`;
          option.style.display = "block";
          options.appendChild(option);
        }
        break;
      default:
        return;
        break;
    }
  }
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

const setUserPreference = () => {
  let difficultyLevel = document.querySelector("#difficultyLevel");
  let numberOfQuestions = document.querySelector("#selectNumberOfQuestions");
  if (difficultyLevel.value !== "0" && numberOfQuestions.value !== "0") {
    user.numberOfQuestions = numberOfQuestions;
    switch (parseInt(difficultyLevel.value)) {
      case 1:
        user.difficultyLevel = "easy";
        break;
      case 2:
        user.difficultyLevel = "medium";
        break;
      case 3:
        user.difficultyLevel = "hard";
        break;
      default:
        return;
    }
    document.getElementById("question-container").style.display = "block";
    document.getElementById("start-screen").style.display = "none";

    // load first question
    loadQuestions(user.nextQuestion);

    // call onclick event on user choice
  } else {
    alert("Select Number of Questions and Difficulty Level to Begin!");
    return false;
  }
};

let getUserChoice = (name) => {
  let val;
  // get list of radio buttons with specified name
  var radios = document.getElementsByName(name);

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

let result = (qn) => {
  // qn stands for question number
  // will take user response and compare it with correct answer
  let userChoice = getUserChoice("user_answer");
  // save user choice in the user object
  user.userChoice = userChoice;

  let correct_answer = user.correct_answer;
  // if user choice matches correct answer, user scores 1 point
  // else user scores 0 point
  const questionContainer = document.getElementById("question-container");
  let feedback = document.createElement("div");
  let correctAnswer = document.createElement("div");

  questionContainer.appendChild(feedback);
  if (user.userChoice === correct_answer[qn - 1]) {
    user.scorePoint += 1;
    feedback.innerText = userChoice;
    feedback.style.backgroundColor = "#22bb33";
    feedback.style.color = "#ffffff";
    feedback.style.padding = "10px";
  } else {
    user.scorePoint += 0;
    feedback.innerText = userChoice;
    feedback.style.backgroundColor = "#bb2124";
    feedback.style.color = "#ffffff";
    feedback.style.padding = "10px";
    feedback.style.marginBottom = "5px";
    correctAnswer.innerText = correct_answer[qn - 1];
    correctAnswer.style.borderColor = "#22bb33";
    correctAnswer.style.borderWidth = "4px";
    correctAnswer.style.borderStyle = "solid";
    correctAnswer.style.color = "#222222";
    correctAnswer.style.padding = "10px";
    questionContainer.appendChild(correctAnswer);
  }
  const nextQues = document.createElement("input");
  nextQues.id = "nextques";
  nextQues.type = "submit";
  nextQues.value = "Next Question";
  questionContainer.appendChild(nextQues);
  // displays user option with green if correct

  // display user option with red if wrong and also display the right answer
  // display a next question button
};

let nextQuestion = (n) => {};

let prevQuestion = () => {};

window.onload = function () {
  //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
  //HINT: for each question, create a container with the "question"
  //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
  //when EVERY question has an answer (google for how to get a value from a radio button with JS)
  //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  //Display first question with a title + radio button
  //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
  let quizGame = document.querySelector("#quiz-game");
  const section = document.createElement("section");
  const header = document.createElement("h1");
  header.innerText = "Quiz Game";
  const start = startScreen();
  const quesContainer = questionContainer();

  quesContainer.style.display = "none";

  section.appendChild(header);
  section.appendChild(start);
  section.appendChild(quesContainer);

  quizGame.appendChild(section);
};

//HOW TO calculate the result
//You can do it in 2 ways:
//If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
//If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
