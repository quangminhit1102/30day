const videoPlayer = document.querySelector(".player__video");
const playBtn = document.querySelector(".player__button");
const player = document.querySelector(".player");
const progress = player.querySelector(".player__progress__filled");
const progressBar = progress.parentElement;
const timer = player.querySelector(".player__time");
const skipButtons = player.querySelectorAll("[data-skip]");
const volume = player.querySelector(".player__volume input");
const fullscreen = document.querySelector(".player__fullscreen i");

// Play pause
playBtn.addEventListener("click", function (e) {
  playPauseHandler(e);
});
videoPlayer.addEventListener("click", function (e) {
  playPauseHandler(e);
});
function playPauseHandler(e) {
  const icon = playBtn.firstElementChild;
  if (icon.classList.contains("fa-play")) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    videoPlayer.play();
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    videoPlayer.pause();
  }
}
fullscreen.addEventListener("click", (e) => {
  player.classList.toggle("full-screen");
  if (fullscreen.classList.contains("fa-expand")) {
    fullscreen.className = "fas fa-compress";
  } else {
    fullscreen.className = "fas fa-expand";
  }
});
videoPlayer.addEventListener("dblclick", function (e) {
  player.classList.toggle("full-screen");
  if (fullscreen.classList.contains("fa-expand")) {
    fullscreen.className = "fas fa-compress";
  } else {
    fullscreen.className = "fas fa-expand";
  }
});
// Skip
skipButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    videoPlayer.currentTime += +this.dataset.skip;
  });
});
volume.addEventListener("change", (e) => {
  videoPlayer.volume = volume.value;
});
//TimeUpdate
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  let minuteValue, secondValue;

  minuteValue = minutes < 10 ? "0" + minutes : minutes;
  secondValue = seconds < 10 ? "0" + seconds : seconds;

  let mediaTime = minuteValue + ":" + secondValue;
  return mediaTime;
}
function progressHandler() {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progress.style.width = `${percent}%`;
  timer.innerHTML = `${formatTime(videoPlayer.currentTime)}/${formatTime(
    videoPlayer.duration
  )}`;
}
videoPlayer.addEventListener("timeupdate", (e) => {
  progressHandler();
});
// scrub
function scrub(e) {
	const scrubTime = (e.offsetX / progressBar.offsetWidth) * videoPlayer.duration;
	videoPlayer.currentTime = scrubTime
}
progressBar.addEventListener('click', scrub)

