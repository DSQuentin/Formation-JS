const navBar = document.getElementById('navbar');
const navElements = document.getElementById('nav-elements');

window.addEventListener('scroll', () => {
  const scroll = this.document.documentElement.scrollTop;

  if (scroll >= 200) {
    navBar.style.height = '7vh';
    navElements.style.height = '7vh';
    navBar.style.background = 'rgba(52, 187, 255, 0.884)';
  } else {
    navBar.style.height = '15vh';
    navElements.style.height = '15vh';
    navBar.style.background = 'rgba(52, 187, 255, 1)';
  }
});
