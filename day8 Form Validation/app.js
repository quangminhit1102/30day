var username = document.getElementsByName("username")[0];
var email = document.getElementsByName("email")[0];
var pass = document.getElementsByName("pass")[0];
var repass = document.getElementsByName("repass")[0];

var submitBtn = document.querySelector(".btn-submit");

var form = document.querySelector("form");
var inputs = document.querySelectorAll(".form-control input");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}
function checkEmptyError(listInput) {
  let isSuccess = true;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Vui lòng nhập trường này!");
      isSuccess = false;
    } else {
      showSuccess(input);
    }
  });
  return isSuccess;
}
function checkValidEmail(input) {
  let regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  if (regex.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email không hợp lệ!");
    return false;
  }
}
function checkValidPassword(input) {
  let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  input.value = input.value.trim();
  if (regex.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(
      input,
      "Mật khẩu phải có ít nhất 1 ký tự thường,  1 ký tự hoa, 1 ký tự đặc biệt, 1 số"
    );
    return false;
  }
}
function checkPasswordLess(input, length) {
  if (input.value.length < length) {
    showError(input, "Mật khẩu ít nhất " + length + " ký tự!");
    return false;
  } else {
    showSuccess(input);
    checkValidPassword(input);
    return true;
  }
}
function checkSameAs(input, checkInput) {
  if (input.value === checkInput.value) {
    showSuccess(checkInput);
    return true;
  } else {
    showError(checkInput, "Mật khẩu không trùng khớp!");
    return false;
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let check1 = checkEmptyError([username, email, pass, repass]);
  let check2 = checkValidEmail(email);
  let check3 = checkPasswordLess(pass, 8);
  let check4 = checkSameAs(pass, repass);
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      let parent = input.parentElement;
      if (parent.classList.contains("error")) {
        showSuccess(input);
      }
    });
  });
  if (check1 && check2 && check3 && check4) {
    alert("Done");
  } else {
    //Do nothing
  }
});
