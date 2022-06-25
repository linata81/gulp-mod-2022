import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//hamburger menu
(() => {
  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  if(document.body.style.overflow ==="hidden") {
    document.body.style.overflow ="visible"
  }else {
    document.body.style.overflow ="hidden"
  }
});

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if(!isDropdownButton) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
    document.body.style.overflow="visible" 
  }
}))
})();



