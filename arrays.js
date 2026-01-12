//explicacion arrays JavaScript

const numeros = [1,2,3]

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

frutas1.push('mango','aguacate') //añadir mas de 1 elemento



//------ CONCATENAR ARRAYS ------

const numbers = [1 ,2 ,3]
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

for (const fruta of frutas){
    console.log(fruta)
}

// con foreach
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function(el, index){
console.log('index: ' + index)
console.log(el)
})


//con arrow functions
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(el =>{
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

const tieneCorazon = emojis.includes('😍')

console.log(tieneCorazon) // -> true


// 3º some -> alguno de los elems cumple la condicion?
// este es mucho mas potente que includes pero hacen lo mismo
// se pueden crear funciones mas complejas que con el includes
// una vez ya haya cumplido con la condicion no seguira iterando
// si hay 10 elems y al 3 lo cumple no seguira


const emojis3 = ['✨', '🥑', '😍']

const tieneCorazon2 = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true

// ---- otro ejemplo ----

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false


// 4º every -> todos los elems cumplen con la condicion?

// ¿Todos los emojis son felices?
const emojis4 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers3 = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names2 = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

// 5º find -> devuelve el 1er elem que cumple la cond
// si no lo encuentra devuelve undefined

const numbers5 = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10

//----------------------------------------------------------------

const numbers6 = [13, 27, 44, 81]
// encuentra el primer número negativo
const firstNegativeNumber2 = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> undefined


// 6º findIndex -> devuelve el indice del primer elm que cumpla la cond


const numbers7 = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10

// si no se encuentra ningun elem que cumpla, retorna -1

const numbers8 = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex2 = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> -1




// ORDENAR ARRAYS