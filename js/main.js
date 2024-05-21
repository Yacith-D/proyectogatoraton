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


//cree un let llamado matriz
//que contiene mis posiciones o cordenadas de mi cuadro cons los let de arriba
let matriz = [
    [cuadro1, cuadro2, cuadro3],
    [cuadro4, cuadro5, cuadro6],
    [cuadro7, cuadro8, cuadro9],
]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {

        matriz[i][j].addEventListener("click", contieneTodo) 
                   
    }
}

function contieneTodo(event) {
  
    event.currentTarget.innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
   
    ganar("O")
    ganar("X")
}

function ganar(jugador) {
    if (matriz[0][0].innerHTML == jugador  && matriz[0][1].innerHTML == jugador && matriz[0][2].innerHTML == jugador) {
        alert("ganaste")
     }
     if (matriz[1][0].innerHTML == jugador  && matriz[1][1].innerHTML == jugador && matriz[1][2].innerHTML == jugador) {
        alert("ganaste")
     }
     if (matriz[2][0].innerHTML == jugador  && matriz[2][1].innerHTML == jugador && matriz[2][2].innerHTML == jugador) {
        alert("ganaste")
     }
     if (matriz[0][0].innerHTML == jugador  && matriz[1][1].innerHTML == jugador && matriz[2][2].innerHTML == jugador) {
        alert("ganaste")
     }
     if (matriz[0][2].innerHTML == jugador  && matriz[1][1].innerHTML == jugador && matriz[2][0].innerHTML == jugador) {
        alert("ganaste")
     }
     if (matriz[0][0].innerHTML == jugador  && matriz[1][0].innerHTML == jugador && matriz[2][0].innerHTML == jugador) {
        alert("ganaste")
     }
     if (matriz[0][1].innerHTML == jugador  && matriz[1][1].innerHTML == jugador && matriz[2][1].innerHTML == jugador) {
        alert("ganaste")
     }
     if (matriz[0][2].innerHTML == jugador  && matriz[1][2].innerHTML == jugador && matriz[2][2].innerHTML == jugador) {
        alert("ganaste")
     }
}

let jugador = "O"















