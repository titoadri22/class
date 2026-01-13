//------ CONCATENAR ARRAYS ------
const numbers = [1 ,2 ,3]
const numbers2 = [4, 5]

const allnumb = numbers.concat(numbers2) // concatena los arrays
const allnumberSpread = [...numbers, ...numbers2] //otra forma de concatenar (... -> spread operator)

// EJERCICIO PRACTICO
// function procesarPedido(pedidos) {
// const cliente = pedidos.shift()
//   pedidos.unshift("bebida")
//   pedidos.push(cliente)
//   return pedidos
// }
