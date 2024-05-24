// lets que contiienen mis id de mis div de mii html son los 9 cuadros
let cuadro1 = document.getElementById("cuadrito1");
let cuadro2 = document.getElementById("cuadrito2");
let cuadro3 = document.getElementById("cuadrito3");
let cuadro4 = document.getElementById("cuadrito4");
let cuadro5 = document.getElementById("cuadrito5");
let cuadro6 = document.getElementById("cuadrito6");
let cuadro7 = document.getElementById("cuadrito7");
let cuadro8 = document.getElementById("cuadrito8");
let cuadro9 = document.getElementById("cuadrito9");

//este let contiene una clase de mis 9 divs en una sola clase
let cuadritos = document.getElementsByClassName("cuadro");
// Un let borrar que contiene un boton para reiniciar el juego
let borrar = document.getElementById("reiniciar");
// mi matriz que contiene las cordenadas de mi cuadro para el juego contiene mis posiciones
let matriz = [
   [cuadro1, cuadro2, cuadro3],
   [cuadro4, cuadro5, cuadro6],
   [cuadro7, cuadro8, cuadro9]   
]; 
console.log(matriz);
//este let hace que se pueda saber que posicion sigue despues de la otra
let jugador = "X";
let fin = false;
//este for hace que itere en mis columnas y filas para hacer click a culquier cuadro para hacerle un evento 
for (let i = 0; i < matriz.length; i++) {
   for (let j = 0; j < matriz[i].length; j++) {
      matriz[i][j].addEventListener("click", contieneTodo);
      
   }
}
// esta funcion hace que se le pongan eventos a mis cuadros contiene a maquina para que juege la compu y funcion ganar para que valide las posiciones del gane
function contieneTodo(event) {
   if (!fin && event.currentTarget.innerHTML === "") {
      event.currentTarget.innerHTML = jugador;
      ganar("O");
      ganar("X");
      if (!fin) {
         maquina(cuadritos);
      }
   }
}

// aqui se valida todos las ganes de mi juego en fila columna y diagonal y coloca una alerta al ganar o perder o empate

function ganar(jugador) {

   console.log(matriz)
   if (
      matriz[0][0].innerHTML === jugador &&
      matriz[0][1].innerHTML === jugador &&
      matriz[0][2].innerHTML === jugador
   ) {
      alert("¡Ganaste!");
      fin = true;
   } else if (
      matriz[1][0].innerHTML === jugador &&
      matriz[1][1].innerHTML === jugador &&
      matriz[1][2].innerHTML === jugador
   ) {
      alert("¡Ganaste!");
      fin = true;
   } else if (
      matriz[2][0].innerHTML === jugador &&
      matriz[2][1].innerHTML === jugador &&
      matriz[2][2].innerHTML === jugador
   ) {
      alert("¡Ganaste!");
      fin = true;
   } else if (
      matriz[0][0].innerHTML === jugador &&
      matriz[1][1].innerHTML === jugador &&
      matriz[2][2].innerHTML === jugador
   ) {
      alert("¡Ganaste!");
      fin = true;
   } else if (
      matriz[0][2].innerHTML === jugador &&
      matriz[1][1].innerHTML === jugador &&
      matriz[2][0].innerHTML === jugador  
   ) {
      alert("¡perdiste!");
      fin = true;
   } else if (
      matriz[0][0].innerHTML === jugador &&
      matriz[1][0].innerHTML === jugador &&
      matriz[2][0].innerHTML === jugador
   ) {
      alert("¡perdiste!");
      fin = true;
   } else if (
      matriz[0][1].innerHTML === jugador &&
      matriz[1][1].innerHTML === jugador &&
      matriz[2][1].innerHTML === jugador
   ) {
      alert("¡perdiste!");
      fin = true;
   } else if (
      matriz[0][2].innerHTML === jugador &&
      matriz[1][2].innerHTML === jugador &&
      matriz[2][2].innerHTML === jugador
   ) {
      alert("¡perdiste!");
      fin = true;
   } 
    else if (empate(matriz)) {
      alert("¡Empate!");
      fin = true;
   }
       
}
// esta funcion hace que se realize un empate valida mis posciones en fila y columna y verifica el empate
function empate(matriz) {
   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         if (matriz[i][j].innerHTML === "") {
            return false;
         }
      }
   }
   return true;
}
// funcin maquina que hace que juegue la IA  y valide las posiciones 
function maquina(cuadritos) {
   if (!fin) {
      for (let index = 0; index < 1000; index++) {
         let maquinabrr = Math.floor(Math.random() * 9);
         if (cuadritos[maquinabrr].textContent === "") {
            setTimeout(() => {
               cuadritos[maquinabrr].innerHTML = "O";
               ganar("O");
            }, 300);
            break;
         }
      }
   }
}

// Aqui llamo a mi funcion borrar para que hacerle un evento que cuando le de click se reinicie el juego
borrar.addEventListener("click", reiniciarJuego);
function reiniciarJuego() {
   for (let i = 0; i < cuadritos.length; i++) {
      cuadritos[i].innerHTML = "";
   }
   // fin = false;
}



















