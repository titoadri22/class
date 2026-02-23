// =========================================================================
// 🚀 TEMA 4: OPERADORES DE COMPARACIÓN
// =========================================================================

// Sirven para comparar dos valores. Siempre devuelven un Boolean (true o false).

// ─────────────────────────────────────────────
// 1️⃣ IGUALDAD Y DESIGUALDAD BÁSICA (Débil) -> ⚠️ EVITAR SU USO
// ─────────────────────────────────────────────
// El operador == (Doble igual) verifica si los valores son iguales, 
// PERO hace conversión de tipos automáticamente.

console.log(5 == 5)     // true
console.log(5 == '5')   // true 🚨 (Un número y un texto... ¡JS los da por iguales!)
console.log(0 == false) // true 🚨 (JS convierte false a 0)

console.log(5 != 8)     // true (5 es distinto de 8)
console.log(5 != '5')   // false 🚨 (JS dice que no son distintos)

// ─────────────────────────────────────────────
// 2️⃣ IGUALDAD ESTRICTA (Fuerte) -> ✅ LA FORMA CORRECTA
// ─────────────────────────────────────────────
// El operador === (Triple igual) verifica el VALOR y el TIPO DE DATO real.

console.log(5 === 5)    // true
console.log(5 === '5')  // false ✅ (Uno es número, el otro es texto. Son distintos).
console.log(0 === false)// false ✅ (Uno es number, otro boolean).

console.log(5 !== '5')  // true ✅ (Verdadero, son ESTRICTAMENTE distintos).

// ⭐️ REGLA DE ORO: En JavaScript, usa SIEMPRE '===' y '!=='. 
// Olvida que existen el '==' y el '!='.

// ─────────────────────────────────────────────
// 3️⃣ MAYOR Y MENOR QUE
// ─────────────────────────────────────────────

// Mayor que (>)
console.log(10 > 5)  // true
console.log(10 > 10) // false

// Menor que (<)
console.log(3 < 8)  // true

// Mayor o igual (>=)
console.log(10 >= 10) // true
console.log(11 >= 10) // true

// Menor o igual (<=)
console.log(5 <= 5) // true


// ─────────────────────────────────────────────
// 4️⃣ COMPARANDO STRINGS (Letras)
// ─────────────────────────────────────────────
// Compara letra por letra usando el orden alfabético (ASCII/Unicode).

console.log('a' > 'b')     // false (la 'a' va antes que la 'b')
console.log('z' > 'a')     // true
console.log('Z' > 'a')     // false ⚠️ (¡Las mayúsculas van ANTES que las minúsculas!)
