const zoomer = document.querySelector(".zoomer");
const wrapImg = document.querySelectorAll(".zoomer .image");
const result = document.querySelector(".zoomer .result");
const size = 3;
wrapImg.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    result.classList.remove("hide");
    const img = item.querySelector("img");
    img.style = "width: auto; height: auto; max-height: unset";
    let imageWidth = img.offsetWidth;
    let imageHeight = img.offsetHeight;
    let ratioX = item.offsetWidth / imageWidth;
    let ratioY = item.offsetHeight / imageHeight;
    img.style = "";

    let x = (e.offsetX / item.offsetWidth) * 100;
    let y = (e.offsetY / item.offsetHeight) * 100;

    // move result
    let posX = e.pageX - zoomer.offsetLeft;
    let posY = e.pageY - zoomer.offsetTop;

    result.style.cssText = `
        background-image: url(${img.src});
        background-size: ${img.width * size}px ${img.height * size}px;
        background-position : ${x}% ${y}%;
        left: ${posX}px;
        top: ${posY}px;
    `;
  });
  item.addEventListener("mouseleave", (e) => {
    result.classList.add("hide");
  });
});
