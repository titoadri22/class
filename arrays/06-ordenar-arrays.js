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
numeros = [5, 10, 2, 25, 7]

const copiaNumeros = [...numeros]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]
