var finalName = document.querySelector('.finalUrl');

// login OR Not 


if (localStorage.getItem('isLogin') == false) {
    location.href = '../index.html'
}

if (finalName != null) {
  finalName.innerHTML = `Hello ${localStorage.getItem('UserName')}`
}


let logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  localStorage.setItem("isLogin", "false");
  localStorage.setItem("UserName", "");
  location.href = "../index.html";
});