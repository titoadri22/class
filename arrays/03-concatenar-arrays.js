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
