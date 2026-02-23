// =========================================================================
// 🚀 TEMA 6: VARIABLES (let y const)
// =========================================================================

// Las variables son "cajas" donde guardamos datos para usarlos más adelante.
// En JavaScript moderno (ES6 en adelante) usamos 'let' y 'const'.
// ⚠️ NUNCA uses 'var' (es la forma antigua y causa problemas impredecibles).

// ─────────────────────────────────────────────
// 1️⃣ LET (Variables que PUEDEN CAMBIAR)
// ─────────────────────────────────────────────
// Usamos 'let' cuando sabemos que el valor de la variable se va a modificar 
// a lo largo de nuestro programa (ej. un contador, la edad de un usuario).

let edad = 25
console.log(edad) // 25

// Ahora le asignamos un valor nuevo (nota que ya no ponemos 'let')
edad = 26
console.log(edad) // 26 ✓ ¡Funciona!


// ─────────────────────────────────────────────
// 2️⃣ CONST (Constantes que NO PUEDEN CAMBIAR)
// ─────────────────────────────────────────────
// Usamos 'const' para valores que nunca van a variar en el programa.
// 💡 REGLA DE ORO: En JavaScript, acostúmbrate a que TODO sea 'const' 
// hasta que veas que obligatoriamente tienes que reasignarlo (ahí lo cambias a 'let').

const fechaDeNacimiento = 1999
console.log(fechaDeNacimiento) // 1999

// Si intentas cambiar una constante, el programa explotará inmediatamente:
// fechaDeNacimiento = 2000 // 🛑 TypeError: Assignment to constant variable.


// ─────────────────────────────────────────────
// 3️⃣ NOMBRES VÁLIDOS PARA VARIABLES 
// ─────────────────────────────────────────────
// ✅ CamelCase (Lo estándar en JS):
let numeroDeHijos = 3
let miNombreCompleto = "Adrián"

// ✅ Caracteres permitidos (letras, números, _, $):
let $user = "Admin"
let _id = 145
let version2 = "v2.0"

// ❌ Nombres INCORRECTOS:
// let 1numero = 5 // No puede empezar por número
// let mi nombre = "Juan" // No puede llevar espacios
// let mi-nombre = "Pedro" // El guión medio se interpreta como una resta
