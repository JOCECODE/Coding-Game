// ARRAY WITH QUESTIONS, ANSWERS, AND CORRECT ANSWERS
var questionArray = [
  {
    question: "What Year was I born",
    answers: ["1995", "1999", "1998", "1980"],
    correctAnswer: "1995",
  },
  {
    question: "Licking dick",
    answers: ["now", "nah", "always", "fuck me"],
    correctAnswer: "always",
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
var count = 0;
var secondsLeft = 60;
var currentQuestion = 0;
continueButton.hidden = true;

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
  if (
    answer1Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer1Filler.style.background = "green";
    continueButton.hidden = false;
    count++;
    setCounterText();
  } else {
    secondsLeft = secondsLeft - 5;
    answer1Filler.style.background = "red";
  }
});

// TO VERIFY ANSWER 2 IF IT'S RIGHT ON CLICK
answer2Filler.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    answer2Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer2Filler.style.background = "green";
    continueButton.hidden = false;
    count++;
    setCounterText();
  } else {
    answer2Filler.style.background = "red";
    secondsLeft = secondsLeft - 5;
  }
});

// TO VERIFY ANSWER 3 IF IT'S RIGHT ON CLICK
answer3Filler.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    answer3Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer3Filler.style.background = "green";
    continueButton.hidden = false;
    count++;
    setCounterText();
  } else {
    answer3Filler.style.background = "red";
    secondsLeft = secondsLeft - 5;
  }
});

// TO VERIFY ANSWER 4 IF IT'S RIGHT ON CLICK
answer4Filler.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    answer4Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    answer4Filler.style.background = "green";
    continueButton.hidden = false;
    count++;

    setCounterText();
  } else {
    answer4Filler.style.background = "red";
    secondsLeft = secondsLeft - 5;
  }
});

// RENDER  QUESTIONS AND ANSWERS
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
  answer1Filler.style.background = "dodgerblue";
  answer2Filler.style.background = "dodgerblue";
  answer3Filler.style.background = "dodgerblue";
  answer4Filler.style.background = "dodgerblue";
  currentQuestion = currentQuestion + 1;
  renderQandA();
});

// GAMEOVER SEQUENCE
function gameOver() {
  mainEl.hidden = true;
  headerEl.hidden = true;
}
