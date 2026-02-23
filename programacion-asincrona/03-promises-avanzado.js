// =========================================================================
// 🚀 TEMA 3: PROMESAS (Avanzado / Creación y Gestión)
// =========================================================================

// En la lección anterior vimos cómo "consumir" promesas que nos devolvían
// herramientas como 'fetch'. Pero, ¿cómo creamos nuestras PROPIAS Promesas?

// ─────────────────────────────────────────────
// 1️⃣ CREAR UNA PROMESA DESDE CERO
// ─────────────────────────────────────────────
// Usamos el constructor `new Promise()`. Te pide pasarle una función (callback)
// con dos "poderes" mágicos en forma de parámetros: `resolve` y `reject`.

const pedirPizza = new Promise((resolve, reject) => {
    console.log("🧑‍🍳 Preparando la pizza en el horno...")

    // Simulamos que el horno tarda 3 segundos (código asíncrono real)
    setTimeout(() => {
        const seHaQuemado = false // Cambia esto a true para probar el reject

        if (seHaQuemado === false) {
            resolve("🍕 Tu pizza cuatro quesos está lista.") // CUMPLIMOS LA PROMESA!
        } else {
            reject("🔥 Se nos ha quemado el horno. ¡Lo sentimos!") // ROMPEMOS LA PROMESA!
        }
    }, 3000)
})

// Y así es como la consumimos luego abajo:
pedirPizza
    .then(mensajePositivo => console.log(mensajePositivo))
    .catch(mensajeNegativo => console.error(mensajeNegativo))


// ─────────────────────────────────────────────
// 2️⃣ PROMISE.ALL (Resolver varias promesas a la vez)
// ─────────────────────────────────────────────
// Imagina que tienes que bajarte la foto de 3 usuarios distintos de internet.
// En vez de hacer el then() del 1, luego el then() del 2... puedes disparar 
// a internet los 3 A LA VEZ y decirle a JS: "Avisame cuando tengas TODAS listas".

const tarea1 = Promise.resolve("Datos 1 listos")
const tarea2 = new Promise(resolve => setTimeout(() => resolve("Datos 2 lentos"), 2000))
const tarea3 = Promise.resolve("Datos 3 listos")

// Disparamos todo de golpe en un array:
Promise.all([tarea1, tarea2, tarea3])
    .then((resultadosArray) => {
        console.log("¡Todo ha terminado por fin!", resultadosArray)
        // Tras 2 segundos: ['Datos 1 listos', 'Datos 2 lentos', 'Datos 3 listos']
    })
    .catch((error) => {
        // ⚠️ OJO: Si UNA SOLA de las 3 promesas falla (hace reject), 
        // Promise.all automáticamente revienta y se va al catch, ignorando
        // si las otras 2 habían ido bien. 
        console.log("Alguna de las promesas falló", error)
    })


// ─────────────────────────────────────────────
// 3️⃣ PROMISE.ALLSETTLED (La alternativa segura)
// ─────────────────────────────────────────────
// A diferencia de Promise.all, `allSettled` espera a que todas terminen
// (ya sea con éxito o con fallo) y nos devuelve un informe detallado de 
// lo que le ha pasado a cada una, sin reventar brutalmente por un error.
// (Es muy útil cuando no te importa que falle alguna imagen secundaria).
