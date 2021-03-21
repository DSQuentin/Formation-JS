const nameFunction = () => {
  const sayHello = document.getElementById('sayHello');
  const nameStorage = localStorage.getItem('nom');

  if (nameStorage == null) {
    sayHello.innerHTML = "Bonjour à toi l'inconnu, merci de renseigner ton pseudo";
  } else {
    sayHello.innerHTML = `Bonjour ${nameStorage}`;
  }
};

const visit = () => {
  const visitDisplay = document.getElementById('visitDisplay');
  let visitCount = localStorage.getItem('visites');

  visitCount++;
  localStorage.setItem('visites', visitCount);
  visitDisplay.innerHTML = `Nombre de visites : ${visitCount}`;
};

function setData() {
  const pseudo = document.getElementById('pseudo').value;
  localStorage.setItem('nom', pseudo);
}
nameFunction();
visit();
