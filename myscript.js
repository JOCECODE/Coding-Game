var questionsArray = {
  "Do you lick ass?": ["Sinbad", "Ricky", "Lucy", "Tits"],
  "Is my ass hairy?": [
    "Fuck yeah",
    "Mcnuggets",
    "I like hippos",
    "let me hold you",
  ],
};
var correctAnswersArray = ["Sinbad", "Mcnuggets"];

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
