var elements = document.querySelectorAll(".show-on-scroll");

function checkElementPos(el) {
  let rect = el.getBoundingClientRect();
  // some browsers support innerHeight, others support documentElement.clientHeight
  let viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return (!
    (rect.bottom < 0 || rect.top < 0) &&
    (rect.top <= viewHeight )
  );
}

window.onscroll = () => {
  elements.forEach((item) => {
    if (checkElementPos(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });
};
elements.forEach((item) => {
  if (checkElementPos(item)) {
    item.classList.add("start");
  } else {
    item.classList.remove("start");
  }
});
