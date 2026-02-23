// =========================================================================
// 🚀 TEMA: NUMBERS (Números)
// En JavaScript hay UN SOLO TIPO de número, sin importar si es entero o decimal.
// Usa el estándar IEEE 754 (64 bits de precisión).
// =========================================================================

// ─────────────────────────────────────────────
// 1️⃣ CREACIÓN DE NÚMEROS
// ─────────────────────────────────────────────

// Literales (Forma normal)
let entero = 42
let decimalN = 3.14159
let negativo = -17

// Notación científica y bases
let exponencial = 1.5e10 // 15000000000 (1.5 * 10^10)
let hexColor = 0xff0000 // 16777216 (Hexadecimal empieza con 0x)
let binario = 0b11111111 // 255 (Binario empieza con 0b)

// ─────────────────────────────────────────────
// 2️⃣ CONVERSIÓN A NÚMERO (Coerción)
// ─────────────────────────────────────────────
// Usa Number() SIN el 'new' para convertir cosas a números.

console.log(Number('42')) // 42
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0 
console.log(Number('abc')) // NaN (No se pudo convertir)
console.log(Number(undefined)) // NaN

// Atajo: Operador unario '+' (hace exactamente lo mismo que Number())
console.log(+'42') // 42
console.log(+true) // 1

// ─────────────────────────────────────────────
// 3️⃣ VALORES ESPECIALES
// ─────────────────────────────────────────────

// Infinity y -Infinity
console.log(1 / 0) // Infinity
console.log(-1 / 0) // -Infinity

// NaN (Not A Number) -> Representa un error matemático
// OJO: typeof NaN sigue siendo "number" (paradoja de IEEE 754)
console.log(0 / 0) // NaN
console.log(Math.sqrt(-1)) // NaN
console.log(Number('texto')) // NaN

// ⚠️ NaN es el único valor de JS que NO ES IGUAL A SÍ MISMO
console.log(NaN === NaN) // false ❌

// ¿Cómo verificar si algo es NaN?
// isNaN() -> Convierte primero, luego verifica
console.log(isNaN('texto')) // true (porque 'texto' se vuelve NaN al intentar convertirlo)
// Number.isNaN() -> ✅ RECOMENDADO. No convierte, solo verifica si ya es NaN real.
console.log(Number.isNaN('texto')) // false

// ─────────────────────────────────────────────
// 4️⃣ MÉTODOS Y PARSING (Extraer números de strings)
// ─────────────────────────────────────────────

// parseInt (Enteros) y parseFloat (Decimales)
// A diferencia de Number(), estos leen hasta que encuentran la primera letra.
console.log(Number.parseInt('42px')) // 42 ✅
console.log(Number('42px')) // NaN ❌ (Number exige que todo sea número)
console.log(Number.parseFloat('42.7px')) // 42.7

// Convertir de número a String
let numVer = 123.4567

console.log(numVer.toString()) // "123.4567"
console.log(numVer.toFixed(2)) // "123.46" (Redondea a 2 decimales, devuelve string)

// ─────────────────────────────────────────────
// 5️⃣ CUIDADO: EL PROBLEMA CLÁSICO DE DECIMALES
// ─────────────────────────────────────────────
// En JS (y casi cualquier lenguaje), los decimales binarios no son precisos.

console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false ❌

// Solución para sumar dinero/decimales: Usar toFixed() temporalmente
function sumarDecimalesSeguro(a, b) {
    return Number((a + b).toFixed(2))
}
console.log(sumarDecimalesSeguro(0.1, 0.2)) // 0.3 ✅

// ─────────────────────────────────────────────
// 6️⃣ CUIDADO: LÍMITES Y ENTEROS SEGUROS
// ─────────────────────────────────────────────
// JS usa 64 bits, pero para enteros "seguros" solo usa 53 bits.

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// Si pasas el límite, las matemáticas se rompen:
console.log(Number.MAX_SAFE_INTEGER + 1) // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2) // 9007199254740992 ❌ (Pierde precisión)
// (Para números gigantes reales se usa el tipo "BigInt").
