// =========================================================================
// 🚀 TEMA 3: FUNCTION EXPRESSION (Funciones como valores)
// =========================================================================

// En JavaScript, las funciones son "Ciudadanos de Primera Clase".
// Esto es un término técnico que simplemente significa que una función 
// se comporta exactamente igual que cualquier otro dato (como un número o un string).

// Si puedo guardar un número en una variable:
const edad = 25

// ¡TAMBIÉN PUEDO GUARDAR UNA FUNCIÓN DENTRO DE UNA VARIABLE!

// ─────────────────────────────────────────────
// 1️⃣ FUNCTION EXPRESSION (Función Anónima)
// ─────────────────────────────────────────────

// Fíjate que a la palabra 'function' ya no le ponemos nombre. 
// El nombre ahora es el de la constante (`sumar`).
const sumar = function (a, b) {
    return a + b
}

// Para usarla, simplemente llamas al nombre de la variable como si fuera una función normal:
console.log(sumar(5, 5)) // -> 10


// ─────────────────────────────────────────────
// 2️⃣ ¿POR QUÉ ES ÚTIL ESTO? (Callbacks)
// ─────────────────────────────────────────────
// Si podemos guardar funciones en variables... eso significa que podemos
// ¡PASAR FUNCIONES COMO PARÁMETROS A OTRAS FUNCIONES!

// Esto es la base de todo JavaScript moderno (y de Node.js, React, etc).

function operar(num1, num2, instruccionDeOperacion) {
    // llamamos a la función que nos pasen por parámetro y le inyectamos los números
    return instruccionDeOperacion(num1, num2)
}

// Creamos un par de "function expressions"
const multiplicar = function (a, b) { return a * b }
const restar = function (a, b) { return a - b }

// Ahora le pasamos la función "multiplicar" como si fuera un simple número al parámetro 3
const resultadoMultiS = operar(10, 5, multiplicar)
const resultadoResta = operar(10, 5, restar)

console.log(resultadoMultiS) // -> 50
console.log(resultadoResta) // -> 5

// 💡 A las funciones que se pasan como parámetro para ser ejecutadas después
// se les conoce mundialmente como "CALLBACKS".


// ─────────────────────────────────────────────
// 3️⃣ DIFERENCIA: HOISTING (Por qué importa la declaración)
// ─────────────────────────────────────────────
// La única diferencia real entre hacer `function despedir() {}` y `const despedir = function() {}`
// es el Hoisting (Elevamiento).

// Bien ✅: Con Function Declaration (clásica), puedes llamar a la función ANTES de escribirla:
decirHola()
function decirHola() { console.log('Hola') }

// Mal ❌: Con Function Expression (en variable), el código da error si la llamas antes:
// decirAdios() // Uncaught ReferenceError: Cannot access 'decirAdios' before initialization
// const decirAdios = function() { console.log('Adiós') }
// (Esto es porque las variables creadas con 'const' o 'let' no se elevan).
