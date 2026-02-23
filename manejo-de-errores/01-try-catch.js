// =========================================================================
// 🚀 TEMA 1: EL BLOQUE TRY...CATCH
// =========================================================================

// Cuando programas, las cosas FRACASAN. Un servidor se cae, el usuario mete
// una letra donde iba un número, o intentas leer una propiedad de 'undefined'.
//
// Si JavaScript encuentra un error grave en tu código, entra en "pánico", 
// muestra un mensaje rojo en la consola y DETIENE TODA LA EJECUCIÓN (pantalla en blanco).

// Para evitar que la página entera explote y muera, usamos `try...catch`.

// ─────────────────────────────────────────────
// 1️⃣ SINTAXIS BÁSICA
// ─────────────────────────────────────────────

try {
    // 1. INTENTA hacer esto (código peligroso que podría fallar)
    console.log("Iniciando un proceso muy complicado...")

    // ¡Ups! Llamamos a una función que no existe en ningún lado
    hacerAlgoMagicoYQueNoExiste()

    // Esta línea NUNCA se ejecuta porque el código explotó arriba
    console.log("Proceso terminado con éxito.")

} catch (error) {
    // 2. ¡BOOM! Como algo falló arriba, JavaScript "captura" el error
    // y lo mete en la variable `error` para que nosotros lo gestionemos.

    console.log("¡Cuidado! Ha habido un problema. Pero la app sigue funcionando.")

    // Podemos ver qué ha pasado exactamente leyendo el objeto error:
    console.log("El motivo técnico fue:", error.message)
}


// ─────────────────────────────────────────────
// 2️⃣ LA VENTAJA DE SOBREVIVIR AL ERROR
// ─────────────────────────────────────────────
// Como hemos "capturado" el error (catch) en lugar de dejarlo suelto por ahí,
// JavaScript respira aliviado y CONTINÚA ejecutando el resto de tu archivo.

console.log("👉 Yo sigo aquí evaluándome sin problemas, porque el error fue capturado.")


// ─────────────────────────────────────────────
// 3️⃣ IMPORTANTE: TRY-CATCH SOLO ES PARA CÓDIGO SÍNCRONO
// ─────────────────────────────────────────────
// (A no ser que uses async/await, que lo veremos después).
// Si pones un try-catch alrededor de algo que "tardará un rato en fallar" (como un setTimeout
// o una petición a internet normal), el try-catch se cerrará antes de que ocurra el error y no lo pillará.

try {
    setTimeout(function () {
        // variableQueNoExiste // ¡Esto reventará y no será capturado!
    }, 1000)
} catch (e) {
    console.log("No cazaré el error del setTimeout")
}
