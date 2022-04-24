var input = document.querySelector("#input-img");
input.addEventListener("change", (e) => {
  let file = e.target.files[0];
  let type = file.type.split("/").pop().toLowerCase();
  if (type != "jpeg" && type != "jpg" && type != "png" && type != "gif") {
    alert("Vui lòng chọn đúng định dạng File!");
  } else {
    var oldImg = document.querySelectorAll(".preview img");
    oldImg.forEach((item) => {
      item.remove();
    });
    var img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    document.querySelector(".preview").appendChild(img);
  }
});
