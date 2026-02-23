// =========================================================================
// 🚀 TEMA 4: FUNCIONES FLECHA (Arrow Functions)
// =========================================================================

// Las funciones flecha se añadieron en ES6 (2015) y son la forma más 
// moderna, compacta y profesional de escribir Function Expressions en JavaScript.
// Es lo que usarás el 90% del tiempo hoy en día.

// ─────────────────────────────────────────────
// 1️⃣ CÓMO ESCRIBIRLAS (De clásica a flecha)
// ─────────────────────────────────────────────

// FUNCIÓN CLÁSICA (Function Expression)
const sumarNormal = function (a, b) {
    return a + b
}

// ARROW FUNCTION 
// Quitamos la palabra "function" y entre los paréntesis y las llaves 
// ponemos una flecha gruesa "=>" (igual + mayor que).
const sumarFlecha = (a, b) => {
    return a + b
}


// ─────────────────────────────────────────────
// 2️⃣ LOS SÚPER PODERES DE LA FLECHA (Acortando el código)
// ─────────────────────────────────────────────

// PODER 1: Return Implícito (Una sola línea)
// Si tu función tiene una sola línea de código y esa línea es el 'return', 
// puedes BORRAR las llaves `{}` y BORRAR la palabra `return`.

const multiplicar = (a, b) => a * b
// (¡Sí, es hace exactamente lo mismo pero en 1 sola línea súper limpia!)
console.log(multiplicar(5, 5)) // -> 25


// PODER 2: Si solo hay 1 parámetro, quita los paréntesis
// Si la función solo necesita un ingrediente (ej: nombre), puedes quitar los `()` 
// que envuelven el parámetro.
// Si no hay parámetros, o hay 2 o más, los `()` son obligatorios.

const saludar = nombre => `¡Hola, ${nombre}!`
console.log(saludar("Adrián")) // -> ¡Hola, Adrián!


// ─────────────────────────────────────────────
// 3️⃣ CÓMO SE USA ESTO EN LA VIDA REAL
// ─────────────────────────────────────────────
// Para lo que MÁS se inventaron las Arrow Functions fue para pasárselas
// rápido a los métodos de los Arrays (map, filter, reduce...) sin escribir tanto.

const precios = [10, 20, 30]

// ❌ Versión antigua y larga:
const preciosConIvaClasico = precios.map(function (precio) {
    return precio * 1.21
})

// ✅ Versión moderna, ninja y profesional con Arrow Function:
const preciosConIvaNuevo = precios.map(precio => precio * 1.21)

console.log(preciosConIvaNuevo) // [12.1, 24.2, 36.3]


// ─────────────────────────────────────────────
// 4️⃣ ¿CUÁNDO NO USAR FLECHAS? (Contexto 'this')
// ─────────────────────────────────────────────
// ⚠️ Tienen un comportamiento diferente con la palabra reservada `this`.
// En resumen: Nunca uses funciones flecha como MÉTODOS dentro de un objeto,
// porque perderán la capacidad de apuntar al propio objeto (se escaparán al objeto padre window).

const coche = {
    marca: 'Ford',

    // BIEN ✅ (El 'this' apunta a 'coche')
    arrancarBien: function () { console.log(`Arrancando el ${this.marca}`) },

    // MAL ❌ (El 'this' no sabe quién es 'coche' y dirá undefined)
    arrancarMal: () => { console.log(`Arrancando el ${this.marca}`) }
}
