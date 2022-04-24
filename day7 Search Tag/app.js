var ul = document.querySelector(".content");
var input = document.querySelector("#input-tag");
var tags = ["QUANG", "MINH"];
function createTag() {
  ul.innerHTML = "";
  tags.forEach((tag, index) => {
    ul.innerHTML += `<li>${tag}<i class="uit uit-multiply" onclick="removeTag(${index})"></i></li>`;
  });
  ul.appendChild(input);
  input.focus();
}
createTag();
function addTag(e) {
  if (e.key === "Enter" && input.value != "") {
    tags.push(input.value);
    createTag();
    input.value = "";
  }
}
document.addEventListener("keyup", (e) => {
  addTag(e);
});
function removeTag(index) {
  tags.forEach((item, i) => {
    if (index == i) {
      tags.splice(index, 1);
      createTag();
    }
  });
}
var removeAll = document.querySelector(".btn-removeAll");
removeAll.addEventListener("click", (e) => {
  tags = [];
  createTag();
});
