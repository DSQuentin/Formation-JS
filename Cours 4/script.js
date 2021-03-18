function getInputValue() {
  const choice = document.getElementById('choice').value;

  if (isNaN(choice)) {
    alert('Entrez un nombre svp wsh');
  } else {
    const startingMinutes = choice;
    this.choice.value = ('');

    let time = startingMinutes * 60;

    const countDownEl = document.getElementById('countdown');

    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? `0${seconds}` : seconds;

      countDownEl.innerHTML = `${minutes} : ${seconds}`;
      if (time > 0) {
        time -= 1;
      } else {
        countDownEl.innerHTML = 'IT\'S OVER !';
      }
    }

    setInterval(updateCountdown, 1000);
  }
}
