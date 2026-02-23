// =========================================================================
// 🚀 TEMA 2: PARÁMETROS Y ARGUMENTOS
// =========================================================================

// Las funciones suelen necesitar "ingredientes" desde fuera para poder trabajar.
// A esos ingredientes los llamamos Parámetros y Argumentos.

// ─────────────────────────────────────────────
// 1️⃣ PARÁMETROS (Al declarar la función)
// ─────────────────────────────────────────────
// Son las "variables" que la función se prepara para recibir dentro de sus paréntesis.

function saludarA(nombre) { // 'nombre' es un Parámetro
    console.log(`¡Hola, ${nombre}! 👋`)
}

// Puedes pedirle todos los parámetros que necesites, separados por comas:
function sumar(numeroA, numeroB) {
    return numeroA + numeroB
}


// ─────────────────────────────────────────────
// 2️⃣ ARGUMENTOS (Al llamar a la función)
// ─────────────────────────────────────────────
// Son los "valores reales" (datos) que le entregamos a la función cuando la usamos.

saludarA("Adrián") // "Adrián" es el Argumento
saludarA("María")  // "María" es el Argumento

const resultado = sumar(10, 5) // 10 y 5 son Argumentos
console.log(resultado) // -> 15


// ─────────────────────────────────────────────
// 3️⃣ PARÁMETROS POR DEFECTO (Default Parameters)
// ─────────────────────────────────────────────
// ¿Qué pasa si una función pide un ingrediente pero el usuario se olvida de mandarlo?
// Por defecto valdrá 'undefined'. PERO podemos solucionarlo asignándole un valor base.

function prepararCafe(tipo = "Solo", azucar = false) { // Aquí estamos dando valores por defecto
    const llevaAzucar = azucar ? "con azúcar" : "sin azúcar"
    console.log(`Preparando un café ${tipo} y ${llevaAzucar} ☕️`)
}

// 1. Si no le paso NADA, usará los valores por defecto:
prepararCafe()
// -> Preparando un café Solo y sin azúcar ☕️

// 2. Si le paso solo 1 argumento, rellena el primero y el segundo usa el defecto:
prepararCafe("Cortado")
// -> Preparando un café Cortado y sin azúcar ☕️

// 3. Si le paso ambos argumentos, pisa los valores por defecto:
prepararCafe("Con leche", true)
// -> Preparando un café Con leche y con azúcar ☕️


// ─────────────────────────────────────────────
// 4️⃣ ARGUMENTOS INFINITOS (Operador Rest `...`)
// ─────────────────────────────────────────────
// Si no sabes cuántos números te van a pasar, puedes recogerlos todos en un array
// usando tres puntitos delante del nombre del último parámetro.

function sumarNumerosInfinitos(...todosLosNumeros) {
    // 'todosLosNumeros' ahora es un ARRAY mágico con todos los números que te pasaron
    let suma = 0
    for (const num of todosLosNumeros) {
        suma += num
    }
    return suma
}

console.log(sumarNumerosInfinitos(1, 2)) // 3
console.log(sumarNumerosInfinitos(10, 20, 30, 40, 50)) // 150
