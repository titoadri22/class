// =========================================================================
// 🚀 TEMA: STRINGS (Cadenas de texto)
// Es uno de los tipos primitivos más usados. Representa texto.
// =========================================================================

// ─────────────────────────────────────────────
// 1️⃣ CREACIÓN DE STRINGS
// ─────────────────────────────────────────────

// Comillas simples y dobles (es cuestión de estilo, no hay diferencia)
let nombre = 'Miguel'
let apellido = "Ángel"

// Template literals (Forma moderna con backticks ``)
// - Permiten interpolar variables usando ${}
// - Permiten strings multilínea
let presentacion = `Me llamo ${nombre} y tengo ${25} años` // Interpolación
let poema = `
  JavaScript es genial,
  y los template literals también.
` // Multilínea

// ─────────────────────────────────────────────
// 2️⃣ PROPIEDADES Y BÚSQUEDA
// ─────────────────────────────────────────────

let frase = 'JavaScript es genial y JavaScript es potente'

// Longitud
console.log(frase.length) // 44

// Buscar posición (Devuelven el índice, o -1 si no existe)
console.log(frase.indexOf('JavaScript')) // 0 (primera coincidencia)
console.log(frase.indexOf('Python')) // -1 (no encontrado)
console.log(frase.lastIndexOf('JavaScript')) // 23 (última coincidencia)

// Buscar existencia (Devuelven true/false)
console.log(frase.includes('genial')) // true
console.log(frase.startsWith('Java')) // true
console.log(frase.endsWith('potente')) // true

// ─────────────────────────────────────────────
// 3️⃣ EXTRACCIÓN Y TRANSFORMACIÓN (Crean un nuevo string)
// ─────────────────────────────────────────────
// ⚠️ IMPORTANTE: Los strings son INMUTABLES. Los métodos no cambian el 
// string original, siempre devuelven uno nuevo que debes guardar en una variable.

const texto = 'JavaScript Programming'

// Extraer porciones
console.log(texto.slice(0, 10)) // "JavaScript" (de pos 0 a 10)
console.log(texto.slice(-11)) // "Programming" (puedes usar negativos para ir desde el final)
console.log(texto.substring(0, 10)) // "JavaScript" (igual que slice, pero NO admite negativos)

// Transformar mayúsculas/minúsculas y espacios
let malFormato = '  JavaScript  '
console.log(malFormato.trim()) // "JavaScript" (quita espacios al inicio y final)
console.log(malFormato.toLowerCase()) // "  javascript  "
console.log(malFormato.toUpperCase()) // "  JAVASCRIPT  "

// Reemplazar (crea un nuevo string)
let meGusta = 'Me gusta Python y Python es genial'
// .replace -> solo la primera vez
console.log(meGusta.replace('Python', 'JavaScript')) // "Me gusta JavaScript y Python es genial"
// .replaceAll -> todas las veces
console.log(meGusta.replaceAll('Python', 'JavaScript')) // "Me gusta JavaScript y JavaScript es genial"

// ─────────────────────────────────────────────
// 4️⃣ DIVISIÓN, UNIÓN Y RELLENO
// ─────────────────────────────────────────────

// string -> array
let lenguajesStr = 'JS,Python,Java'
let arrayDeLenguajes = lenguajesStr.split(',') // ["JS", "Python", "Java"]

// Rellenar (padStart / padEnd) útil para formatear números como horas "05:00"
let numStr = '5'
console.log(numStr.padStart(3, '0')) // "005" (añade 0 al principio hasta tener length 3)

// Repetir
console.log('ja'.repeat(3)) // "jajaja"

// ─────────────────────────────────────────────
// 5️⃣ COMPARACIÓN DE STRINGS
// ─────────────────────────────────────────────

// Comparación estricta (distingue mayúsculas)
console.log('JavaScript' === 'javascript') // false

// Comparación sin distinguir mayúsculas (se pasa todo a lowerCase primero)
console.log('JavaScript'.toLowerCase() === 'javascript'.toLowerCase()) // true

// Orden lexicográfico (alfabético, cuidado con las mayúsculas)
console.log('apple' < 'banana') // true
console.log('Zebra' < 'apple') // true (¡Las mayúsculas van antes que las minúsculas!)

// ─────────────────────────────────────────────
// 6️⃣ CARACTERES DE ESCAPE (\) y UNICODE (\u)
// ─────────────────────────────────────────────

// Si usas las mismas comillas dentro y fuera, JavaScript se confunde.
// Solución 1: Usar distinta comilla
let cita = 'Él dijo: "Hola"'
// Solución 2: Carácter de escape \
let citaEscapada = "Él dijo: \"Hola\""

// Saltos de línea y tabulaciones (si no usas Template Literals)
let multilineOld = "Línea 1\nLínea 2" // \n = Nueva línea
let tabla = "Nom\tEdad" // \t = Tabulación

// Unicode (Emojis y símbolos)
let copy = '\u00A9' // ©
let corazon = '\u2764\uFE0F' // ❤️ (aunque hoy en día puedes copiar y pegar el emoji directo)

// ─────────────────────────────────────────────
// 7️⃣ CONVERSIÓN EXPLÍCITA A STRING
// ─────────────────────────────────────────────
let edadNum = 30

// Forma explícita (recomendable)
let edadStr1 = String(edadNum) // "30"
let edadStr2 = edadNum.toString() // "30"

// Forma implícita (ocurre por debajo)
let mensajeEdad = "Tengo " + 30 // Convierte el 30 a "30" y lo junta
