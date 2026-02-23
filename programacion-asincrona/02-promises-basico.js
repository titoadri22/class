// =========================================================================
// 🚀 TEMA 2: PROMESAS (Básico)
// =========================================================================

// En ES6 (2015), ante el desastre ilegible del Callback Hell, JS introdujo las PROMESAS.
// 
// Una Promesa es exactamente lo que su nombre indica en la vida real: 
// "Te prometo que voy a intentar darte este dato. Puede que cumpla mi promesa (Resuelta) 
// o puede que haya un problema y la rompa (Rechazada)".

// ─────────────────────────────────────────────
// 1️⃣ LOS 3 ESTADOS DE UNA PROMESA
// ─────────────────────────────────────────────
// 1. Pending (Pendiente): El estado inicial. La operación asíncrona está ocurriendo.
// 2. Fulfilled (Resuelta/Cumplida): La operación terminó con éxito y tenemos el valor.
// 3. Rejected (Rechazada): La operación falló (ej. se cayó internet).


// ─────────────────────────────────────────────
// 2️⃣ CÓMO SE CONSUMEN LAS PROMESAS (then y catch)
// ─────────────────────────────────────────────
// La biblioteca 'fetch' (para hacer peticiones a internet) nos devuelve siempre
// una promesa nativamente. Así que es el mejor ejemplo para aprender a consumirlas.

console.log("1. Pidiendo datos al servidor...")

fetch('https://jsonplaceholder.typicode.com/users/1') // Esto devuelve una Promesa Pendiente
    .then((respuesta) => {
        // Si la promesa se CUMPLE, entra en el .then()
        console.log("2. ¡Bien! El servidor ha respondido.")
        return respuesta.json() // Esto devuelve OTRA promesa
    })
    .then((datosUsuario) => {
        // Podemos encadenar infinitos .then() para hacer cosas en orden
        // sin crear la "Pirámide del Infierno" de los callbacks.
        console.log("3. El usuario se llama:", datosUsuario.name)
    })
    .catch((error) => {
        // Si en CUALQUIER PUNTO de la cadena la promesa original o los then() FALLAN,
        // todo salta automáticamente al .catch() final.
        console.error("Oops. La promesa se rompió por el camino:", error)
    })

console.log("4. Yo sigo haciendo mis cosas mientras eso carga de fondo.")

// 📝 NOTA EL ORDEN DE SALIDA EN CONSOLA:
// Fíjate que al ejecutar este archivo verás el log "1.", luego el "4."...
// ¡Y DESPUÉS aparecerá el 2 y el 3! Eso es porque el código es Asíncrono 
// y no bloquea al pobre navegador mientras espera a internet.
