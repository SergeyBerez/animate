let but = document.querySelector('button');
let boxLeft = document.querySelector('.box-anim-left');
let boxRight = document.querySelector('.box-anim-right');
let cont = document.querySelector('.container');
let h3 = document.createElement('h3');
h3.innerText =
  'Вы нажали на кнопку останоки анимации нажмите что бы возобновить';

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
  cont.classList.toggle('blur');
  cont.appendChild(h3);
});
