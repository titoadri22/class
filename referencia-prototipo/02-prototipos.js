// =========================================================================
// 🚀 TEMA 2: LA CADENA DE PROTOTIPOS (Prototypes)
// =========================================================================

// JavaScript NO fue diseñado inicialmente con "Clases" como Java o C++.
// Su sistema de herencia se basa en "Prototipos". 
// Entender los prototipos es entender cómo funciona JS por debajo.

// ─────────────────────────────────────────────
// 1️⃣ ¿QUÉ ES EL PROTOTIPO (__proto__ / Prototype)?
// ─────────────────────────────────────────────
// Cuando creas un objeto en JS, automáticamente se le adhiere una especie 
// de "objeto oculto" o "manual de instrucciones" llamado Prototipo.

const perro = { nombre: "Toby" }
console.log(perro)

// Si hiciéramos un console.log de ese perro en el navegador, veríamos que tiene
// la propiedad `nombre`, pero también un campo extraño llamado `[[Prototype]]` (o `__proto__`).

// Cuando tú intentas hacer:
console.log(perro.toString()) // -> "[object Object]"

// ¡A perro nunca le metimos una función toString()! ¿De dónde sale?
// JavaScript hace lo siguiente:
// 1. Mira si `perro` tiene la propiedad `toString`. No la tiene.
// 2. JS viaja a su Prototipo (su "padre") y mira si él la tiene. 
// 3. El prototipo padre sí la tiene (viene de fábrica). La ejecuta.


// ─────────────────────────────────────────────
// 2️⃣ LA "CADENA" DE PROTOTIPOS (Prototype Chain)
// ─────────────────────────────────────────────
// Si el padre no tiene la propiedad, buscará en el prototipo del abuelo... 
// y así hasta llegar a `null` (la cima de la cadena, el final del universo JS).

const arraysNormal = [1, 2, 3]

arraysNormal.push(4) // ¿De dónde sale el push?
// arraysNormal -> No lo tiene
// Su Prototipo (Array.prototype) -> SÍ lo tiene. Ahí viven map, filter, push...


// ─────────────────────────────────────────────
// 3️⃣ CÓMO COMPROBARLO EN CÓDIGO 
// ─────────────────────────────────────────────
// En JS usamos la propiedad `__proto__` (anticuada) o `Object.getPrototypeOf()` (moderna) 
// para ver quién es el padre de alguien.

const texto = "Hola"

// ¿Quién es el padre de un String? El prototipo de String.
const padre = Object.getPrototypeOf(texto)
console.log(padre === String.prototype) // true

// ¿Quién es el padre de todos los prototipos base? El gran Objeto de JS.
const abuelo = Object.getPrototypeOf(padre)
console.log(abuelo === Object.prototype) // true

// ¿Quién es el padre de Object.prototype? NADA. El vacío.
const bisabuelo = Object.getPrototypeOf(abuelo)
console.log(bisabuelo) // null
