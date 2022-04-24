var filterMenu = document.querySelectorAll(".food-menu button");
var foodItems = document.querySelectorAll(".food-item");
function removeBtnActive() {
  filterMenu.forEach((item) => {
    item.classList.remove("active");
  });
}
function showAll() {
  foodItems.forEach((item) => {
    item.classList.remove("hide");
  });
}
filterMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    removeBtnActive();
    item.classList.add("active");
    foodItems.forEach((food) => {
      if (
        item.getAttribute("type-food") == "all" ||
        food.getAttribute("type-food") == item.getAttribute("type-food")
      ) {
        food.classList.remove("hide");
      } else {
        food.classList.add("hide");
      }
    });
  });
});
document.querySelector("button[type-food=all]").click();
