//================== LLamado por ID ==============//

const llamado = document.getElementById("btn1");
const crearParrafo = document.getElementById("parrafo-saludo");
const cambioBg = document.getElementById("btn2");
const cambioBgBody = document.getElementById("body");
const cambioBgBt = document.getElementById("btn2");
const cambioColorText = document.getElementById("parrafo-saludo");
const eliminar = document.getElementById("divP");

//================= Eventos =======================//

llamado.document.addEventListener("click", clickBtn);
cambioBg.document.addEventListener("click", clickBtn2);
eliminar.document.addEventListener("click", limpiarHtml);

//================= Variables ====================//

//================= Crear elementos ==============//

function clickBtn() {
  let saludoPrompt = prompt("Hola, ¿Cúal es tú nombre?");
  if (saludoPrompt === "") {
    alert("No has introducido ningún nombre");
  } else {
    //============= Crear parrafo =============//
    crearParrafo.innerText = saludoPrompt;
    //alert(`"Hola ${saludoPrompt}"`);
  }

  setTimeout(() => {
    crearParrafo.innerText = `"Hola ${saludoPrompt}, preciona nuevamente el botón"`;
  }, 3000);
  return;
}

clickBtn();

//================== Funcion para cambiar el background ===========//

function clickBtn2() {
  //================ Metodo para darle clases a los elementos=============//
  cambioBgBody.classList.add("bg-secondary");
  cambioBgBt.classList.add("bg-warning");
  cambioColorText.classList.add("text-white");

  //====== Metodo para eliminar el las clases requeridas con Javascript de Bootstrap =======//
  setTimeout(() => {
    cambioBgBody.classList.remove("bg-secondary");
    cambioBgBt.classList.remove("bg-warning");
    cambioColorText.classList.remove("text-white");
  }, 3000);

  return;
}

clickBtn2();

//========== funcion para limpiar el html ============ //

function limpiarHtml() {
  alert("¿Quieres eliminar todo?");
  eliminar.remove();
}

limpiarHtml();
