//Estos let contienen los id de los div de mi html
let cuadro1 = document.getElementById("cuadrito1")
let cuadro2 = document.getElementById("cuadrito2")
let cuadro3 = document.getElementById("cuadrito3")
let cuadro4 = document.getElementById("cuadrito4")
let cuadro5 = document.getElementById("cuadrito5")
let cuadro6 = document.getElementById("cuadrito6")
let cuadro7 = document.getElementById("cuadrito7")
let cuadro8 = document.getElementById("cuadrito8")
let cuadro9 = document.getElementById("cuadrito9")

// este es un let que tiene en unas sola clase a mis 9 div de mi html
let cuadritos = document.getElementsByClassName("cuadro")

//Con este let estoy llamando a mi buton de mi html para que reinicie mi juego
let borrar = document.getElementById("reiniciar")

//Aqui llamo a mi let funcion que realize arriba y le hago un evento
//Cuando hago click hace que reinicie mi partida
borrar.addEventListener("click", function () {
   for (let i = 0; i < cuadritos.length; i++) {
      cuadritos[i].innerHTML = "";
   }
})

//cree un let llamado matriz
//que contiene mis posiciones o cordenadas de mi cuadro con los let de arriba
let matriz = [
   [cuadro1, cuadro2, cuadro3],
   [cuadro4, cuadro5, cuadro6],
   [cuadro7, cuadro8, cuadro9],
]



let jugador = "O"

// un for que itera mis filas y columnas como un array y da posiciones a mis cuadros
for (let i = 0; i < matriz.length; i++) {
   for (let j = 0; j < matriz[i].length; j++) {
       //aqui un evento click que hace que cuando toque mis cuadros se realize un evento
      matriz[i][j].addEventListener("click", contieneTodo)
        
   }
}
//esta funcion que contiene todos mis 9 cuadros en una funcion
//aqui se realiza que coloque x y si ya esta la x que coloque una o
function contieneTodo(event) {
   event.currentTarget.innerHTML = jugador == "O" ? jugador = "X" : jugador = "X";
   ganar("O")
   ganar("X")
// un if que contiene  mi funciojn enmpate con un settimeout para que no mueste la alerta antes del click
   if (empate()) {
      setTimeout(() => {
         alert("empate")
      }, 200);
   }
  //esta es el nombre de mi funcion que hace que funcione la maquina
   maquina(cuadritos)
}

// Esta funcion ganar contiene todas mis validaciones para realizar loa ganes en columna y diagonal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            fila y diagonal
function ganar(jugador) {
   //esta es mi funcion empate, valida mi empate
   if (empate() == false) {

   }
   if (matriz[0][0].innerHTML == jugador && matriz[0][1].innerHTML == jugador && matriz[0][2].innerHTML == jugador) {
      alert("ganaste")

   }
   if (matriz[1][0].innerHTML == jugador && matriz[1][1].innerHTML == jugador && matriz[1][2].innerHTML == jugador) {
      alert("ganaste")
   }
   if (matriz[2][0].innerHTML == jugador && matriz[2][1].innerHTML == jugador && matriz[2][2].innerHTML == jugador) {
      alert("ganaste")
   }
   if (matriz[0][0].innerHTML == jugador && matriz[1][1].innerHTML == jugador && matriz[2][2].innerHTML == jugador) {
      alert("ganaste")
   }
   if (matriz[0][2].innerHTML == jugador && matriz[1][1].innerHTML == jugador && matriz[2][0].innerHTML == jugador) {
      alert("ganaste")
   }
   if (matriz[0][0].innerHTML == jugador && matriz[1][0].innerHTML == jugador && matriz[2][0].innerHTML == jugador) {
      alert("ganaste")
   }
   if (matriz[0][1].innerHTML == jugador && matriz[1][1].innerHTML == jugador && matriz[2][1].innerHTML == jugador) {
      alert("ganaste")
   }
   if (matriz[0][2].innerHTML == jugador && matriz[1][2].innerHTML == jugador && matriz[2][2].innerHTML == jugador) {
      alert("ganaste")
   }

}
// esta es la funcion que hace que ralize en empate
function empate() {
   for (let cuadro of cuadritos) {
      if (cuadro.textContent == "") {
         return false
      }
   }
   return true
}
//Aqui una funcion que hace que la maquina juegue y envio a cuadritos como parametros 
//un if que hace que si cuadritos es diferente o igual a nada
//unfor que me itere de o a 1000, creo una varible nueva que hace que la maquina haga click en las posiciones vacias%
//
function maquina(cuadritos) {
   if (cuadritos !== "") {
      for (let index = 0; index < 1000; index++) {
         let maquinabrr = Math.floor(Math.random() * 9)
         if (cuadritos[maquinabrr].textContent === "") {
         //    setTimeout(() => {
         //       cuadritos[maquinabrr].innerHTML = "O"
         //    }, 300);
         //    break
         }
      }
   }
}











