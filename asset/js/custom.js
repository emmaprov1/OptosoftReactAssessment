const button = document.querySelector('.btn-mob');
const menuFlip = document.querySelector('.emp-side-bar');
const bodyOverlay = document.querySelector('.body-overlay')
const showMenuLabel = document.querySelector('.emp-side-bar')

const fadeContentScroll = document.querySelector('.emp-center-gride')

const menuTitles = document.getElementsByClassName('menu-title')

const showMenuLabeltext = document.querySelector('.menuele-callout-action')

const buttonShow = document.querySelector('.emp-side-menu');
const menuItemShow = document.getElementsByClassName('menuele');

const togglebtn = () => {
  menuFlip.classList.toggle('d-none');
  // console.log(fadeContentScroll)
  fadeContentScroll.classList.toggle('emp-center-gride-fade')

  menuFlip.classList.toggle('emp-slide-menu ul');
  bodyOverlay.parentNode.classList.toggle('overlay')
}
button.addEventListener('click', e => {
  togglebtn();
})

const togglemenulabel = () => {
  for (let i = 0; i < menuItemShow.length; i++) {
    menuItemShow[i].classList.toggle('menu-hide')
    menuItemShow[i].classList.toggle('menu-show');
  }
}

buttonShow.addEventListener('click', e => {
  togglemenulabel();
})

jQuery('.dropdown-toggle').on('click', function (e) {
  $(this).next().toggle();
});
jQuery('.dropdown-menu.keep-open').on('click', function (e) {
  e.stopPropagation();
});

if (1) {
  $('body').attr('tabindex', '0');
} else {
  alertify.confirm().set({
    reverseButtons: true
  });
  alertify.prompt().set({
    reverseButtons: true
  });
}
