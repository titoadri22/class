// =========================================================================
// 🚀 TEMA 3: BUCLES CON DO-WHILE
// =========================================================================

// El bucle `do-while` es un primo hermano del `while`. 
// Hace exactamente lo mismo (repetir código mientras algo sea true),
// PERO tiene una diferencia VITAL en cómo se comporta en su primera iteración.

// ─────────────────────────────────────────────
// 1️⃣ LA GRAN DIFERENCIA CON WHILE
// ─────────────────────────────────────────────

// ➡️ EN UN `WHILE` NORMAL:
// 1º Miramos si la condición se cumple
// 2º Si es true, ejecutamos el código. Si de entrada es false, NUNCA SE EJECUTA.

let hambre = false
while (hambre === true) {
    console.log("Me como una hamburguesa 🍔") // Nunca llega a entrar aquí
}


// ➡️ EN UN `DO-WHILE`:
// 1º EJECUTAMOS el código POR COJONES al menos una vez (DO = HAZLO).
// 2º Después de hacerlo la primera vez, evaluamos la condición (WHILE = MIENTRAS).
// 3º Si sigue siendo true, repite. Si es false, se para.

let sed = false
do {
    // Entrará aquí y lo imprimirá sí o sí en la primera vuelta
    // antes de darse cuenta de que `sed` es false.
    console.log("Me bebo un vaso de agua 🥤")
} while (sed === true)


// ─────────────────────────────────────────────
// 2️⃣ ¿CUÁNDO SE USA ESTO EN LA VIDA REAL?
// ─────────────────────────────────────────────
// Se usa poquísimo hoy en día, pero hay un caso de uso clásico:
// Cuandos quieres pedirle algo a un usuario "al menos una vez" y seguir pidiéndolo
// hasta que lo haga bien (ej: un menú por consola, o forzar que escriba su nombre).

/*
let nombreDeUsuario = ""

do {
  // Esto se ejecutará sí o sí al abrir la página
  nombreDeUsuario = prompt("Por favor, introduce tu nombre para continuar:")
} while (nombreDeUsuario === "" || nombreDeUsuario === null)

// Si el usuario le dio a "Cancelar" (null) o lo dejó vacío (""),
// el bucle se repetirá forzando a que escriba algo para salir de ahí.

console.log(`Bienvenido a nuestra web, ${nombreDeUsuario}!`)
*/
