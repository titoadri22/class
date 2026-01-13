// ITERACIÓN Y RECORRIDO DE ARRAYS
let frutas = ['🍎', '🍌', '🍓']
let i = 0 

// CON WHILE
while (i < frutas.length) {
  console.log(frutas[i]) 
  i++ 
}

// CON FOR (Normal e Inverso)
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i])
}

// FOR OF
for (const fruta of frutas){
    console.log(fruta)
}

// CON FOREACH Y ARROW FUNCTIONS
frutas.forEach(function(el, index){
  console.log('index: ' + index)
  console.log(el)
})

frutas.forEach(el => console.log(el))
