'use strict'

//Elementos que necesito del HTML 


const select = document.querySelector('.js_select');
const apuesta = document.querySelector('.js_apuesta');
const js_text1 = document.querySelector('.js_text1');
const btn = document.querySelector('.js_btn');


//Declarar funciones y eventos

function getRandomNumber() {
  return Math.ceil(Math.random() * 6);
}




//Codigo a ejecutar cuando cargo la página
btn.addEventListener("click", () => {
  play(Jugar);
});
