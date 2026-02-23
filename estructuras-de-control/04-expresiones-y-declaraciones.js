// =========================================================================
// 🚀 TEMA 4: EXPRESIONES VS DECLARACIONES (Statements)
// =========================================================================

// Esta es una pregunta clásica de entrevistas técnicas.
// En JavaScript (y casi todos los lenguajes), todo el código que escribas 
// se divide en dos grandes "familias": Expresiones y Declaraciones.

// ─────────────────────────────────────────────
// 1️⃣ EXPRESIONES (Expressions)
// ─────────────────────────────────────────────
// - Una expresión es CUALQUIER COSA QUE PRODUCE UN VALOR.
// - Si lo puedes asignar a una variable, o meter en un console.log(), es una expresión.
// - El navegador evalúa las expresiones hasta reducirlas a un solo dato.

// Ejemplos de Expresiones:
console.log(5 + 5)          // "5 + 5" es una expresión (produce el valor 10)
console.log("Hola" + "!")   // ""Hola" + "!" es una expresión (produce "Hola!")
console.log(true && false)  // "true && false" es una expresión (produce false)

// INCLUSO LLAMAR FUNCIONES ES UNA EXPRESIÓN:
// Math.random() produce un número aleatorio, por lo que actúa como un valor.
let numero = Math.random()

// Hasta los valores "crudos" (primitivos) son expresiones de origen:
// 42, "Adri", true


// ─────────────────────────────────────────────
// 2️⃣ DECLARACIONES (Statements / Sentencias)
// ─────────────────────────────────────────────
// - Una declaración es una INSTRUCCIÓN que le dice a JS que HAGA ALGO.
// - NO producen un valor en sí mismas.
// - NO puedes asignarlas a una variable ni mostrarlas por consola.

// Ejemplos de Declaraciones (Acciones/Órdenes):

// Declaración de variable: Le dice al navegador "crea este espacio en memoria".
let nombre = "Adri"

// Declaración 'If': Le dice al navegador "evalúa esta condición y decide qué camino tomar".
if (true) {
    // Código a ejecutar
}

// Bucle 'For': Le dice al navegador "repite esto X veces".
for (let i = 0; i < 5; i++) {
    // Acción
}


// ─────────────────────────────────────────────
// 3️⃣ LA PRUEBA DEL ALGODÓN
// ─────────────────────────────────────────────
// ¿Cómo saber si algo es una expresión o una declaración?
// Intenta meterlo dentro de un console.log(). Si te da error de sintaxis,
// es porque no produce un valor (es una declaración).

// ✅ VÁLIDO (Expresión dentro del log):
console.log(5 + 10)

// ❌ INVÁLIDO (Declaración IF dentro del log - Dará SyntaxError):
// console.log( if (true) { return 10 } ) 
