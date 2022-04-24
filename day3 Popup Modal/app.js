var openBtn = document.querySelector("#open-modal-btn");
var modal = document.querySelectorAll(".modal")[0];
var timeClose = document.querySelector(".modal__header i");
var closeBtn = document.querySelector("#modal-close-btn");
openBtn.onclick = () => {
  modal.classList.toggle("hide");
};
timeClose.onclick = () => {
  modal.classList.add("hide");
};
closeBtn.onclick = () => {
  modal.classList.add("hide");
};
modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    modal.classList.add("hide");
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    //do something
    if (!modal.classList.contains("hide")) {
      modal.classList.add("hide");
    }
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    //do something
    if (!modal.classList.contains("hide")) {
      alert("Hello Bitch :)))");
    }
  }
});
