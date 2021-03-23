const main = document.querySelector('.main');

// PREVENT BAD BEHAVIOR ON THE MOVING ELEMENT
const preventBehavior = (e) => {
  document.onselectstart = () => false;
  e.target.ondragstar = () => false;
  return false;
};

document.addEventListener('mousedown', (e) => {
  // SET MOUSEMOVE X
  if (e.target.className === 'drag-x' && (window.event != null)) {
    e == null ? e = window.event : '';
    document.onmousemove = (event) => {
      const xAxes = (event.clientX) / (main.clientWidth / 100);
      document.querySelector('.box-1').style.flex = `0 0 ${xAxes}%`;
    };
    preventBehavior(e);
    // SET MOUSEMOUVE Y
  } else if (e.target.className === 'drag-y' && (window.event != null)) {
    e == null ? e = window.event : '';
    document.onmousemove = (event) => {
      const yAxes = (event.clientY) / (main.clientHeight / 100);
      document.querySelector('.top').style.flex = `0 0 ${yAxes}%`;
    };
    preventBehavior(e);
  }
});

// STOP EVERYTHING ON MOUSEUP
document.addEventListener('mouseup', (e) => {
  if (e.target != null) {
    document.onmousemove = null;
    document.onselectstart = null;
    e.target.ondragstar = null;
  }
});
