// =========================================================================
// 🚀 TEMA 3: TIPOS DE DATOS EN JAVASCRIPT
// =========================================================================

// En JavaScript, cualquier valor pertenece a un "Tipo de Dato".
// Se dividen en dos grandes grupos: Primitivos y Referencia (Objetos).

// ─────────────────────────────────────────────
// 1️⃣ TIPOS PRIMITIVOS (Son simples e inmutables)
// ─────────────────────────────────────────────

// Number (Números: enteros y decimales)
let entero = 42
let decimal = 3.14

// String (Cadenas de texto: se usan comillas dobles, simples o backticks)
let saludo = "Hola mundo"
let letra = 'A'

// Boolean (Valores lógicos: verdadero o falso)
let esMayorDeEdad = true
let tieneCarnet = false

// Undefined (Valor no asignado: la variable existe pero no tiene ningún valor aún)
let cajaVacia
console.log(cajaVacia) // -> undefined

// Null (Ausencia INTENCIONAL de valor: le decimos explícitamente que está vacío)
let cuentaBancaria = null

// Symbol (Valores únicos e irrepetibles - uso avanzado)
let identificador = Symbol('id')

// BigInt (Para números enteros MUY MUY grandes que sobrepasan el límite de Number)
let numeroGigante = 9007199254740991n // La 'n' final indica que es BigInt

// ─────────────────────────────────────────────
// 2️⃣ TIPOS POR REFERENCIA (Son complejos y mutables)
// ─────────────────────────────────────────────

// Object (Agrupación de datos - pares clave: valor)
let persona = {
    nombre: 'Adrián',
    edad: 25
}

// Array (Lista de datos - técnicamente es un tipo especial de Objeto)
let colores = ['Rojo', 'Verde', 'Azul']

// Function (Bloques de código reutilizables - también son Objetos por debajo)
function saludar() {
    console.log('¡Hola!')
}
