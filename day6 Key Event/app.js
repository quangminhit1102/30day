var result = document.querySelector(".result");
var box = document.querySelector(".box");
var al = document.querySelector(".alert");
// var key = document.querySelector(".key p:last-child");
// var location = document.querySelector(".location p:last-child");
// var which = document.querySelector(".which p:last-child");
// var code = document.querySelector(".code p:last-child");
var cards = document.getElementsByClassName("card");
document.addEventListener("keydown", (e) => {
  if (box.classList.contains("hide")) {
    al.classList.add("hide");
    box.classList.remove("hide");
  }
  result.innerText = e.which;
  cards[0].lastElementChild.innerText = e.key;
  cards[1].lastElementChild.innerText = e.location;
  cards[2].lastElementChild.innerText = e.which;
  cards[3].lastElementChild.innerText = e.code;
});
