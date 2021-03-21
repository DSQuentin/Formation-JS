const imgImprovise = document.getElementById('img-improvise');
const popup = document.getElementById('pop-up');
let playOnce = true;

window.addEventListener('scroll', () => {
  const scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

  // IMAGE APPEAR
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = '1';
    imgImprovise.style.transform = 'none';
  }

  // NEWSLETTER POPUP
  function playFunctionOne() {
    if (scrollValue > 0.85 && playOnce) {
      this.setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'none';
      }, 1500);
      playOnce = false;
    }
  }

  playFunctionOne();
});

document.getElementById('close').addEventListener('click', () => {
  popup.style.opacity = '0';
  popup.style.transform = 'translateX(500px)';
});
