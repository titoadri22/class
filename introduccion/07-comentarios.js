// =========================================================================
// 🚀 TEMA 7: COMENTARIOS
// =========================================================================

// Los comentarios en programación son trozos de texto que el ordenador 
// ignora por completo. Sirven para que los humanos (tú mismo o tu equipo) 
// puedan entender qué hace el código o por qué se tomó una decisión.

// ─────────────────────────────────────────────
// 1️⃣ COMENTARIOS DE UNA SOLA LÍNEA
// ─────────────────────────────────────────────
// Se hacen con una doble barra (//)
// Todo lo que vaya detrás de esa doble barra hasta el final de la línea será ignorado.

let precio = 100 // Aquí guardamos el precio sin IVA del producto

// Esto es útil para pequeñas aclaraciones.
// console.log("Prueba que no quiero que se ejecute")


// ─────────────────────────────────────────────
// 2️⃣ COMENTARIOS MULTILÍNEA (En bloque)
// ─────────────────────────────────────────────
// Se abren con /* y se cierran obligatoriamente con */
// Son útiles para dar explicaciones más largas o "apagar" 
// de golpe un gran trozo de código que estás probando.

/*
 * Hola, soy un comentario multilínea.
 * Poner el asterisco (*) en cada línea es simplemente por estética
 * y para que quede ordenado. No es obligatorio.
 */

/*
function sumar(a, b) {
  return a + b
}
sumar(1, 2)
*/
// El código de arriba no se ejecutará porque lo hemos comentado.


// ─────────────────────────────────────────────
// 💡 UN BUEN CONSEJO SOBRE LOS COMENTARIOS
// ─────────────────────────────────────────────
// El "buen código" debería explicarse por sí mismo.
// Los comentarios no deben explicar QUÉ hace el código, sino POR QUÉ o PARA QUÉ lo hace.
// Ejemplo: 

// ❌ Mal (Redundante):
// Calcula el total sumando el precio y el impuesto
const total = precio + impuesto

// ✅ Bien (Aporta contexto de negocio):
// Calculamos el impuesto al 21% según el Real Decreto XXX/2023
const totalParaEspaña = precio + (precio * 0.21)
