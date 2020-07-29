// ARRAY WITH QUESTIONS, ANSWERS, AND CORRECT ANSWERS
var questionArray = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hypertext Markup Linguistic",
      "Hypertext Mark Language",
      "Hypertext Markup Language",
      "Hypertext Marker Linguistic",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "Which is correct HTML for referring to an external style sheet?",
    answers: [
      '<link rel="stylesheet" type="style/text" href="newStyleSheet">',
      '<a href="www.stylizemyhtml/mystylesheet.org></a>"',
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      "stylesheet.css",
    ],
    correctAnswer: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
  },
  {
    question:
      'Which is correct JS syntax to change the content? <h1 id="test">CHANGE ME!</h1>',
    answers: [
      'document.getElementById("test").innerHTML = "Different;',
      " <h2>Different</h2> ",
      '#test.innerHTML = "Different"',
      'document.getElementById("#test").innerContent = "Different"',
    ],
    correctAnswer: 'document.getElementById("test").innerHTML = "Different;',
  },
  {
    question:
      'Regarding bootstrap. What can be immediate children of <div class="row"></div>',
    answers: [
      '<div class="container"></div>',
      '<div class="col"></div>',
      '<div class="flex-row"></div>',
      '<div class="row-content"></div>',
    ],
    correctAnswer: '<div class="col"></div>',
  },
  {
    question: "What 2 types of windows does python use?",
    answers: [
      "Python window and Gummy window ",
      "Code window and Shell window",
      "HTML window and CSS window",
      "Jquery window and any coding window",
    ],
    correctAnswer: "Code window and Shell window",
  },
  {
    question: "What is the internet?",
    answers: [
      "a connection between two computers",
      "Social Media",
      "endless codes to copy and paste",
      "computer language",
    ],
    correctAnswer: "a connection between two computers",
  },
  {
    question:
      "What is an 8-bit character encoding (code page) used on IBM mainframe operating systems?",
    answers: ["UNICODE", "HTML", "UNIX", "EBCDIC"],
    correctAnswer: "EBCDIC",
  },
  {
    question:
      "Regarding ASCII which number prints the asterisk character sign (*)?",
    answers: ["69", "27", "7", "42"],
    correctAnswer: "42",
  },
  {
    question: "On CSS, setting font-weight to 700 is similar to...?",
    answers: ["bold", "underline", "italic", "font-size 12"],
    correctAnswer: "bold",
  },
  {
    question: "Java is short for?",
    answers: ["JavaScript", "Javascript", "javaScript", "neither"],
    correctAnswer: "neither",
  },
];

// GLOBAL VARIABLES
var headerEl = document.querySelector("#header");
var mainEl = document.querySelector("#mainContainer");
var continueButton = document.querySelector("#continueBtn");
var questionFiller = document.querySelector("#questionBox");
var answer1Filler = document.querySelector("#answer1");
var answer2Filler = document.querySelector("#answer2");
var answer3Filler = document.querySelector("#answer3");
var answer4Filler = document.querySelector("#answer4");
var timeEl = document.querySelector(".time");
var countEl = document.querySelector("#currentScore");
var nameScoreForm = document.querySelector("#nameScoreForm");
var nameInput = document.querySelector("#name-input");
var scoreList = document.querySelector("#postedScores");
var gameO = document.querySelector("#mainGameOver");
var endS = document.querySelector(".endScoreBaby");
var endB = document.querySelector(".btnEnd2");
var scoEndEL = document.querySelector("#endScoreDisplay");
var count = 0;
var secondsLeft = 60;
var currentQuestion = 0;
continueButton.hidden = true;
gameO.hidden = true;
var postedScores = [];

//SET TIMER COUNTDOWN
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " sec. left";

    if (secondsLeft < 1) {
      clearInterval(timerInterval);
      gameOver();
      return;
    }
  }, 1000);
}
setTime();

// SET SCORE COUNTER
function setCounterText() {
  countEl.textContent = count;
}

// TO VERIFY ANSWER 1 IF IT'S RIGHT ON CLICK
answer1Filler.addEventListener("click", function (e) {
  e.preventDefault();

  // IF ANSWER IS CORRECT
  if (
    answer1Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer1Filler.style.background = "green";
    answer1Filler.style.pointerEvents = "none";
    answer2Filler.style.pointerEvents = "none";
    answer3Filler.style.pointerEvents = "none";
    answer4Filler.style.pointerEvents = "none";
    continueButton.hidden = false;
    count++;
    setCounterText();

    // FOR WRONG ANSWER
  } else {
    secondsLeft = secondsLeft - 5;
    answer1Filler.style.background = "red";
  }
});

