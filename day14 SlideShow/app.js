var listImg = document.querySelectorAll(".list-img div");
var imgPreview = document.querySelector(".img-wrap img");
listImg[0].classList.add("active");
let imgActive = document.querySelector(".list-img").querySelector(".active");

var currentIndex = 0;
imgPreview.src = imgActive.childNodes[0].src;

listImg.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    let imgActive = document
      .querySelector(".list-img")
      .querySelector(".active");
    if (e.target !== imgActive.childNodes[0]) {
      item.classList.add("active");
      imgActive.classList.remove("active");
      imgPreview.src = item.childNodes[0].src;
      currentIndex = index;
    }
  });
});

function setImg(setIndex) {
  if (setIndex < 0) {
    setIndex = listImg.length - 1;
  }
  if (setIndex > 8) {
    setIndex = 0;
  }
  var item = listImg[setIndex];
  let imgActive = document.querySelector(".list-img").querySelector(".active");
  item.classList.add("active");
  imgActive.classList.remove("active");
  imgPreview.src = item.childNodes[0].src;
  currentIndex = setIndex;
}
var prev = document.querySelector(".control.prev");
var next = document.querySelector(".control.next");
prev.addEventListener("click", (e) => {
  currentIndex--;
  setImg(currentIndex);
});
next.addEventListener("click", (e) => {
  currentIndex++;
  setImg(currentIndex);
});
setInterval(function () {
  setImg(currentIndex + 1);
}, 5000);


