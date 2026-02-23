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
