'use strict'

//Elementos que necesito del HTML 


const select = document.querySelector('.js_select');
const apuesta = document.querySelector('.js_apuesta');
const js_text1 = document.querySelector('.js_text1');
const btn = document.querySelector('.js_btn');

//const same = win;
//const different = lost;


//Declarar funciones y eventos

    //crear numero aleatorio
function getRandomNumber() {
  const numAleat = parseInt(Math.random()*6);
  return numAleat;
}

function cambiarElMensaje(){
  //Generar el numero aleatorio
  //const numAleat = parseInt(Math.random()*6);
  const numAleat = getRandomNumber(6);

  if(numAleat === ){
    //Same

  }
  else {
    //Different

  }
}


//Codigo a ejecutar cuando cargo la página

btn.addEventListener("click", () => {
  
});
