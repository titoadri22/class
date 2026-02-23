// =========================================================================
// 🚀 TEMA 5: BUCLES CON FOR
// =========================================================================

// Es el bucle más utilizado en JavaScript.
// Es como el bucle `while`, pero lo agrupa TODO (inicializador, condición 
// y actualizador) en una sola línea, haciéndolo súper compacto y seguro.
//
// Es ideal para cuando SABEMOS EXACTAMENTE cuántas vueltas 
// va a dar el bucle (ej: del número 1 al 10).

// ─────────────────────────────────────────────
// 1️⃣ ESTRUCTURA Y SINTAXIS
// ─────────────────────────────────────────────
//     1. Inicializador ; 2. Condición ; 3. Actualizador
for (let i = 0; i < 5; i++) {
    console.log(`Vuelta número: ${i}`)
}
// 💡 NOTA: Por convención universal en programación, el contador de este
// bucle se suele llamar `i` (index/índice). Si lo metes dentro de otro, usas `j`.


// ─────────────────────────────────────────────
// 2️⃣ USO EN LA VIDA REAL: ITERAR ARRAYS
// ─────────────────────────────────────────────
// Su uso estrella siempre ha sido recorrer arrays (listas de cosas), 
// para ir mirando cada elemento uno a uno, usando la variable `i` 
// como número de posición/índice.

const frutas = ["Manzana", "Pera", "Plátano", "Fresa"]

// Empieza en la caja [0]. Sigue mientras la 'i' sea menor al "tamano total" del array (4).
for (let i = 0; i < frutas.length; i++) {
    // En cada vuelta cogerá la fruta de la caja correspondiente: frutas[0], frutas[1], etc.
    console.log(`Me gusta comer ${frutas[i]} 🍎`)
}


// ─────────────────────────────────────────────
// 3️⃣ ALTERNATIVAS MODERNAS: FOR...OF y FOR...IN
// ─────────────────────────────────────────────
// Como recorrer arrays o objetos era tan común, crearon dos bucles `for` 
// especiales más fáciles de leer (sólo disponibles en JS moderno).

// 👉 FOR...OF (Específico para ARRAYS/Listas)
// Oculta el contador y te da el elemento directamente, súper limpio.
const colores = ["Rojo", "Azul", "Amarillo"]

for (const color of colores) {
    console.log(`Pintando de color ${color}`) // color pasará a valer Rojo, luego Azul...
}


// 👉 FOR...IN (Específico para OBJETOS)
// Sirve para recorrer todas las PROPIEDADES (CLAVES) de un objeto.
const coche = {
    marca: "Ford",
    modelo: "Mustang",
    color: "Rojo"
}

for (const propiedad in coche) {
    // Nos devuelve "marca", luego "modelo"... y con coche[propiedad] 
    // le pedimos cuál es su valor.
    console.log(`El coche tiene la propiedad ${propiedad} con un valor de ${coche[propiedad]}`)
}
