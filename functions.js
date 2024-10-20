// https://github.com/makeitrealcamp/ejercicios-javascript

// Ejercicios de javaScript en Github

/*1. Contraseña válida ✅
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.*/

// const validarClave = document
//   .getElementById("btn11")
//   .addEventListener("click", validarKeys);

// function validarKeys() {
//   const contraseñaUno = "2Fj(jjbFsuj";
//   const contraseñaDos = "eoZiugBf&g9";

//   // let mensajePromt = prompt("Introduce tu contraseña aquí");

//   if (mensajePromt === "" || mensajePromt === null) {
//     alert("No has introducido ninguna contraseña");
//   } else if (mensajePromt === contraseñaUno || mensajePromt === contraseñaDos) {
//     alert("True");
//   } else {
//     alert("False");
//   }

//   return;
// }

// validarKeys();

/**
 * 2. Calcular impuestos ✅
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.
 */

// const calcular = document
//   .getElementById("btn12")
//   .addEventListener("click", calcularImpuestos);

// function calcularImpuestos() {
//   //  let edad = Number(prompt("Introduce tu edad"));
//   //  let ingresos = Number(prompt("Introduce tus ingresos"));

//   if (edad === "" || ingresos === "" || isNaN(edad) || isNaN(ingresos)) {
//     alert("No has introducido ninguna edad o ingresos");
//   } else if (edad >= 18 && ingresos >= 1000) {
//     alert(ingresos * 0.4);
//   } else {
//     alert(0);
//   }
// }

// calcularImpuestos();

/**
 * 3. IMC (ïndice de masa corporal) ✅
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
 */

// const eventoMasa = document
//   .getElementById("btn13")
//   .addEventListener("click", calcularMasaCorporal);

// function calcularMasaCorporal() {
//   // let peso = Number(prompt("¿Cual es tú peso?"));
//   // let altura = Number(prompt("¿Cual es tu altura?"));
//   let bmi = peso / (altura * 2);

//   if (peso === "" || altura === "") {
//     alert("No has introducido valor válido");
//     return;
//   } else if (bmi < 18.5) {
//     alert("Bajo de peso ❌");
//     return;
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     alert("Normal 💪🏼");
//     return;
//   } else if (bmi >= 25 && bmi < 29.9) {
//     alert("Sobrepeso 🏋🏽‍♀️");
//     return;
//   } else if (bmi >= 30) {
//     alert("Obeso 🏋🏽‍♀️");
//     return;
//   }
// }

// calcularMasaCorporal();

// 4. Imprimir un arreglo ❌
// Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

// function imprimirArreglo() {
//   let arregloNuevo = [1, "Hola", 2, "Mundo"];

//   console.log(arregloNuevo);
// }

// imprimirArreglo();

// 5. Número de Likes
// Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

// Por ejemplo:

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string

// function likes() {
//   let numero = Number(prompt("¿Cual es el número de likes?"));
//   let resultado = Math.floor(numero);

//   if (resultado <= 999) {
//     console.log(`Tienes ${resultado} likes, en tus redes sociales`);
//   } else if (resultado >= 1000) {
//     console.log(`Tienes ${resultado}K likes, en tus redes sociales`);
//   }
// }

// likes();

// 6. FizzBuzz ❌
// Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

// "fizz" si el número es múltiplo de 3.
// "buzz" si el número es múltiplo de 5.
// "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

// 7. Contar rango de números
// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// function contarRango() {
//   let numero1 = Number(prompt("¿Escribe un numero?"));
//   let numero2 = Number(prompt("¿Escribe un numero?"));
//   for (let i = numero1; i < numero2; i++) {
//     console.log(
//       `'Entre el numero ${numero1} y el numero ${numero2} tenemos ${
//         numero2 - numero1 - 1
//       } numeros'`
//     );
//   }
// }

// contarRango();

// 8. Sumar rango de números
// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

/*function sumarRango() {
  let minimo = Number(prompt("¿Escribe un numero?"));
  let maximo = Number(prompt("¿Escribe un numero?"));
  let suma = 0;

  console.log(minimo, maximo);

  if (minimo === true || maximo === true) {
    window: alert("No haz ingresado un numero aun.");
  } else {
    for (let i = minimo; i <= maximo; i++) {
      suma += i;
    }
    console.log(suma);
    return;
  }
}

sumarRango();*/
