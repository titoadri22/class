// =========================================================================
// 🚀 TEMA 5: RECURSIVIDAD
// =========================================================================

// La recursividad es cuando una función SE LLAMA A SÍ MISMA dentro de su 
// propio código. Es una alternativa a los bucles (como `for` o `while`) para
// resolver problemas que se pueden dividir en subproblemas más pequeños del mismo tipo.

// ─────────────────────────────────────────────
// 1️⃣ LOS DOS REQUISITOS DE UNA FUNCIÓN RECURSIVA
// ─────────────────────────────────────────────
// Si una función se llama a sí misma por los siglos de los siglos, 
// JavaScript explotará con un error "Maximum call stack size exceeded" (Stack Overflow).
//
// Para evitarlo, SIEMPRE necesitamos dos cosas:
// 1. Un CASO BASE (La condición de salida / ¿Cuándo paro?)
// 2. Un CASO RECURSIVO (La llamada a sí misma cambiando los parámetros)

// ─────────────────────────────────────────────
// 2️⃣ EJEMPLO CLÁSICO: LA CUENTA ATRÁS
// ─────────────────────────────────────────────

// VERSIÓN BUCLE (Normal):
function cuentaAtrasBucle(numero) {
    for (let i = numero; i > 0; i--) {
        console.log(i)
    }
}

// VERSIÓN RECURSIVA (Ninja):
function cuentaAtrasRecursiva(numero) {
    // 1. CASO BASE (Salida segura): Si el número es 0, no sigas y rompe la cadena.
    if (numero === 0) {
        return
    }

    // 2. HACER LO QUE TOCA ESTA VEZ
    console.log(numero)

    // 3. CASO RECURSIVO: Nos volvemos a llamar A NOSOTROS MISMOS 
    // pero "haciendo el problema más pequeño". 
    // (Si en vez de numero - 1, paso 'numero', se repite infinitamente).
    cuentaAtrasRecursiva(numero - 1)
}

cuentaAtrasRecursiva(3)

// ¿QUÉ PASA POR DEBAJO CON EL NÚMERO 3?
// 1º cuentaAtrasRecursiva(3): Imprime 3. Llama a cuentaAtrasRecursiva(2)
// 2º cuentaAtrasRecursiva(2): Imprime 2. Llama a cuentaAtrasRecursiva(1)
// 3º cuentaAtrasRecursiva(1): Imprime 1. Llama a cuentaAtrasRecursiva(0)
// 4º cuentaAtrasRecursiva(0): ¡El número es 0! Hace 'return' y toda la cadena se frena.


// ─────────────────────────────────────────────
// 3️⃣ UN CASO ÚTIL REAL DE RECURSIVIDAD
// ─────────────────────────────────────────────
// Recorrer un árbol de carpetas de tu ordenador. 
// Una carpeta puede tener dentro más carpetas, que a su vez tienen más carpetas...
// Como no sabes el "fondo" del asunto, usar un 'for' es casi imposible.
// 
// ¡La recursividad es perfecta!
// "Revisa esta carpeta. Si encuentras un archivo, lo lees. Si encuentras otra 
// carpeta, EJECUTA ESTA MISMA FUNCIÓN pasándole la nueva carpeta".
