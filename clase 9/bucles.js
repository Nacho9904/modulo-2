/*
Toda la clase

let contador = 17; //inicializacion del contador

while (contador % 15 !== 0) {
  console.log(`El nro ${contador} NO es divisible por 15`);
  contador += 2;
}

// do {
//   console.log(`Hola mundo el contador es: ${contador}`);
//   contador++;
// } while (contador < 1000);

// for (let i = 0; i < 10; i += 2) {
//   console.log(`Hola mundo el contador es: ${i}`);
// } */






/* Ejercicio 9 del tp 2 */




/* // 9.- Escribe un programa que pida una frase
// y escriba las vocales que aparecen

// let frase = prompt('Ingrese una frase');
// let vocales = '';

// let i = 0;
// console.log(frase.length);

// while (i < frase.length) {
//   // console.log(`La letra en posicion ${i} es ${frase.charAt(i)}`);
//   if (
//     frase.charAt(i).toLowerCase() === 'a' ||
//     frase.charAt(i).toLowerCase() === 'e' ||
//     frase.charAt(i).toLowerCase() === 'i' ||
//     frase.charAt(i).toLowerCase() === 'o' ||
//     frase.charAt(i).toLowerCase() === 'u'
//   ) {
//     vocales = vocales + frase.charAt(i).toLowerCase() + '-';
//   }

//   i++;
// }

// if (vocales.length > 0) {
//   console.log('Las vocales son: ', vocales);
// } else {
//   console.log(`Tu frase "${frase}" no tiene vocales`);
// }

// FOR

let frase = prompt('Ingrese una frase');
let vocales = '';

console.log(frase.length);

for (let i = 0; i < frase.length; i++) {
  // console.log(`La letra en posicion ${i} es ${frase.charAt(i)}`);
  if (
    frase.charAt(i).toLowerCase() === 'a' ||
    frase.charAt(i).toLowerCase() === 'e' ||
    frase.charAt(i).toLowerCase() === 'i' ||
    frase.charAt(i).toLowerCase() === 'o' ||
    frase.charAt(i).toLowerCase() === 'u'
  ) {
    vocales = vocales + frase.charAt(i).toLowerCase() + '-';
  }
}

if (vocales.length > 0) {
  console.log('Las vocales son: ', vocales);
} else {
  console.log(`Tu frase "${frase}" no tiene vocales`);
} */