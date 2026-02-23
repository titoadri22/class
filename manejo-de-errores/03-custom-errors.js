// =========================================================================
// 🚀 TEMA 3: LANZAR TUS PROPIOS ERRORES (Custom Errors con `throw`)
// =========================================================================

// Muchas veces, que un código sea "Técnicamente correcto" no significa 
// que sea "Lógicamente correcto".
// 
// Ejemplo: Una función pide la edad. Te pasan un -5.
// JS te dejará multiplicar o sumar ese -5 perfectamente porque es un número 
// válido. JS NO DARÁ NINGÚN ERROR. Pero tú, como creador de la aplicación,
// sabes que NO existe nadie con -5 años y quieres abortar la operación.

// ─────────────────────────────────────────────
// 1️⃣ ALZANDO LA VOZ CON 'THROW'
// ─────────────────────────────────────────────
// La palabra clave `throw` (lanzar) sirve para coger un error tuyo 
// inventado y "tirárselo a la cara a JavaScript". En cuanto JS lee 
// la palabra `throw`, aborta la ejecución al igual que si él mismo 
// hubiera detectado el error.

function registrarUsuario(edad) {
    if (edad < 18) {
        // 1. Creamos un "Objeto de Error" oficial de JavaScript (new Error)
        // 2. Lo "Lanzamos" al aire con throw.
        throw new Error("El usuario es menor de edad. Acceso denegado.")
    }

    // Si throw se ejecuta arriba, esta línea jamás se imprimirá.
    console.log("¡Usuario registrado con éxito! 🎉")
}


// ─────────────────────────────────────────────
// 2️⃣ CAPTURANDO NUESTRO ERROR INVENTADO
// ─────────────────────────────────────────────
// Alguien más arriba en el código tiene que poder recoger esa bomba 
// que hemos lanzado, y para eso es el try-catch.

try {
    // Vamos a intentar registrar a un chaval de 15 años
    registrarUsuario(15)

} catch (errorPersonalizado) {
    // ¡Bomba capturada con éxito!
    console.warn("La operación fue cancelada:")
    console.warn(errorPersonalizado.message) // -> Mostrará "El usuario es menor de edad..."
}


// ─────────────────────────────────────────────
// 3️⃣ EXTENDIENDO LA CLASE ERROR (Nivel Pro)
// ─────────────────────────────────────────────
// Si quieres ser muy profesional y tener tipos de error hiper específicos 
// (ej: errores de base de datos, errores de red, errores de formulario) 
// puedes heredar de la Clase 'Error' nativa de JS que vimos en la lección anterior.

class ValidationError extends Error {
    constructor(mensajeDeError) {
        super(mensajeDeError) // Pasamos el texto al papá oficial 'Error'
        this.name = "ValidationError" // Bautizamos nuestro propio tipo de fallo
    }
}

try {
    throw new ValidationError("El campo 'Email' está vacío.")
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Pinta el cuadro del input de color rojo. 🛑")
    } else {
        // Si no fuera de validación, quizás es que se cayó el servidor
        console.log("Muestra la pantalla de error 500. 🔌")
    }
}
