// =========================================================================
// 🚀 TEMA 2: EL BLOQUE FINALLY
// =========================================================================

// Hemos visto que `try` intenta ejecutar el código y `catch` te salva el 
// pellejo si algo explota.
// Pero existe una tercera pieza opcional en esta estructura: `finally`.

// ─────────────────────────────────────────────
// 1️⃣ ¿PARA QUÉ SIRVE EL FINALLY?
// ─────────────────────────────────────────────
// El bloque `finally` se ejecuta SIEMPRE, de manera ABSOLUTAMENTE INEVITABLE.
// - Pasó todo bien en el try -> Se ejecuta el finally.
// - Hubo un error mortal e hizo catch -> Se ejecuta el finally.

function procesarPago(cantidad) {
    console.log("Mostrando spinner de 'Cargando...' en el botón ⏳")

    try {
        if (cantidad <= 0) {
            // Forzamos un error manual a propósito (throw lo veremos en la siguiente clase)
            throw new Error("La cantidad no es válida")
        }
        console.log(`Pago de ${cantidad}€ enviado correctamente al banco. ✅`)

    } catch (error) {
        console.log(`Error al pagar: ${error.message} ❌`)

    } finally {
        // No importa si se pudo pagar (try) o si falló y no tenía saldo (catch)...
        // El spinner de carga hay que QUITARLO DE LA PANTALLA o el usuario 
        // se quedará esperando para siempre.
        console.log("Ocultando spinner de 'Cargando...'. El botón vuelve a estar clickeable. 🔄")
    }
}

// Escenario 1: Todo va bien (Pasa por Try y luego Finally)
console.log("--- INTENTO 1 ---")
procesarPago(50)

// Escenario 2: Falla (Pasa por el throw, al Catch y luego al Finally)
console.log("--- INTENTO 2 ---")
procesarPago(-10)


// ─────────────────────────────────────────────
// 2️⃣ EL SUPERPODER DEL FINALLY (Ignora los return)
// ─────────────────────────────────────────────
// El bloque `finally` es tan poderoso que se ejecuta incluso si el programador 
// hace un `return` en medio del `try` o del `catch` intentando salir de la función.

function test() {
    try {
        return "Quiero salir de la función ahora mismo"
    } finally {
        console.log("¡Te vas, pero antes imprimo esto por mis cojones! 😤")
    }
}

test()
