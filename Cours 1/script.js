const toggleButton = document.getElementById('toggle-button');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', () => {
  sideBar.classList.toggle('active');
});

// REMOVE SIDEBAR IF CLICK ON MAIN CONTENT
const content = document.querySelector('.content');

content.addEventListener('click', () => {
  sideBar.classList.remove('active');
});
