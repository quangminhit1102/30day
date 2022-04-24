var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnEror = document.querySelector(".control .error");
btnSuccess.addEventListener("click", (e) => {
  new Audio("smallbox.mp3").play();
  createToast("success");
});
btnWarning.addEventListener("click", (e) => {
  new Audio("error.mp3").play();
  createToast("warning");
});
btnEror.addEventListener("click", (e) => {
  new Audio("error.mp3").play();
  createToast("error");
});
function createToast(status) {
  let innerToast = "";
  switch (status) {
    case "success":
      innerToast = `<i class="fas fa-check-circle"></i>
        <div class="message">This is success message!</div>
        <span class="countdown"> </span>`;
      break;
    case "warning":
      innerToast = ` <i class="fas fa-exclamation-circle"></i>
        <div class="message">This is warning message!</div>
        <span class="countdown"> </span>`;
      break;
    case "error":
      innerToast = ` <i class="fas fa-exclamation-triangle"></i>
        <div class="message">This is error message!</div>
        <span class="countdown"> </span>`;
      break;
  }
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = innerToast;
  const listToast = document.querySelector("#toasts");
  listToast.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "slide_hide 2s ease";
  }, 4000);
  setTimeout(() => {
    toast.remove();
  }, 6000);
  toast.addEventListener("click", (e) => {
    toast.style.opacity = 0;
    toast.remove();
  });
}
