document.getElementById('celebrateButton').addEventListener('click', () => {
    launchConfetti();
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = randomColor();
        confettiContainer.appendChild(confetti);
    }
}

function randomColor() {
    const colors = ['#ff5733', '#ffc300', '#28b463', '#3498db', '#8e44ad'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setTimeout(() => {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
}, 5000);

document.getElementById('celebrateButton').addEventListener('click', () => {
    launchConfetti();
});

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = randomColor();
        confettiContainer.appendChild(confetti);
    }
}

function randomColor() {
    const colors = ['#ff5733', '#ffc300', '#28b463', '#3498db', '#8e44ad'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setTimeout(() => {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
}, 5000);

// Countdown code
function updateCountdown() {
    const now = new Date();
    const christmas = new Date('December 25, 2024 00:00:00');
    const timeDifference = christmas - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Start the countdown
updateCountdown();