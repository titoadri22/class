// =========================================================================
// 🚀 TEMA 7: CLOSURES (Cierres o Clausuras)
// =========================================================================

// Un 'Closure' en JavaScript suena muy técnico, pero el concepto es sencillo:
// Es cuando una función "interna" es capaz de recordar y acceder a las 
// variables de su función "padre" (externa), INCLUSO cuando la función 
// padre ya haya terminado de ejecutarse por completo.

// Las funciones en JS tienen "buena memoria".

// ─────────────────────────────────────────────
// 1️⃣ CREANDO UN CLOSURE BÁSICO
// ─────────────────────────────────────────────

// FUNCIÓN "PADRE"
function iniciarContador() {
    let contador = 0 // Variable local del padre

    // FUNCIÓN "HIJA" (Clausura)
    function incrementar() {
        contador++ // Accede y modifica la variable del padre de arriba
        console.log(contador)
    }

    // Devolvemos la función hija entera SIN EJECUTARLA
    return incrementar
}


// ─────────────────────────────────────────────
// 2️⃣ LA MAGIA OCURRE AQUÍ (Poniéndolo a prueba)
// ─────────────────────────────────────────────

// Guardamos en una variable LO QUE NOS DEVOLVIÓ el padre. 
// Es decir, 'miContadorPersonal' ahora es igual a la función hija 'incrementar()'.
const miContadorPersonal = iniciarContador()

// Lógica aplastante: 
// El padre (iniciarContador) ha terminado y ha "muerto". Su variable 'contador'
// debería haber desaparecido de la memoria para siempre. 

// PERO, si ejecutamos la hija:
miContadorPersonal() // -> 1
miContadorPersonal() // -> 2
miContadorPersonal() // -> 3

// ¡MAGIA! Sigue recordando cuánto valía ese contador.
// Esa bolsita de recuerdos que la función hija se llevó consigo al salir de la 
// casa de sus padres es lo que llamamos CLOSURE.


// ─────────────────────────────────────────────
// 3️⃣ CÓMO SE USA ESTO EN LA VIDA REAL: LA CAJA FUERTE (Encapsulamiento)
// ─────────────────────────────────────────────
// Los closures son la técnica número uno en JavaScript para crear 
// VARIABLES PRIVADAS. 

// Desde el mundo exterior, es completamente imposible acceder o trampear la 
// variable 'contador'. Solo puedes sumarlo uno a uno usando la función hija 
// que te dieron, garantizando que nadie lo manipula a mala fe:

// miContadorPersonal.contador = 5000 
// ❌ Esto es INÚTIL, no puedes acceder a la variable original del Closure.

// Y por eso los Closures son tan importantes.
