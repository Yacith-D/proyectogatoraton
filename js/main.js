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
    console.log("i"+i);

    for (let j = 0; j < matriz[i].length; j++) {
        console.log("j"+j);
        console.log(matriz[i][j]);
        matriz[i][j].addEventListener("click", contieneTodo) 
                   
    }
}



function contieneTodo(event) {
    console.log(event.currentTarget);
    event.currentTarget.innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    fila1(matriz)
    columna1(matriz)
    ganar("O")
    ganar("X")
}

function ganar(jugador) {
    if (matriz[0][0].innerHTML == jugador  && matriz[0][1].innerHTML == jugador && matriz[0][2].innerHTML == jugador) {
        alert("ganaste")
     }
}

let jugador = "O"
// esta funcion estallamada desde mi index en un div que contine un onclick con el nombre funcion
// y eso con cada funcion de las 9 que tengo
//operador ternario

// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion1() {
    matriz[0][0].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    // fila1(matriz)
    // columna1(matriz)

}

function fila1(matriz) {            

    // for (let index = 0; index < matriz.length; index++) {
    //     if (matriz[0][index] == "X") {x

    //     } else {
    //         matriz[0][index] == "O"
            
    //     } if (contaO == 3 || contaO == 3) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
}

// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion2() {

    matriz[0][1].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    fila2(matriz)
    columna2(matriz)
}


function fila2(matriz) {

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[1][index] == "X") {
           
        } else {
            matriz[1][index] == "O"
            
        }
    } if (contaO == 3 || contaO == 3) {
        return true
    } else {
        return false
    }
}
// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion3() {

    matriz[0][2].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";

    fila3(matriz)
    columna3(matriz)
}

function fila3(matriz) {

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[2][index] == "X") {
       
        } else {
            matriz[2][index] == "O"
  
        } if (contaO == 3 || contaO == 3) {
            return true
        } else {
            return false
        }

    }
}

// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion4() {

    matriz[1][0].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O";
    columna1(matriz)
    fila1(matriz)
}



function columna1(matriz) {
    let contaX = 0;
    let contaO = 0;
    for (let index = 0; index < matriz.length; index++) {
        if (matriz[index][0] == "X") {
          
        } else {
            matriz[index][0] == "0"
     
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
    columna2(matriz)
}

function columna2(matriz) {

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[index][1] == "X") {
       
        } else {
            matriz[index][1] == "0"

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
    matriz[1][2].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O"
    columna3(matriz)
}

function columna3(matriz) {

    for (let index = 0; index < matriz.length; index++) {
        if (matriz[index][2] == "X") {
       
        } else {
            matriz[index][2] == "0"
        
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




}


// esto hace que cuando hago click en el posición correspondiente valide que si jugador es igual a o que si lo es que retorne una 
// y si es x que retorne una o
function funcion9() {

    matriz[2][2].innerHTML = jugador == "O" ? jugador = "X" : jugador = "O"

}







// function filas(matriz) {
//     for (let j = 0; j < matriz.length; j++) {
//         for (let i = 0; i < matriz.length; i++) {



//         }
//     }
// }


















