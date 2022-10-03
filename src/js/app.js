/* проверка поддержки webp, добавление класса webp или no-webp для HTML */
(() => {
  function isWebp() {
    //проверка поддержки webp
    function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
      }
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //добавление класса _webp или _no-webp для HTML
    testWebP(function(support) {
      let className=support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
    });
  }
  isWebp();
})();

//hamburger menu
(() => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('locked');
  });

  document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active"); 
      document.body.classList.remove("locked");
    }
  }))
  
//если телефон повернут вертикально и экран расширится, чтобы сбросить все блокировки
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active"); 
      document.body.classList.remove("locked");
    }
  })
  
//если нужно зафиксировать меню при скроле
  function fixedNav() {
    // const nav = document.querySelector(".navbar");
    const nav = document.querySelector(".header");
    
    //указать в пикселях, сколько проскролить чтобы меню стало фиксированным
    const breakpoint = 1;
 // if(window.scrollY >= breakpoint) {
    if(window.scrollY >= breakpoint && window.innerWidth < 768) {
      nav.classList.add("fixed-nav")
    } else {
      nav.classList.remove("fixed-nav")
    }
  }
  
  window.addEventListener('scroll', fixedNav)
})();

