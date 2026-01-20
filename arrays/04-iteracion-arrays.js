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
frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]) // imprime el elemento en la posición i
}

frutas = ['🍎', '🍌', '🍓']

for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i]) // imprime el elemento en la posición i
}


//FOR OF
frutas = ['🍎', '🍌', '🍓']

for (const fruta of frutas) {
    console.log(fruta)
}

// con foreach
frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function (el, index) {
    console.log('index: ' + index)
    console.log(el)
})


//con arrow functions
frutas = ['🍎', '🍌', '🍓']

frutas.forEach(el => {
    console.log(el)
})
