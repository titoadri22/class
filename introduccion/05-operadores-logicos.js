// =========================================================================
// 🚀 TEMA 5: OPERADORES LÓGICOS
// =========================================================================

// Nos permiten combinar múltiples condiciones booleanas a la vez.

// ─────────────────────────────────────────────
// 1️⃣ Operador AND (&&) - "Y lógico"
// ─────────────────────────────────────────────
// Evalúa que TODAS las condiciones sean verdaderas a la vez.
// - Si AMBAS partes son true -> devuelve true
// - Si solo UNA es false -> devuelve false

console.log(true && true)   // true
console.log(true && false)  // false
console.log(false && false) // false

let edad = 20
let tieneEntrada = true
let puedeEntrar = (edad >= 18) && tieneEntrada
console.log(puedeEntrar) // true (cumple las dos)


// ─────────────────────────────────────────────
// 2️⃣ Operador OR (||) - "O lógico"
// ─────────────────────────────────────────────
// Evalúa que AL MENOS UNA condición sea verdadera.
// - Si AL MENOS UNA es true -> devuelve true
// - Si TODAS son false -> devuelve false

console.log(true || true)   // true
console.log(true || false)  // true
console.log(false || false) // false

let esFinDeSemana = false
let esFestivo = true
let puedeDormir = esFinDeSemana || esFestivo
console.log(puedeDormir) // true (porque al menos una se cumple)


// ─────────────────────────────────────────────
// 3️⃣ Operador NOT (!) - "Negación"
// ─────────────────────────────────────────────
// Invierte el valor booleano. Lo que es true pasa a false, y viceversa.

console.log(!true)  // false
console.log(!false) // true

let estaLloviendo = false
let salirAPasear = !estaLloviendo // Invertimos: Quiero salir si NO está lloviendo
console.log(salirAPasear) // true


// ─────────────────────────────────────────────
// 🔥 TRUCO PRO: CORTOCIRCUITO (Short-circuiting)
// ─────────────────────────────────────────────
// En JS, && y || no devuelven "true" o "false" mágicamente, sino que
// devuelven el VALOR de una de las variables comparadas.

// En && (Busca el primer FALSO): 
// Si la primera es falsa, la devuelve y se detiene (cortocircuito). 
// Si la primera es verdadera, devuelve la segunda.
console.log(false && "No me evalúo jamás") // devuelve false
console.log("Hola" && "Adiós") // devuelve "Adiós"

// En || (Busca el primer VERDADERO):
// Si la primera es verdadera, la devuelve y se detiene.
// Si la primera es falsa, salta a la segunda y la devuelve.
console.log("Hola" || "Adiós") // devuelve "Hola"
console.log(false || "Valor por defecto") // devuelve "Valor por defecto"
