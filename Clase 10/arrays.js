// let frase = "Hola Mundo";
// const myArray = [1, 'Pedro', true, false];

// frase = frase + " como estan?"

// console.log(myArray);

// ESTO NO!!!!
// myArray
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);

// let limite = myArray.length;

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
//   if (i <= limite) {
//     myArray.push("Juan");
//   }
// }

let listadoNombres = [];
let nombre;
do {
  nombre = prompt('Ingrese un nombre');

  if (nombre) {
    listadoNombres.push(nombre);
  }
} while (nombre);

listadoNombres[50] = 'UNO'
listadoNombres.splice(0, 0, "UNO")
listadoNombres.splice(5, 25)

for (let i = 0; i < listadoNombres.length; i++) {
  console.log(`En la posicion ${i} esta el elemento: ${listadoNombres[i]}`);
}








/* Ejercicio en clase */

/* 
1- Crear un array llamado meses y que almacene 
el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista 
los doce nombres del arreglo.
*/

/* const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  
  let mesesPantalla = `<ol>`;
  
  for (let index = 0; index < meses.length; index++) {
    mesesPantalla += `<li>${meses[index]}</li>`;
    if (index === meses.length - 1) {
      mesesPantalla += '</ol>'
    }
  }
  
  document.write(mesesPantalla); */


