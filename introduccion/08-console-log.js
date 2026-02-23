// =========================================================================
// 🚀 TEMA 8: console.log()
// =========================================================================

// `console.log()` es la herramienta número uno de cualquier programador.
// Sirve para imprimir mensajes y variables en la ruta hacia la "Consola del Navegador".

// ─────────────────────────────────────────────
// 1️⃣ USO BÁSICO
// ─────────────────────────────────────────────
// Simplemente pon dentro de los paréntesis lo que quieres ver escrito.

console.log("¡Hola mundo!")
console.log(42)

let fruta = "🍎 Manzana"
console.log(fruta) // -> Muestra "🍎 Manzana"


// ─────────────────────────────────────────────
// 2️⃣ MOSTRAR VARIAS COSAS A LA VEZ
// ─────────────────────────────────────────────
// Puedes separar las cosas con comitas (,) y JS las pondrá en orden con un espacio de separación.

let usuario = "Adrián"
let puntos = 1500
console.log("El usuario", usuario, "tiene", puntos, "puntos.")
// -> El usuario Adrián tiene 1500 puntos.


// ─────────────────────────────────────────────
// 3️⃣ ESTILOS EXTRA DE LA CONSOLA (Cosas útiles)
// ─────────────────────────────────────────────

// Mensaje de Información genérica:
console.info("Info: Este usuario es premium.")

// Mensaje de Advertencia (Sale en naranja):
console.warn("Cuidado: Estás pidiéndole muchos datos a la base de datos.")

// Mensaje de ERROR (Sale en rojo y la consola emite un aviso):
console.error("Fallo catastrófico: No hemos podido cobrarle al cliente.")

// Agrupar variables como un objeto para ver de dónde vienen (MUY PRO):
const name = "Adrián"
const edad = 25
console.log({ name, edad })
// Imprime en consola un objeto visual fácil de leer: { name: "Adrián", edad: 25 }

// Mostrar datos de una forma tabular perfecta
const coches = [
    { marca: "Ford", modelo: "Mustang" },
    { marca: "Toyota", modelo: "Prius" }
]
console.table(coches)
// -> Te dibujará una tabla súper bonita en la consola.
