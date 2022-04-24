var year = document.querySelector(".year");
var days = document.querySelector("#days");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

const now = new Date();
const countToDate = new Date(2023, 22, 1);
console.log(now + "\n" + countToDate);
const countdown = () => {
  const now = new Date().getTime();

  const distance = countToDate - now;
  console.log(distance);
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((distance % (1000 * 60)) / 1000);

  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;

  if (distance < 0) {
    clearInterval(countdownInterval);
  }
};

year.innerHTML = now.getFullYear();
countdown();
const countdownInterval = setInterval(countdown, 1000);
var fireworkContainer = document.querySelector(".firework-container");
const fireworks = new Fireworks(fireworkContainer, {
  speed: 0.5,
  acceleration: 1.05,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 20,
});
fireworks.start();
