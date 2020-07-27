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

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " sec. left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
setTime();

// SET SCORE COUNTER
function setCounterText() {
  countEl.textContent = count;
}

// TO VERIFY IF IT'S RIGHT ON CLICK
answer1Filler.addEventListener("click", function () {
  if (
    answer1Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    count++;
    setCounterText();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

answer2Filler.addEventListener("click", function () {
  if (
    answer2Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    count++;
    setCounterText();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

answer3Filler.addEventListener("click", function () {
  if (
    answer3Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    count++;
    setCounterText();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

answer4Filler.addEventListener("click", function () {
  if (
    answer4Filler.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    count++;
    setCounterText();
  } else {
    secondsLeft = secondsLeft - 5;
  }
});

// RENDER  Q AND A
function renderQandA() {
  // for (var i = 0; i < questionArray.length; i++) {
  questionFiller.textContent = questionArray[currentQuestion].question;
  answer1Filler.textContent = questionArray[currentQuestion].answers[0];
  answer2Filler.textContent = questionArray[currentQuestion].answers[1];
  answer3Filler.textContent = questionArray[currentQuestion].answers[2];
  answer4Filler.textContent = questionArray[currentQuestion].answers[3];
  // }
}
var setQuiz = renderQandA;
setQuiz();

// TOGGLE CONTINUE BUTTON
function toggleContinue() {
  var x = continueButton;
  if (x.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// put into function

//   var response = questionArray[i].answers[i];
//   if (response == questionArray[i].correctAnswer[i]) {
//     count++;
//     alert("correct")
// } else {
//   alert("wrong")
//
// questionFiller.textContent = questionArray[0].question;
// answer1Filler.textContent = questionArray[0].answers[0];
// answer2Filler.textContent = questionArray[0].answers[1];
// answer3Filler.textContent = questionArray[0].answers[2];
// answer4Filler.textContent = questionArray[0].answers[3];
