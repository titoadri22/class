// =========================================================================
// 🚀 TEMA 1: TU PRIMERA FUNCIÓN
// =========================================================================

// Una función es un bloque de código reutilizable. 
// Imagina que es como una "receta de cocina" o una "minifábrica":
// la escribes una sola vez, y luego puedes usarla todas las veces que quieras.

// ─────────────────────────────────────────────
// 1️⃣ DECLARAR UNA FUNCIÓN (Function Declaration)
// ─────────────────────────────────────────────
// Para crear una función usamos la palabra clave `function` seguida del 
// nombre que queramos darle, unos paréntesis `()` y unas llaves `{}`.

function saludar() {
    console.log("¡Hola, valiente programador! 🧑‍💻")
}

// ⚠️ Importante: Escribir esto NO ejecuta el código. 
// Solo le estamos enseñando a JavaScript CÓMO hacerlo para cuando se lo pidamos.


// ─────────────────────────────────────────────
// 2️⃣ INVOCAR / LLAMAR A LA FUNCIÓN
// ─────────────────────────────────────────────
// Para que la "minifábrica" se ponga a trabajar, tenemos que llamarla por su 
// nombre y ponerle siempre los paréntesis al final.

saludar() // Ejecutará el console.log de arriba

// La gracia es que puedo llamarla 100 veces sin tener que volver a escribir el console.log
saludar()
saludar()


// ─────────────────────────────────────────────
// 3️⃣ EL VALOR DE RETORNO (return)
// ─────────────────────────────────────────────
// Las funciones pueden hacer cosas por dentro (como imprimir en consola), 
// pero su verdadero poder es CALCULAR algo y "devolvernos" el resultado
// para que lo usemos en el resto de nuestro programa.

function obtenerNumeroPi() {
    // La palabra clave 'return' escupe el valor hacia fuera de la función
    return 3.14159
}

// Si llamamos a la función ahora, ella nos "escupe" el 3.14159, 
// así que podemos guardarlo en una variable:
const valorPi = obtenerNumeroPi()

console.log(`El valor de Pi es ${valorPi}`) // -> 3.14159

// 🛑 REGLA DE ORO DEL RETURN
// En cuanto JavaScript lee la palabra "return", LA FUNCIÓN TERMINA INMEDIATAMENTE.
// Cualquier código escrito por debajo de ese return jamás se ejecutará.

function ejemploCortado() {
    return "Me salgo de aquí"
    console.log("Esto nunca se va a imprimir porque está debajo del return")
}
