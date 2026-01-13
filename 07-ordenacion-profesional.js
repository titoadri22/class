// ORDENAR ARRAYS
const nums =[5, 10, 2, 25, 7]
nums.sort((a,b) => a - b) // Ascendente

// sort() vs toSorted()
let numeros = [5, 10, 2, 25, 7]
let numerosOrdenados = numeros.toSorted((a, b) => a - b)

// Copia con spread operator para no mutar original
const copiaNumeros = [...numeros]
copiaNumeros.sort((a, b) => a - b)
