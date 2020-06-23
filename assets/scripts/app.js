const navUl = document.querySelector('#nav-ul');
const navToggle = document.querySelector('#nav-toggle');
const navBtn = document.querySelector('#nav-btn');

navUl.addEventListener('click', (e) => {
  if (e.target.localName === 'a') {
    navToggle.checked = false;
  }
});

navBtn.addEventListener('click', () => {
  if (navToggle.checked === false) {
    document.querySelector('html').style.overflow = 'hidden';
  } else {
    document.querySelector('html').style.removeProperty('overflow');
  }
});
