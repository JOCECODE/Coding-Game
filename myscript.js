// window.onload = (event) => {
//     console.log('page is fully loaded');
//   };
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft --;
    timeEl.textContent = secondsLeft + " sec. left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
    }

  }, 1000);
}
setTime();

