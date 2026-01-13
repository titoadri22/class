// Búsqueda de "JavaScript" en matriz
function findJavaScript(matrix) {
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] === "JavaScript") return [i,j]
    }
  }
  return [-1,-1]
}

// Algoritmo mayor número
function findMaxAlgorithm(array) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }
  return max;
}

// Ejercicio Biblioteca: Min y Max Páginas
function minAndMaxWord(words) {
  let minIndex = 0
  let maxIndex = 0
  for(let i = 1; i < words.length; i++){
    if(words[i] < words[minIndex]) minIndex = i;
    if(words[i] > words[maxIndex]) maxIndex = i;
  }
  return [minIndex, maxIndex]
}
