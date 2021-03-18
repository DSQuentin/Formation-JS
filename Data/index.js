const array = ['Paris', 'Lyon', 'Montreal', 'Bordeaux'];
const array1 = ['Paris', 33, 'Lyon', ['Montreal', 'Bordeaux'], true];

for (let i = 0; i < array.length; i += 1) {
  console.log(typeof array1[i]);
}

array.sort();

const numbers = [21, 45, 1, 22, 44, 7];
console.log(numbers.sort());

/** --------------------------------------------------------- */
const input = document.getElementById('input');
const video = document.getElementById('video');
let link = '';

const changeLink = (linkToChange) => {
  const embed = linkToChange.replace('watch?v=', 'embed/');
  link = embed.split('&')[0];
  console.log(link);
};

input.addEventListener('input', (e) => {
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `<iframe width="560" height="315" src=${link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
});
