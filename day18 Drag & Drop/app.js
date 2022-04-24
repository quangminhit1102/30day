var target = document.querySelector(".target");
var boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
    this.appendChild(target);
  });
  box.addEventListener("drop", function (e) {
    this.appendChild(target);
  });
});

target.addEventListener("dragstart", dragStart);
target.addEventListener("dragend", dragEnd);

function dragStart() {
  this.classList.add("dragging");
}
function dragEnd() {
  this.classList.remove("dragging");
}
