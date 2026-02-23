// =========================================================================
// 🚀 TEMA 5: ASYNC Y AWAIT
// =========================================================================

// `async / await` es la revolución de JavaScript llegada en ES8 (2017).
// 
// No es nada nuevo: son SIMPLES PROMESAS por debajo. Pero nos permiten 
// escribirlas de una forma que parece "código síncrono" normal de toda la vida.
// Adiós a los callbacks y adiós a los `.then()`.

// ─────────────────────────────────────────────
// 1️⃣ SINTAXIS BÁSICA Y USO
// ─────────────────────────────────────────────

// ➡️ Regla de Oro 1: Para usar 'await', tienes que poner la palabra 'async' 
//                   delante de la declaración de la función.
// ➡️ Regla de Oro 2: 'await' siempre va delante de una PROMESA.

async function obtenerUsuarioPorRed() {
    console.log("1. Buscando usuario en la base de datos...")

    // La magia: le decimos a JS que PONGA EN PAUSA LA FUNCIÓN en esta línea,
    // y cuando internet traiga los datos recién ahí los guarde en "respuesta" 
    // y continúe hacia abajo. (¡Sin `.then`!)
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/3')

    // Pausamos otra vez para transformar el texto en JSON y lo guardamos
    const usuarioInfo = await respuesta.json()

    console.log("2. Usuario encontrado: ", usuarioInfo.username)
    console.log("3. Su email es: ", usuarioInfo.email)
}

// Así de limpio queda el código de consumir internet con async/await.
obtenerUsuarioPorRed()


// ─────────────────────────────────────────────
// 2️⃣ CAPTURANDO ERRORES (try/catch con async)
// ─────────────────────────────────────────────
// Como no tenemos el `.catch()` al final de la cadena de promesas... 
// ¿qué ocurre si el servidor de internet da error? 
// 
// Fácil: Usamos el bloque clásico `try...catch` que vimos en la lección de Errores.

async function obtenerClima() {
    try {
        const resp = await fetch('https://api-que-no-existe.com/clima')
        const climaDatos = await resp.json()
        console.log(`Hace ${climaDatos.grados}º. ☀️`)

    } catch (error) {
        // Si cualquiera de los 2 `await` de arriba explota (ej: se cae el WiFi), 
        // el código se desvía inmediatamente a este catch.
        console.error("Oops! No pudimos obtener el clima porque:", error.message, "🌧️")
    }
}

obtenerClima()


// ─────────────────────────────────────────────
// 3️⃣ CÓMO SE DECLARAN EN FUNCIONES FLECHA 
// ─────────────────────────────────────────────

// Si usas function declarations tradicionales:
// async function hacerCosas() {}

// Si usas arrow functions:
const subirImagen = async (imagen) => {
    const resolucion = await calcularTamanioOculto(imagen)
    // ...
    return "Subida completa" // Las funciones async también DEVIELVEN PROMESAS solas
}

// 💭 NOTA PRO FINAL: 
// Nunca olvides controlar tus errores con 'try/catch' cuando uses 'async/await' 
// o un simple fallo de la base de datos reventará toda la ejecución de tu función.
