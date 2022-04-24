const face = document.querySelector(".counter.facebook h2");
const youtube = document.querySelector(".counter.youtube h2");
const tiktok = document.querySelector(".counter.tiktok h2");

function counterUp(el, to) {
  let speed = 100;
  let count = 0;
  let step = to / 200;

  const counter = setInterval(() => {
    count += step;
    if (count > to) {
      clearInterval(counter);
      el.innerText = to;
    } else {
      el.innerText = Math.round(count);
    }
  }, 1);
}
counterUp(face, 3300);
counterUp(youtube, 1000);
counterUp(tiktok, 9900);
