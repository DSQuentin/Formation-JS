const mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
});

// CURSOR GROWING
const navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });

  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
});
