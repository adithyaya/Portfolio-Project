// "use strict";

const menuIcon = document.querySelector("#icon-menu");
const navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}