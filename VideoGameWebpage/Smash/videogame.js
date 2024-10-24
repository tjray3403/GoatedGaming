const range = document.querySelector('.info');
const flame = document.querySelector('.info');
const glow = document.querySelector('.info');

info.addEventListener('input', (event) => {
  info.style.setProperty(
    'transform',
    `scale(${event.target.value})
    translate(-13px, -15px)`,
  );
  
  info.style.setProperty(
    'opacity',
    event.target.value * 0.1,
  );
});
