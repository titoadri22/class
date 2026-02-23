// =========================================================================
// 🚀 TEMA 2: BUCLES CON WHILE
// =========================================================================

// Un bucle (loop) es una estructura que repite un bloque de código 
// MIENTRAS una condición sea verdadera (`true`).

// `while` significa literalmente "mientras".
// ⚠️ ¡CUIDADO!: Si la condición nunca se vuelve `false`, crearás un 
// "bucle infinito" que colgará tu navegador o consumirá toda tu memoria RAM.

// ─────────────────────────────────────────────
// 1️⃣ ESTRUCTURA BÁSICA DE UN WHILE
// ─────────────────────────────────────────────
// Necesitamos 3 cosas obligatorias para que un bucle funcione bien:
// 1. Una variable inicializadora (ej: un contador)
// 2. La condición de parada
// 3. El actualizador (incrementar/decrementar la variable)

// 1. Inicializador
let cuentaAtras = 5

// 2. Condición: "¿Es la cuenta mayor que 0?"
while (cuentaAtras > 0) {
    console.log(`Quedan ${cuentaAtras} segundos... ⏱️`)

    // 3. Actualizador: MUY IMPORTANTE, le restamos 1 en cada vuelta. 
    // Si se te olvida esta línea = 🔥 BUCLE INFINITO 🔥
    cuentaAtras--
}

console.log("¡PUM! 💥 Despegue.")


// ─────────────────────────────────────────────
// 2️⃣ CASO PRÁCTICO REAL
// ─────────────────────────────────────────────
// Los `while` son súper útiles cuando NO SABEMOS cuántas vueltas 
// va a dar el bucle exactamente (ej: esperar a que un usuario acierte una contraseña).

let contraseñaCorrecta = "secreta123"
let contraseñaIngresada = "hola"
let intentos = 0

// Mientras la contraseña introducida sea DISTINTA a la correcta y no pasen de 3 intentos
while (contraseñaIngresada !== contraseñaCorrecta && intentos < 3) {
    // Simulamos que en cada vuelta le pediríamos la clave con prompt()
    // const contraseñaIngresada = prompt("Contraseña incorrecta. Inténtalo de nuevo:")

    // Por ahora, simularemos que en el tercer intento la acierta
    intentos++
    if (intentos === 2) {
        contraseñaIngresada = "secreta123"
    }

    console.log(`Intento ${intentos}...`)
}

if (contraseñaIngresada === contraseñaCorrecta) {
    console.log("¡Acceso concedido! 🔓")
} else {
    console.log("Usuario bloqueado. 🔒")
}
