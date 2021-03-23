const target = document.getElementById('target');
const array = ['simple', 'clear', 'smart', 'strong'];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement('span');
  target.appendChild(letter);

  letter.classList.add('letter');
  letter.style.opacity = '0';
  letter.style.animation = 'anim 5s ease forwards';
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex += 1;
      loop();
    } else {
      letterIndex = 0;
      wordIndex += 1;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 80);
};

loop();
