//----- METODOS ARRAYS -----
const frutas = ['manzana', 'pera', 'platano', 'fresa']

frutas.length // 4
frutas.length = 2 // queda: manzana, pera

//----------------------------------
const frutas1 = ['manzana', 'pera', 'platano', 'fresa']

frutas1.push("melocoton") //permite añadir elementos a la array
frutas1.pop() //quita el ultimo elemento de la array
frutas1.shift() //elimina y devuelve el primer elemento de la array
frutas1.unshift('piña') //añade al principio no al final
frutas1.push('mango','aguacate') //añadir mas de 1 elemento
