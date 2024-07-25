let timer;
let isRunning = false;
let timeLeft = 25 * 60;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startStopTimer() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
      } else {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
        alert('Time is up!');
      }
    }, 1000);
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
  isRunning = !isRunning;
}

document.getElementById('startStopBtn').addEventListener('click', startStopTimer);
updateTimer();
