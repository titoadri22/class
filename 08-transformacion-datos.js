// 1º filter
const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']
const stringsWithA = strings.filter(string => string.includes('a'))

// 2º map
const strings2= ['hola', 'javascript', 'midu', 'programación']
const stringsLength = strings2.map((string) => string.length)

// 3º map + filter (encadenamiento)
const numberss3 = [1, 2, 3, 4, 5, 6, 7]
const numsGreaterThanFive = numberss3
  .map(number => number * 2)
  .filter(number => number > 5)

// 4º reduce
const numberss5 = [1, 2, 3]
const sum = numberss5.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)
