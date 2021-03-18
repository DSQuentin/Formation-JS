function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

function changeBG() {
  const col1 = getRandomRGB();
  const col2 = getRandomRGB();
  const col3 = getRandomRGB();

  const colorString = `rgb(${col1}, ${col2}, ${col3})`;
  document.body.style.background = colorString;
  document.getElementById('color').innerHTML = colorString;
}

setInterval(changeBG, 2000);
