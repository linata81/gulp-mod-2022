//Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    if(!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');      
    }
  })

  //брейкпоинт навбара
  window.addEventListener('resize', () => {
    if(window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked'); 
    }
  })
}
burgerMenu();

//Вызывать эту функцию, если нужно зафиксировать меню при скроле
function fixedNav() {
  const nav = document.querySelector('nav');
  //указываем в px сколько нужно проскролить чтобы меню стало фиксированным
  const breakpoint = 1;
  if(window.scrollY >= breakpoint) {
    nav.classList.add('fixed-nav')
  } else {
    nav.classList.remove('fixed-nav')
  }
}
window.addEventListener('scroll', fixedNav);