var images = document.querySelectorAll(".image img");
var gallery = document.querySelector(".gallery");
var close = document.querySelector(".gallery .close i");
var prev = document.querySelector(".gallery .prev i");
var next = document.querySelector(".gallery .next i");
var galleryImage = document.querySelector(".gallery__inner img");
var currentIndex = 0;
images.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    currentIndex = index;
    gallery.classList.toggle("show");
    galleryImage.src = images[index].src;
    showArrow();
  });
});
close.addEventListener("click", () => {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    gallery.classList.remove("show");
  }
});
prev.addEventListener("click", (e) => {
  galleryImage.src = images[currentIndex - 1].src;
  currentIndex--;
  showArrow();
});
next.addEventListener("click", (e) => {
  galleryImage.src = images[currentIndex + 1].src;
  currentIndex++;
  showArrow();
});
function showArrow() {
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  if (currentIndex == images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
}
