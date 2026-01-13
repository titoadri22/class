// MATRICES CON ARRAYS
const matriz =[[1, 2, 3], [4, 5, 6]]
let numero = matriz[1][2] // 6

// ITERACION SOBRE MATRICES
matriz.forEach((fila, filaIndex) => {
  fila.forEach((elemento, columnaIndex) => {
    // console.log de cada elemento...
  })
})

// EJEMPLO PRACTICO TRES EN RAYA
const tablero = [['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'O', 'X']]

// Verifica líneas horizontales, verticales y diagonales...
for (let i = 0; i < 3; i++) {
  if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
    console.log(`El ganador es: ${tablero[i][0]}`);
  }
}
// (Y el resto de comprobaciones que escribiste)
