// ALGORITMOS CON ARRAYS

// algoritmo para encontrar el mayor num

function findMaxAlgorithm(array) {
    let max = array[0] // recuperamos el primer elemento del array

    // recorremos el array desde el segundo elemento
    for (let i = 1; i < array.length; i++) {
        // ¿es el elemento actual mayor que el máximo?
        if (array[i] > max) {
            // si es así, lo guardamos como nuevo máximo
            max = array[i]
        }
    }

    // devolvemos el máximo número que hemos encontrado
    return max;
}


// En una biblioteca queremos saber qué libro es el que menos páginas tiene 
// y el que más páginas. Por suerte, no hay dos libros 
// con el mismo número de páginas.
// Necesitamos que la función reciba un array de números, 
// sin ordenar, y que devuelva un array de dos posiciones 
// con el índice del libro con menos páginas y 
// el índice del libro con más páginas.

function minAndMaxWord(words) {

    let minIndex = 0
    let maxIndex = 0

    for (let i = 1; i < words.length; i++) {

        if (words[i] < words[minIndex]) {
            minIndex = i;
        }
        if (words[i] > words[maxIndex]) {
            maxIndex = i;
        }
    }
    return [minIndex, maxIndex]
}
