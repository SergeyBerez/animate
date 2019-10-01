let arrImg = [
  '/img/iconfinder_096-grinning-cat-face_3099456.png',
  '/img/iconfinder_100-cat-face-with-wry-smile_3099452.png',
  '/img/iconfinder_103-crying-cat-face_3099449.png',
  '/img/iconfinder_cat_285654.png',
];

let but = document.querySelector('button');
let boxLeft = document.querySelector('.box-anim-left');
let boxRight = document.querySelector('.box-anim-right');
let i = 0;

but.addEventListener('click', function(e) {
  if (but.innerText == 'stop') {
    but.innerText = 'start';
    but.style.borderColor = '';
    but.style.top = '';
    but.style.boxShadow = '3px 6px 5px 2px black';
  } else {
    but.innerText = 'stop';
    but.style.borderColor = 'red';
    but.style.top = '5px';
    but.style.boxShadow = '3px 3px 3px 0px black';
  }
  boxLeft.classList.toggle('paused');
  boxRight.classList.toggle('paused');
});

setInterval(changeBackground, 1000);

function changeBackground() {
  boxLeft.style.backgroundImage = `url(${arrImg[i]})`;
  boxRight.style.backgroundImage = `url(${arrImg[i]})`;

  i++;

  if (arrImg[i] == undefined) {
    i = 0;
  }
}
