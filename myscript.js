var questionArray = [
  {
    question: "What Year was I born",
    answers: ["1989", "1986", "1998", "1980"],
    correctAnswer: "1986",
  },
  {
    question: "Licking dick",
    answers: ["1989", "2121", "2000", "2000"],
    correctAnswer: "2000",
  },
];

var questionFiller = document.querySelector("#questionBox");
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

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

// put into function

questionFiller.textContent = questionArray[0].question;
