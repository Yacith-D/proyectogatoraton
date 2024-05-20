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

let jugador = "O"
// esta funcion estallamada desde mi index en un div que contine un onclick con el nombre funcion
// y eso con cada funcion de las 9 que tengo
//operador ternario

// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion1() {
    matriz[0][0].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";

    fila1(matriz)
}


function fila1(matriz) {
    let contaX = 0;
    let contaO = 0;
    for (let index = 0; index < matriz.length; index++) {
        if (matriz[0][index] == "X") {
            contaX++;
        } else {
            matriz[0][index] == "O"
            contaO++;
        } if (contaO == 3 || contaO == 3) {
            return true
        } else {
            return false
        }
    }
}

// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion2() {

    matriz[0][1].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    fila2(matriz)
}

function fila2(matriz) {
    for (let index = 0; index < matriz.length; index++) {
        if (matriz[1][index] == "X") {
            contaX++;
        } else {
            matriz[1][index] == "O"
            contaO++;
        }

    }
}
// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion3() {

    matriz[0][2].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";

    fila3(matriz)

}

function fila3(matriz) {
    for (let index = 0; index < matriz.length; index++) {
        console.log(matriz[2][index]);

    }
}

// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion4() {

    matriz[1][0].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    columna1(matriz)

}



function columna1(matriz) {
    let contaX = 0;
    let contaO = 0;
    for (let index = 0; index < matriz.length; index++) {
        if (matriz[index][0] == "X") {
            contaX++;
        } else {
            matriz[index][0] == "0"
            contaO++;
        }
    } if (contaX == 3 || contaO == 3) {
        return true
    } else {
        return false
    }
}




// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion5() {

    matriz[1][1].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O"

}

function columna2(matriz) {

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[index][1] == "X") {
            contaX++;
        } else {
            matriz[index][1] == "0"
            contaO++;
        }
    } if (contaX == 3 || contaO == 3) {
        return true
    } else {
        return false
    }

}


// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion6(matriz) {
    matriz[1][2].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    columna3(matriz)
}
function columna3(matriz) {


    for (let index = 0; index < matriz.length; index++) {
        if (matriz[index][2] == "X") {
            contaX++;
        } else {
            matriz[index][2] == "0"
            contaO++;
        }
    } if (contaX == 3 || contaO == 3) {
        return true
    } else {
        return false
    }
}

// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion7() {
    matriz[2][0].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O"
    fila7(matriz)
}

function fila7(matriz) {
    for (let index = 0; index < matriz.length; index++) {

    }
}


// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion8() {

    matriz[2][1].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O"
    fila8(matriz)



}


// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion9() {

    matriz[2][2].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O"
    fila9(matriz)
}







// function filas(matriz) {
//     for (let j = 0; j < matriz.length; j++) {
//         for (let i = 0; i < matriz.length; i++) {



//         }
//     }
// }




















