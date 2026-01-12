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