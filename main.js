//================== LLamado por ID ==============//

// const llamado = document.getElementById("btn1");
// const cambioBg = document.getElementById("btn2");
// const cambioBgBody = document.getElementById("body");
// const cambioBgBt = document.getElementById("btn2");
// const cambioColorText = document.getElementById("parrafo-saludo");
// const eliminar = document.getElementById("otro-parrafo");
// const crearNuevoElemento = document.getElementById("btn4");
// const enviarEmailForm = document.getElementById("exampleInputEmail1");
// const btnEnviar = document.getElementById("btnForm");
// const btnEdad = document.getElementById("btn6");
// const parrafoEdad = document.getElementById("divP2");
// const btnParImpar = document.getElementById("btn7");

// //================= Eventos =======================//

//
// const eventoCbBg = cambioBg.document.addEventListener("click", clickBtn2);
// const eventoEliminar = eliminar.document.addEventListener("click", limpiarHtml);
// const eventoCrear = crearNuevoElemento.document.addEventListener(
//   "click",
//   crearNuevosElementos
// );
// const eventoEmail = btnEnviar.document.addEventListener("click", enviarEmail);
// const eventoEdad = btnEdad.document.addEventListener("click", pedirEdad);
// const eventoParrafoEdad = parrafoEdad.document.addEventListener("click");
// const eventoParImpar = btnParImpar.document.addEventListener(
//   "click",
//   numerosParImpar
// );
// const eventoNuevoParrafo = document.addEventListener("click", nuevotexto);

// //================= Crear nodos ===============================//

// //================= Funcion para cambiar h1 =================================//
const functionH1 = document.addEventListener("click", () => {
  const mensajeCambioH1 = "Hola a todos, soy un h1";
  const eventofinalH1 = (document.querySelector("#h1").innerText =
    mensajeCambioH1);
  //(cambiarH1.innerText = mensajeCambioH1);
  setTimeout(() => {
    let removeChanges = document.lastModified;
    document.querySelector("#h1").innerText = removeChanges;
    //document.removeEventListener("click", clickBtnH1());
    //remove("mensajeCambioH1");
    //cambiarH1.remove();
  }, 3000);

  return;

  //document.getElementById("h1").reset("[]");
});

clickBtnH1();

// //================= Función para crear elementos ==============//
const functionBtnPulsar = document.addEventListener("click", () => {
  let saludoPrompt = prompt("Hola, ¿Cúal es tú nombre?");
  const crearParrafo = document.querySelector("p");

  if (saludoPrompt === "" || saludoPrompt === null) {
    alert("No has introducido ningún nombre");

    return;
  } else {
    //============= Crear parrafo =============//

    crearParrafo.innerText = saludoPrompt;
  }

  setTimeout(() => {
    crearParrafo.innerText = `"Hola ${saludoPrompt}, preciona nuevamente el botón"`;
  }, 3000);
  return;
});

clickBtn();

// //================== Funcion para cambiar el background ===========//

// function clickBtn2() {
//   //================ Metodo para darle clases a los elementos=============//
//   cambioBgBody.classList.add("bg-secondary");
//   cambioBgBt.classList.add("bg-warning");
//   cambioColorText.classList.add("text-white");

//   //================ Metodo para eliminar las clases requeridas con Javascript de Bootstrap =======//
//   setTimeout(() => {
//     cambioBgBody.classList.remove("bg-secondary");
//     cambioBgBt.classList.remove("bg-warning");
//     cambioColorText.classList.remove("text-white");
//   }, 3000);

//   return;
// }

// clickBtn2();

// //================== función para limpiar el html ============ //

// function limpiarHtml() {
//   alert("¿Quieres eliminar el parrafó?");
//   eliminar.remove();

//   return;
// }

// limpiarHtml();

// //================== función para crear nuevos elementos =================//

// function crearNuevosElementos() {
//   //===================== Primer div =======================//

//   const Fecha = new Date();
//   const para = document.createElement("p");
//   para.classList.add("text-success");
//   const node = document.createTextNode(Fecha);
//   para.appendChild(node);
//   const elemento = document.getElementById("divPNuevo");
//   elemento.appendChild(para);

//   const imagenVerano = URL("image/summer image.webp");
// }

// crearNuevosElementos();

// //==================== Función para email ======================//

// function enviarEmail() {
//   const emailCliente = document.getElementById("exampleInputEmail1").value;
//   if (emailCliente === "") {
//     alert("Por favor ingrese un email");
//   } else {
//     document.getElementById("parrafo-saludo").innerText = emailCliente;
//     alert("Tu email fue enviado correctamente.");

//     setTimeout(() => {
//       document.getElementById("exampleInputEmail1").value = "";
//     }, 100);
//   }
// }

// enviarEmail();

// //===================== Función edad ==================================//

