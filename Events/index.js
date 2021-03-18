const btn = document.querySelector('#btn'); // selectionne le btn qui a l'id btn
const img = document.getElementById('img'); // autre facon de selectionner

btn.addEventListener('click', () => {
    img.classList.toggle('show'); // toggle vérifie si on l'a, et fait l'inverse
})

/** --------------------------------------------------------- */

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (event) => { // event => objet js contenant information de l'event, ici mousemove
    horizontal.innerHTML = event.x; // innerHTML => change la valeur de l'html
    vertical.innerHTML = event.y;
    mouseEvent.style.left = event.x / window.innerWidth * 100 + "%"; // style pour changer le css d'un id

    if (event.x > 1000) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }
})

/** --------------------------------------------------------- */

document.getElementById('input').addEventListener('input', (e) => {
    vertical.innerHTML = e.target.value;
})

/** --------------------------------------------------------- */

const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target.id)
    document.body.classList.remove('darkTheme', "yellowTheme", "salmonTheme");

    switch(e.target.id){
      case "dark":
        document.body.classList.add('darkTheme');
        break;
      case "salmon":
        document.body.classList.add('salmonTheme');
        break;
      case "yellow":
        document.body.classList.add('yellowTheme');
        break;
      default:
        null;
    }
  })
})