// 5º find
const numbers5 = [13, 27, 44, -10, 81]
const firstNegativeNumber = numbers5.find(number => number < 0)
console.log(firstNegativeNumber) // -> -10

const numbers6 = [13, 27, 44, 81]
const firstNegativeNumber2 = numbers6.find(number => number < 0)
console.log(firstNegativeNumber2) // -> undefined

// 6º findIndex
const numbers7 = [13, 27, 44, -10, 81]
const firstNegativeNumberIndex = numbers7.findIndex(number => number < 0) // -> 3
