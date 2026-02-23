// =========================================================================
// 🚀 TEMA 1: CALLBACKS
// =========================================================================

// JavaScript por defecto es SÍNCRONO (se ejecuta una línea detrás de otra).
// Pero hay cosas que "tardan un rato" (descargar una imagen, preguntar algo
// a la base de datos, esperar a que el usuario haga clic). A esto se le
// llama código ASÍNCRONO.

// El padre de todas las técnicas asíncronas en JavaScript es el Callback.

// ─────────────────────────────────────────────
// 1️⃣ ¿QUÉ ES UN CALLBACK?
// ─────────────────────────────────────────────
// Un Callback NO es una palabra reservada ni nada mágico. Es simplemente
// UNA FUNCIÓN QUE PASAMOS COMO PARÁMETRO a otra función, para que la
// primera ejecute a la segunda *cuando haya terminado su trabajo*.
// 
// (Callback = "Llámame de vuelta cuando acabes").

function procesoQueTarda(nombreCosa, funcionCallback) {
    console.log(`⏱️ Iniciando la descarga de ${nombreCosa}...`)

    // Simulamos que tarda 2 segundos con setTimeout
    setTimeout(() => {
        console.log(`📥 ¡Descarga de ${nombreCosa} completada!`)

        // Aquí es donde "llamamos de vuelta" a quien nos haya invocado
        funcionCallback()

    }, 2000)
}

function pintarEnPantalla() {
    console.log("🎨 Pintando la imagen en la web del usuario.")
}

// Así se usa. Pasamos la función 'pintarEnPantalla' SIN PARÉNTESIS al final,
// para que no se ejecute ahora, sino luego.
procesoQueTarda("Foto de Perfil", pintarEnPantalla)


// ─────────────────────────────────────────────
// 2️⃣ EL CALLBACK HELL (El infierno de los Callbacks)
// ─────────────────────────────────────────────
// ¿Por qué los desarrolladores odiamos los callbacks hoy en día?
// Porque si tienes que hacer 5 tareas asíncronas, UNA DETRÁS DE OTRA,
// el código tiene forma de triángulo o "Hadouken" y es ilegible.

/*
// Ejemplo de Callback Hell:
descargarDatos(function(datos) {
  procesarDatos(datos, function(datosProcesados) {
    guardarEnBaseDeDatos(datosProcesados, function(respuesta) {
      enviarEmailAlUsuario(respuesta, function(email) {
        console.log("Por fin terminamos. 🥵")
      })
    })
  })
})
*/

// Para solucionar este código infernal en forma de pirámide, 
// se inventaron las Promesas (Siguiente lección).
