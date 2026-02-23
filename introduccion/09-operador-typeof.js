// =========================================================================
// 🚀 TEMA 9: OPERADOR TYPEOF
// =========================================================================

// JavaScript es un lenguaje de **tipado dinámico**. Las variables pueden cambiar 
// de tipo y a veces no tenemos claro qué dato contienen (¿es un número, es un string?).
// Para eso usamos el operador unario especial `typeof`.

// ─────────────────────────────────────────────
// 1️⃣ CÓMO FUNCIONA
// ─────────────────────────────────────────────
// Le pasas un valor a `typeof` y este te DEVUELVE UN STRING diciendo el tipo de dato.

console.log(typeof 42) // "number"
console.log(typeof "Hola mundo") // "string"
console.log(typeof true) // "boolean"

let nota = 9.5
console.log(typeof nota) // "number" (¡Ojo! En JS los decimales y enteros son lo mismo)


// ─────────────────────────────────────────────
// 2️⃣ CASOS BÁSICOS
// ─────────────────────────────────────────────
// typeof siempre nos confirmará el tipo primitivo del que tanto hablamos:

let nombre
console.log(typeof nombre) // "undefined" (porque no tiene nada asignado)

let id = Symbol("identificador")
console.log(typeof id) // "symbol"


// ─────────────────────────────────────────────
// 3️⃣ EL "BUG" HISTÓRICO DE JAVASCRIPT: NULL
// ─────────────────────────────────────────────
// JS tiene un error en su diseño desde su creación en los años 90.
// Null es un tipo primitivo, pero si le pasas typeof...

console.log(typeof null)
// 🚨 RETORNA: "object" 

// ¡Falso! null NO ES un objeto real, es el primitivo 'null'. Pero arreglar este bug 
// ahora rompería miles de millones de páginas escritas a finales de los 90,
// así que los creadores de JavaScript decidieron dejarlo roto para siempre.


// 🤔 ¿Cómo comprobar si algo es un Array, Objetos o Funciones?
// Los tres, bajo el capó, son objetos en memoria.

console.log(typeof { c: 3 }) // "object" ✅ Correcto
console.log(typeof console.log) // "function" ✅ (Las funciones las detecta especial)

console.log(typeof [1, 2, 3]) // "object" ❌ (Para arrays te dirá 'object')
// Nota: Si quieres saber si algo es un array usa Array.isArray()
console.log(Array.isArray([1, 2, 3])) // true
