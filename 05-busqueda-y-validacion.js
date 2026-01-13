// BUSQUEDA EN ARRAYS CON SUS METODOS
const emojis = ['✨', '🥑', '😍']
console.log(emojis.indexOf('😍')) // -> 2
console.log(emojis.includes('😍')) // -> true

// SOME
const names = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false

// EVERY
const emojis4 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis4.every(emoji => emoji === '😀') // -> false

const numbers3 = [2, 4, 7, 10, 12]
const todosSonPares = numbers3.every(number => number % 2 === 0) // -> false

const names2 = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names2.every(name => name.length > 3) // -> true
