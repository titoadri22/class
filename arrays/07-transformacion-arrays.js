// TRANSFORMACION DE ARRAYS

// 1º filter -> filtrar

const numberss = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numberss.filter(function (number) {
    return number % 2 === 0
})

console.log(evenNumbers) // [2, 4, 6]

//------------
const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']

// 2º map -> crea una array nuevo pero con elem transformados

//Por ejemplo, podríamos crear un array 
// con el doble de cada número de un array de números:


const numberss2 = [1, 2, 3]

const doubleNumbers = numberss2.map((number) => {
    return number * 2
})

console.log(doubleNumbers) // [2, 4, 6]

// -------

//O podríamos crear un array con la longitud de cada 
// cadena de texto de un array de cadenas:

const strings2 = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = strings2.map((string) => string.length)

console.log(stringsLength) // [4, 10, 4, 12]


// 3º map + filter -> array con elem transformados y filtrados

// Imagina que queremos crear un array con el doble de los números 
// y sólo quedarnos con los que sean mayores que 5. 
// Podríamos hacerlo así:


const numberss3 = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numberss3
    .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
    .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]

// o al reves primero filtramos y desps tranformamos

const numberss4 = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numberss4
    .filter(number => number % 2 === 0) // [2, 4, 6]
    .map(number => number * 2) // [4, 8, 12]

console.log(doubleEvenNumbers) // [4, 8, 12]

// 4º reduce -> crear un unico valor a partir de un array
// recibe 2 params una funcion que se ejecuta por cada elem 
// y un valor inicial, opcional, que podremos acumular valores

// caso muy tipico sumer todos elementos array

const numberss5 = [1, 2, 3]

const sum = numberss5.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6