// TO VERIFY ANSWER 2 IF IT'S RIGHT ON CLICK
answer2Filler.addEventListener("click", function (e) {
  e.preventDefault();

  // IF ANSWER 2 IS CORRECT
  if (
    answer2Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer2Filler.style.background = "green";
    answer1Filler.style.pointerEvents = "none";
    answer2Filler.style.pointerEvents = "none";
    answer3Filler.style.pointerEvents = "none";
    answer4Filler.style.pointerEvents = "none";
    continueButton.hidden = false;
    count++;
    setCounterText();

    // FOR ANSWER WRONG
  } else {
    answer2Filler.style.background = "red";
    secondsLeft = secondsLeft - 5;
  }
});

// TO VERIFY ANSWER 3 IF IT'S RIGHT ON CLICK
answer3Filler.addEventListener("click", function (e) {
  e.preventDefault();

  // IF ANSWER 3 IS CORRECT
  if (
    answer3Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer3Filler.style.background = "green";
    answer1Filler.style.pointerEvents = "none";
    answer2Filler.style.pointerEvents = "none";
    answer3Filler.style.pointerEvents = "none";
    answer4Filler.style.pointerEvents = "none";
    continueButton.hidden = false;
    count++;
    setCounterText();
    // FOR ANSWER IS WRONG
  } else {
    answer3Filler.style.background = "red";
    secondsLeft = secondsLeft - 5;
  }
});

// TO VERIFY ANSWER 4 IF IT'S CORRECT ON CLICK
answer4Filler.addEventListener("click", function (e) {
  e.preventDefault();

  // IF ANSWER 4 IF CORRECT
  if (
    answer4Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer4Filler.style.background = "green";
    answer1Filler.style.pointerEvents = "none";
    answer2Filler.style.pointerEvents = "none";
    answer3Filler.style.pointerEvents = "none";
    answer4Filler.style.pointerEvents = "none";
    continueButton.hidden = false;
    count++;

    setCounterText();
  }

  // FOR WRONG ANSWER
  else {
    answer4Filler.style.background = "red";
    secondsLeft = secondsLeft - 5;
  }
});

// RENDER  QUESTIONS AND ANSWERS FUNCTION
function renderQandA() {
  if (currentQuestion >= questionArray.length) {
    gameOver();
    return;
  }
  questionFiller.textContent = questionArray[currentQuestion].question;
  answer1Filler.textContent = questionArray[currentQuestion].answers[0];
  answer2Filler.textContent = questionArray[currentQuestion].answers[1];
  answer3Filler.textContent = questionArray[currentQuestion].answers[2];
  answer4Filler.textContent = questionArray[currentQuestion].answers[3];
}
var setQuiz = renderQandA;
setQuiz();

// CONTINUE BUTTON HIDE AND SHOW FUNCTION
continueButton.addEventListener("click", function (e) {
  e.preventDefault();
  continueButton.hidden = true;
  answer1Filler.style.pointerEvents = "auto";
  answer2Filler.style.pointerEvents = "auto";
  answer3Filler.style.pointerEvents = "auto";
  answer4Filler.style.pointerEvents = "auto";
  answer1Filler.style.background = "dodgerblue";
  answer2Filler.style.background = "dodgerblue";
  answer3Filler.style.background = "dodgerblue";
  answer4Filler.style.background = "dodgerblue";
  currentQuestion = currentQuestion + 1;
  renderQandA();
});

// GAMEOVER SEQUENCE
function gameOver() {
  scoEndEL.textContent = count;
  mainEl.hidden = true;
  headerEl.hidden = true;
  gameO.hidden = false;
}

// CALLING INIT FUNCTION
init();

// POSTED SCORES
function renderScores() {
  scoreList.innerHTML = "";
  for (var i = 0; i < postedScores.length; i++) {
    var posted = postedScores[i].name;
    var userScore = postedScores[i].score;
    var li = document.createElement("li");
    li.textContent = posted + ":       SCORE: " + userScore;
    scoreList.prepend(li);
  }
}

// INIT FUNCTION LOCAL STORAGE
function init() {
  var storedScores = JSON.parse(localStorage.getItem("nameScore"));
  if (storedScores !== null) {
    postedScores = storedScores;
  }

  renderScores();
}

// STORESCORES OR NAME
function storeScores() {
  localStorage.setItem("nameScore", JSON.stringify(postedScores));
}

// SUBMIT FORM
nameScoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var scoreText = nameInput.value.trim();
  if (scoreText === "") {
    return;
  }
  var userPairScore = {
    name: scoreText,
    score: count,
  };
  postedScores.push(userPairScore);
  nameInput.value = "";
  storeScores();
  renderScores();
});

// CLEAR SCORES FUNCTION
endB.addEventListener("click", function clearAllScores(event) {
  event.preventDefault();
  localStorage.clear();
  scoreList.innerHTML = "";
  postedScores = [];
});
