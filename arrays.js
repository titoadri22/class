//explicacion arrays JavaScript

const numeros = [1, 2, 3]

numeros[0] //numero 1 
numeros[1] //numero 2 
numeros[2] //numero 3

const texto = ['hola', 'Js']

texto[0] // hola
texto[1] // Js


// si creas una const position
const position = 0
//puedes elegir la posicion del array con esta const

texto[position] // hola


//para cambiar datos de la array
numeros[1] = 12 // se cambiara el 2(posicion 1) por el 12



//----- METODOS ARRAYS -----

const frutas = ['manzana', 'pera', 'platano', 'fresa']

frutas.length // 4

frutas.length = 2 // manzana, pera

//----------------------------------

const frutas1 = ['manzana', 'pera', 'platano', 'fresa']

frutas1.push("melocoton") //permite añadir elementos a la array

frutas1.pop() //quita el ultimo elemento de la array

frutas1.shift() //elimina y devuelve el primer elemento de la array

frutas1.unshift('piña') //añade al principio no al final

frutas1.push('mango', 'aguacate') //añadir mas de 1 elemento



//------ CONCATENAR ARRAYS ------

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allnumb = numbers.concat(numbers2) // concatena los arrays

const allnumberSpread = [...numbers, ...numbers2] //otra forma de concatenar todos los numeros (... -> spread operator)


// EJERCICIO PRACTICO

//En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

// El primer elemento lo sacamos del array, ya que es el nombre del cliente.
// Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
// Después añadimos al final del array el nombre del usuario que sacamos antes.
// Recuerda que debes devolver el array modificado

// function procesarPedido(pedidos) {
// const cliente = pedidos.shift()
//   pedidos.unshift("bebida")
//   pedidos.push(cliente)
//   return pedidos

// }



// ITERACIÓN Y RECORRIDO DE ARRAYS


// COMO RECORRER ARRAYS 


// CON WHILE
let frutas = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}

// CON FOR
let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}

let frutas = ['🍎', '🍌', '🍓']

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}


//FOR OF
let frutas = ['🍎', '🍌', '🍓']

for (const fruta of frutas) {
  console.log(fruta)
}

// con foreach
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function (el, index) {
  console.log('index: ' + index)
  console.log(el)
})


//con arrow functions
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(el => {
  console.log(el)
})


// BUSQUEDA EN ARRAYS CON SUS METODOS


// 1º indexOf -> ¿pos en el array?

const emojis = ['✨', '🥑', '😍']

const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2


// 2º includes -> existe este elem en el array??
// -> este tambien funciona con cadenas de texto

const emojis2 = ['✨', '🥑', '😍']

const tieneCorazon = emojis2.includes('😍')

console.log(tieneCorazon) // -> true


// 3º some -> alguno de los elems cumple la condicion?
// este es mucho mas potente que includes pero hacen lo mismo
// se pueden crear funciones mas complejas que con el includes
// una vez ya haya cumplido con la condicion no seguira iterando
// si hay 10 elems y al 3 lo cumple no seguira


const emojis3 = ['✨', '🥑', '😍']

const tieneCorazon2 = emojis3.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true

// ---- otro ejemplo ----

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false


// 4º every -> todos los elems cumplen con la condicion?

// ¿Todos los emojis son felices?
const emojis4 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis4.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers3 = [2, 4, 7, 10, 12]
const todosSonPares = numbers3.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names2 = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names2.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

// 5º find -> devuelve el 1er elem que cumple la cond
// si no lo encuentra devuelve undefined

const numbers5 = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers5.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10

//----------------------------------------------------------------

const numbers6 = [13, 27, 44, 81]
// encuentra el primer número negativo
const firstNegativeNumber2 = numbers6.find(number => number < 0)

console.log(firstNegativeNumber) // -> undefined


// 6º findIndex -> devuelve el indice del primer elm que cumpla la cond


const numbers7 = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers7.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10

// si no se encuentra ningun elem que cumpla, retorna -1

const numbers8 = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex2 = numbers8.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> -1




// ORDENAR ARRAYS

const nums = [5, 10, 2, 25, 7]


//sort ordena por valor como cadena de texto no por valor numerico
nums.sort()

// de esta forma ordenara los valores
// si el return da valor negativo -> a delante de b 
// return a - b
// si return positivo -> b delante de a
// si devuelve 0 -> estan en la misma pos
nums.sort(function (a, b) {
  //manera ascendente
  return a - b
  //manera descendiente 
  //return b - a
})

// tambien se pde hacer asi para simplificar codigo

// asc menor a mayor
nums.sort((a, b) => a - b)
// desc mayor a menor
nums.sort((a, b) => b - a)

// sort() y toSorted()
// sort() modifica el array original y toSorted() no lo modifica

let numeros = [5, 10, 2, 25, 7]

let numerosOrdenados = numeros.toSorted((a, b) => {
  return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]

// tambien se pde gastar ... op de propagacion para crear copia y ordenarla
let numeros = [5, 10, 2, 25, 7]

const copiaNumeros = [...numeros]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]



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


// MATRICES CON ARRAYS

// como crear una matriz

<<<<<<< HEAD
const matriz = [
=======
const matriz = [
>>>>>>> 1f10d9a (Add objects section: gameSystem example, property access, and nested objects)
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
<<<<<<< HEAD

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "JavaScript") {
        return [i, j]
      }
    }
  }
  return [-1, -1]
=======

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "JavaScript") {
        return [i, j]
      }
    }
  }
  return [-1, -1]
>>>>>>> 1f10d9a (Add objects section: gameSystem example, property access, and nested objects)

}

// observaciones: si quieres acceder a la pos de un elemento de la matriz
// gasta return[i, j]
// si quieres la palabra return matrix[i][j]

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


// OBJETOS

const gameSystem = {
  name: "PS5",
  price: 299,
  company: "Sony",
  games: ['God of war', 'Spiderman', 'Ratchet and Clank'],
  specs: {
    cpu: "AMD Ryzen 9 5900X",
    gpu: "NVIDIA GeForce RTX 3080",
    ram: "16GB",
    storage: "1TB SSD"
  },
  runGame(game) {
    console.log(game)
  }
}

// para acceder a propiedades

console.log(gameSystem.name)
console.log(gameSystem.company)
console.log(gameSystem.specs.cpu)
console.log(gameSystem.games[1]) // -> Spiderman
console.log(gameSystem.specs.gpu) // -> NVIDIA GeForce RTX 3080


// otra forma de acceder a los metodos

const propertyName = 'company'

gameSystem[propertyName] // -> Sony


// otro ejemplo

const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'], // array
  address: { // otro objeto
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  }
}

// otra forma de crear un objeto

const persona1 = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'],
  address: {
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  },
  walk: function () { // <- método
    console.log('Estoy caminando')
  }
}

// const persona = { 'full name': 'Dani' }

// console.log(persona['full name']) // -> Dani

// // ❌ no puedes hacer esto
// // persona.full name


// const persona = {
//   name: 'Dani',
//   walk: function () {
//     console.log('Estoy caminando')
//   }
// }

// persona.walk() // -> Estoy caminando

// let method = 'walk'
// persona[method]() // -> Estoy caminando