// function pedirEdad() {
//   const nombre = prompt("¿Cúal es tu nombre?");
//   const edad = prompt(`Hola ${nombre}, ¿Cuántos años tienes?`);
//   const mensajeAñosNiño = `"${nombre} tienes ${edad} años. ¡Eres un niño! nececistas autorización de tus padres o acudiente."`;
//   const mensajeAñosAdolecente = `"${nombre} tienes ${edad} años. ¡Eres un adolecente! aun no puedes obtener tu licencia de conducir."`;
//   const mensajeAñosAdulto = `"${nombre} tienes ${edad} años. ¡Eres un adulto! ya puedes obtener tu licencia."`;
//   const nombreStri = toString(nombre);
//   const edadNumero = Number(edad);

//   if (nombre === "" || nombre === null) {
//     alert("Por favor ingrese un nombre");
//     return;
//   } else if (edad === "" || edad != edadNumero || edad === null) {
//     document.getElementById("parrafo2").innerText =
//       "Por favor ingrese un numero";

//     return;
//   } else if (edad < 12) {
//     document.getElementById("parrafo2").innerText = mensajeAñosNiño;
//   } else if ((edad >= 12) & (edad < 18)) {
//     document.getElementById("parrafo2").innerText = mensajeAñosAdolecente;
//   } else if (edad >= 18) {
//     document.getElementById("parrafo2").innerText = mensajeAñosAdulto;
//   }

//   setTimeout(() => {
//     document.getElementById("parrafo2").innerText = "";
//   }, 3000);

//   return;
// }

// pedirEdad();

// //===================== Función para el botón de enviar numero ======================//

// function numerosParImpar() {
//   const numParImpar = document.getElementById("numeroParOImpar").value;
//   console.log(numParImpar);
//   if (numParImpar === "") {
//     alert("Por favor ingrese un numero");
//   } else if (numParImpar % 2 == 0) {
//     document.getElementById(
//       "parrafoParImpar"
//     ).innerText = `"El numero ${numParImpar} es par"`;
//   } else {
//     numParImpar % 1 == 1;
//     document.getElementById(
//       "parrafoParImpar"
//     ).innerText = `El numero ${numParImpar} es impar"`;
//   }

//   setTimeout(() => {
//     document.getElementById("parrafoParImpar").remove();
//   }, 3000);

//   document.addEventListener("load");
// }

// numerosParImpar();

// //===================== Función para cambiar carita ======================//

// const eventoCarita = document.getElementById("imagenes");
// eventoCarita.addEventListener("click", caritaFelizOn);
// eventoCarita.addEventListener("click", caritaTristeOn);

// function caritaFelizOn() {
//   if ((click = true)) {
//     const caritaFeliz = (document.getElementById("imagenes").src =
//       "image/happy.png");
//   }
// }

// cambiarCarita();

// function caritaTristeOn() {
//   if ((click = true)) {
//     const caritaTriste = (document.getElementById("imagenes").src =
//       "image/sad.png");
//   }
// }

// caritaTristeOn();

// /*========================== Calculadora ===================== */

// /*========================== Dom calaculadora ==================*/

// const pantalla = document.getElementById("div-calculadora");

// /*========================== Evnetos calaculadora =============== */

// const eventoInput = pantalla.addEventListener("click", funBtn7);

// /*========================== Funciones =========================== */

// function funBtn7() {
//   let boton7 = document.getElementById("btn-7").value;
//   if (boton7 === 7) {
//     pantalla.innerHTML = boton7;
//     console.log(boton7);
//   }
// }

// funBtn7();

// //============================= Nuevo div o texto ====================//

// function nuevotexto() {
//   const nuevoDiv = document.createElement("div");
//   document.body.appendChild(nuevoDiv);

//   const nuevoParrafo = document.createElement("p");
//   nuevoParrafo.innerText = "Nuevo parrafó";
//   document.body.appendChild(nuevoParrafo);
// }

//===================== Segundo div =======================//

//const crearDIV = document.createElement("div");
//const mostraDiv = (crearDIV.innerText = "Este es un nuevo div");
//document.body.appendChild(mostraDiv);

/**================== Formulario con bootstrap ===================*/

// const submitBtn = document.querySelector(".form");
// submitBtn.addEventListener("submit", (e) => {
//   e.preventDefault();

const inputEmail = document.querySelector("#InputEmail");
inputEmail.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const inputPassword = document.querySelector("#InputPassword");
inputPassword.addEventListener("input", functionPassword);

function functionPassword() {
  inputPassword.type = "text";

  setTimeout(() => {
    inputPassword.type = "password";
  }, 300);
}

const checkForm = document.querySelector(".form-check-label");
checkForm.addEventListener("click", (e) => {
  console.log("Check...");
});

//   const inputPassword = document.querySelector("#exampleInputPassword2").value;

//   if (inputEmail === "" || inputPassword === "") {
//     console.log("Debes ingresar un correo valido");
//   } else {
//     console.log("Enviando datos...");
//   }
// });
