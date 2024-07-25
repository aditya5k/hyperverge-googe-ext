document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    let timer;
    let minutes = 25;
    let seconds = 0;

    function updateTimer() {
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    function countdown() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                alert('Pomodoro session completed!');
                startBtn.disabled = false;
                minutes = 25;
                seconds = 0;
                updateTimer();
                return;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateTimer();
    }

    startBtn.addEventListener('click', () => {
        if (!timer) {
            timer = setInterval(countdown, 1000);
            startBtn.disabled = true;
        }
    });

    updateTimer();
});
