// =========================================================================
// 🚀 TEMA 10: NULL Y UNDEFINED
// =========================================================================

// Ambos representan la "nada" o la "ausencia de valor", pero lo hacen por 
// motivos lógicamente distintos en tu código. Es crucial entender la diferencia.

// ─────────────────────────────────────────────
// 1️⃣ UNDEFINED (No definido)
// ─────────────────────────────────────────────
// - Significa que la variable fue creada, pero NADIE EL HA ASIGNADO un valor aún.
// - Es el estado por defecto o automático que JS le da a las cosas vacías.
// - Piensa en `undefined` como un cajón que hemos construido pero que 
//   todavía no hemos metido nada dentro.

let edad
console.log(edad) // -> undefined (Existe la variable, pero no hay dato)

// También ocurre cuando intentas acceder a propiedades de un objeto que no existen:
const usuario = { nombre: "Adrián" }
console.log(usuario.apellidos) // -> undefined

// O en funciones que no devuelven nada (return vacío).


// ─────────────────────────────────────────────
// 2️⃣ NULL (Nulo)
// ─────────────────────────────────────────────
// - Significa que NO hay valor.
// - Es una asignación INTENCIONADA por parte del programador.
// - Piensa en `null` como un cajón en el que tú, como programador, has metido
//   un papel que pone "vacío a propósito".

let usuarioLogueado = null
// Al arrancar la web decimos: "Sé que no hay nadie logueado, lo declaro vacío".

usuarioLogueado = "Adrián" // Más tarde se loguea
usuarioLogueado = null // Cuando cierra sesión, lo volvemos a poner nulo intencionadamente


// ─────────────────────────────────────────────
// 3️⃣ COMPARACIÓN ENTRE AMBOS
// ─────────────────────────────────────────────

// Si los comparamos débilmente (==), a los ojos de JS son iguales: 
console.log(null == undefined) // true (ambos son "falsy" y representan nada)

// Si los comparamos ESTRICTAMENTE (===), son diferentes en tipo y concepto:
console.log(null === undefined) // false 

// ⭐️ REGLA DE CONVENCIÓN PROFESIONAL:
// Deja que JavaScript use `undefined` automáticamente cuando las cosas no tengan valor.
// Cuando TÚ quieras resetear, borrar o declarar algo vacío a propósito, usa `null`.
// De esta forma sabrás si un fallo es porque la máquina no encontró el dato (undefined) 
// o porque tú lo vaciaste intencionadamente por lógica de negocio (null).
