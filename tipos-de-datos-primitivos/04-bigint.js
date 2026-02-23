// =========================================================================
// 🚀 TEMA 4: BIGINT (Enteros Gigantes)
// =========================================================================

// JavaScript tiene un límite para lo grande que puede ser un número normal (`Number`). 
// Ese límite es el `Number.MAX_SAFE_INTEGER`, que equivale a 9007199254740991 
// (unos 9 mil billones).

// Si intentamos sumar números por encima de ese límite usando `Number`,
// JavaScript pierde precisión matemática y empieza a equivocarse:

console.log(9007199254740991 + 1) // 9007199254740992 (Correcto)
console.log(9007199254740991 + 2) // 9007199254740992 ❌ (¡Incorrecto, perdió precisión!)

// ─────────────────────────────────────────────
// 1️⃣ ¿QUÉ ES BIGINT?
// ─────────────────────────────────────────────
// Para solucionar esto, introdujeron el tipo de dato primitivo `BigInt`.
// Nos permite operar con números enteros enormes y matemáticamente exactos.

// Para crearlo, solo tienes que poner una `n` al final del número:
const numeroGigante = 9007199254740991n

console.log(numeroGigante + 1n) // 9007199254740992n (Correcto)
console.log(numeroGigante + 2n) // 9007199254740993n ✅ (¡Perfecto!)

// También puedes crearlo usando la función constructora (sin 'new'):
const otroGigante = BigInt("9007199254740991")


// ─────────────────────────────────────────────
// 2️⃣ CUIDADO CON MEZCLAR TIPOS
// ─────────────────────────────────────────────
// ⚠️ NO PUEDES mezclar un `BigInt` con un `Number` normal en una operación matemática.
// JS se negará para protegerte de pérdidas de precisión ocultas.

/*
const numeroNormal = 10
const numeroBig = 20n

console.log(numeroNormal + numeroBig)
// 🛑 Uncaught TypeError: Cannot mix BigInt and other types
*/

// Para operarlos, debes convertir uno al tipo del otro primero:
// console.log(BigInt(numeroNormal) + numeroBig) // 30n


// ─────────────────────────────────────────────
// 3️⃣ ¿CUÁNDO DEBO USARLO EN LA VIDA REAL?
// ─────────────────────────────────────────────
// Casi nunca en tu día a día (a no ser que hagas cosas raras). 
// Se usa en:
// - Criptografía o calculo hash.
// - IDs muy largos de bases de datos que vienen como Strings y necesitas operarlos matemáticamente.
// - Microsegundos exactos (timestamps de alta resolución).
