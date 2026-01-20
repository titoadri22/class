// MATRICES CON ARRAYS

// como crear una matriz

const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

// como acceder a un elemento 

let numero = matriz[1][2]

console.log(numero) // -> 6

// ITERACION SOBRE MATRICES

// con for

for (let i = 0; i < matriz.length; i++) { // {1}
    for (let j = 0; j < matriz[i].length; j++) { // {2}
        console.log(matriz[i][j])
    }
}

// con forEach()

matriz.forEach((fila, filaIndex) => {
    fila.forEach((elemento, columnaIndex) => {
        console.log('Fila ' + filaIndex)
        console.log('Columna ' + columnaIndex)
        console.log('Elemento ', elemento)
        console.log('')
    })
})

// EJEMPLO PRACTICO

const tablero = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
]

// Ahora, para buscar si hay un ganador en el tablero,
// podemos utilizar un bucle for para iterar sobre
// cada fila y columna del tablero.

// Verifica las líneas horizontales
for (let i = 0; i < 3; i++) {
    if (
        tablero[i][0] === tablero[i][1] &&
        tablero[i][1] === tablero[i][2]
    ) {
        console.log(`El ganador es: ${tablero[i][0]}`);
    }
}

// Verifica las líneas verticales
for (let i = 0; i < 3; i++) {
    if (
        tablero[0][i] === tablero[1][i] &&
        tablero[1][i] === tablero[2][i]
    ) {
        console.log(`El ganador es: ${tablero[0][i]}`);
    }
}

// Verifica la diagonal de arriba izquierda a derecha abajo
if (
    tablero[0][0] === tablero[1][1] &&
    tablero[1][1] === tablero[2][2]
) {
    console.log(`El ganador es: ${tablero[0][0]}`);
}

// Verifica la diagonal de derecha arriba a izquierda abajo
if (
    tablero[0][2] === tablero[1][1] &&
    tablero[1][1] === tablero[2][0]
) {
    console.log(`El ganador es: ${tablero[0][2]}`);
}

// Recibimos una matriz de cadenas de texto. 
// Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y 
// devolver su posición como un array de dos elementos: 
// el índice de la fila y el índice de la columna.


function findJavaScript(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "JavaScript") {
                return [i, j]
            }
        }
    }
    return [-1, -1]

}

// observaciones: si quieres acceder a la pos de un elemento de la matriz
// gasta return[i, j]
// si quieres la palabra return matrix[i][j]
