// resultado de la misma.
// Si se ingresa una operación que no está contemplada devolver un mensaje de error.

let num1 = Number(prompt('Ingrese el primer factor'));
let num2 = Number(prompt('Ingrese el segundo factor'));
let operacion = prompt('Ingrese la operacion a realizar (+, -, *, /)');
function calculadora(factor1, factor2, operacion) {
  if (isNaN(factor1)) {
    return alert(`El factor1 ${factor1}, no es un numero`);
  }

if (isNaN(num1)) {
  console.log('El num1 es NaN');
  num1 = 0;
}
  if (isNaN(factor2)) {
    return alert(`El factor2 ${factor2}, no es un numero`);
  }

if (isNaN(num2)) {
  console.log('El num2 es NaN');
  num2 = 0;
}
  switch (operacion) {
    case '+':
    case 'suma':
      alert(`El resultado de ${factor1} + ${factor2} = ${factor1 + factor2}`);
      break;
    case '-':
    case 'resta':
      alert(`El resultado de ${factor1} - ${factor2} = ${factor1 - factor2}`);
      break;
    case '*':
    case 'multiplicacion':
      alert(`El resultado de ${factor1} * ${factor2} = ${factor1 * factor2}`);
      break;
    case '/':
    case 'division':
      alert(`El resultado de ${factor1} / ${factor2} = ${factor1 / factor2}`);
      break;

switch (operacion) {
  case '+':
    console.log(`El resultado de ${num1} + ${num2} = ${num1 + num2}`);
    break;
  case '-':
    console.log(`El resultado de ${num1} - ${num2} = ${num1 - num2}`);
    break;
  case '*':
    console.log(`El resultado de ${num1} * ${num2} = ${num1 * num2}`);
    break;
  case '/':
    console.log(`El resultado de ${num1} / ${num2} = ${num1 / num2}`);
    break;

  default:
    console.error(`La operacion ${operacion} no existe en esta calculadora`);
    break
  }
}

let confirmacion;

do {
  let num1 = Number(prompt('Ingrese el primer factor'));
  let num2 = Number(prompt('Ingrese el segundo factor'));
  let operacion = prompt('Ingrese la operacion a realizar');

  calculadora(num1, num2, operacion);

  confirmacion = confirm('Queres hacer otra operacion?');
} while (confirmacion);
}