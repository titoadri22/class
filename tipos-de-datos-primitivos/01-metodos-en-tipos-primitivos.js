// =========================================================================
// 🚀 TEMA: MÉTODOS EN TIPOS PRIMITIVOS Y OBJECT WRAPPERS
// ¿Cómo es posible que los tipos primitivos tengan métodos si no son objetos?
// =========================================================================

// ─────────────────────────────────────────────
// RECORDATORIO: TIPOS PRIMITIVOS (7 en total)
// ─────────────────────────────────────────────
// string, number, bigint, boolean, undefined, symbol, null
// Nota: typeof null es "object" por un bug histórico, pero sigue siendo primitivo.

// ─────────────────────────────────────────────
// LA PARADOJA: ¿Cómo usamos métodos en ellos?
// ─────────────────────────────────────────────
let textoWrapper = 'JavaScript'
console.log(textoWrapper.length) // 10
console.log(textoWrapper.toUpperCase()) // "JAVASCRIPT"

// ¿Cómo es posible? Gracias a los "OBJECT WRAPPERS" (Objetos Envolventes).

// ─────────────────────────────────────────────
// CÓMO FUNCIONA UN OBJECT WRAPPER (Por debajo)
// ─────────────────────────────────────────────
// Cuando llamas un método en un primitivo, JavaScript automáticamente:
// 1. Crea un objeto wrapper temporal: new String("JavaScript")
// 2. Llama al método en ese objeto: .toUpperCase()
// 3. Devuelve el resultado ("JAVASCRIPT")
// 4. Destruye el objeto temporal inmediatamente.

// ─────────────────────────────────────────────
// CONSECUENCIA: NO PUEDES GUARDAR PROPIEDADES EN PRIMITIVOS
// ─────────────────────────────────────────────
let numWrapper = 42
numWrapper.nuevaPropiedad = 'test'
// Internamente crea un Number temporal, le asigna 'test' y lo destruye al instante.

console.log(numWrapper.nuevaPropiedad) // -> undefined (¡se perdió para siempre!)

// ─────────────────────────────────────────────
// EXCEPCIONES: null y undefined NO TIENEN WRAPPER
// ─────────────────────────────────────────────
// String, Number, BigInt, Boolean y Symbol sí tienen wrappers disponibles.
// Pero no intentes esto con undefined o null:

let nulo = null
// nulo.toString() // ❌ TypeError: Cannot read properties of null

let indefinido = undefined
// indefinido.toString() // ❌ TypeError: Cannot read properties of undefined


// ─────────────────────────────────────────────
// ⚠️ BUENAS PRÁCTICAS: NUNCA USES "new Number()" o "new String()"
// ─────────────────────────────────────────────
// Aunque los Object Wrappers existen por debajo, NUNCA debes instanciarlos tú a mano.

let textoReal = 'Hola'
let textoFalso = new String('Hola')

console.log(typeof textoReal) // -> "string" (Correcto)
console.log(typeof textoFalso) // -> "object" ⚠️ (Mala práctica)
console.log(textoReal === textoFalso) // -> false (¡Son tipos diferentes!)

// ✅ LO CORRECTO: Usa las funciones globales SIN el "new" SOLO para coerción (convertir tipos):
let numeroEnTexto = "42"
let numeroReal = Number(numeroEnTexto) // Convierte "42" a 42 (Primitivo real)

console.log(typeof numeroReal) // -> "number"
// OJO: Los objetos siempre evalúan como "true" en condiciones lógicas. 
// "new Boolean(false)" se evaluaría como "true" (¡es un objeto!), lo cual causa bugs horribles.
