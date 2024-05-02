document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  let timerInterval;
  let timerDisplay = document.getElementById("timer");

  function startTimer() {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        count++;
        timerDisplay.textContent = count;
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = undefined;
  }

  function resumeTimer() {
    if (!timerInterval) {
      startTimer();
    }
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = undefined;
    count = 0;
    timerDisplay.textContent = count;
  }

  document.getElementById("start_button")
          .addEventListener("click", startTimer);
  document.getElementById("pause_button")
          .addEventListener("click", pauseTimer);
  document.getElementById("resume_button")
          .addEventListener("click", resumeTimer);
  document.getElementById("stop_button")
          .addEventListener("click", stopTimer);
});
