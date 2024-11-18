const fs = require('fs');
const peliculas = require('./peliculas.js');

function mostrarPeliculas(array){
let element = "";
  for (let i = 0; i < array.length; i++) {
 console.log(element = array[i]);
  }
  return element;
}

mostrarPeliculas(peliculas);


const texto = fs.readFileSync('./mensaje.txt', 'utf8');
    console.log('Mensaje:', texto);
