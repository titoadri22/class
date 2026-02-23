// =========================================================================
// 🚀 TEMA: OPERADOR DE ENCADENAMIENTO OPCIONAL (Optional Chaining '?.')
// ¿Para qué sirve?: Para acceder a propiedades anidadas de un objeto sin 
// que la aplicación se rompa si alguna de esas propiedades no existe.
// =========================================================================

// ─────────────────────────────────────────────
// EL PROBLEMA: Leer propiedades de undefined
// ─────────────────────────────────────────────
const gamesystem = {
    name: 'PS5',
    price: 550,
    specs: {
        cpu: 'AMD Ryzen Zen 2',
        gpu: 'AMD Radeon RDNA 2',
    }
}

console.log(gamesystem.name) // -> PS5
console.log(gamesystem.specifications) // -> undefined (la propiedad no existe)

// Si intentamos leer algo dentro de una propiedad que es undefined, la app se rompe:
// console.log(gamesystem.specifications.ram) 
// ❌ ERROR FATAL: Uncaught TypeError: Cannot read property 'ram' of undefined


// ─────────────────────────────────────────────
// FORMAS ANTIGUAS DE EVITAR EL ERROR (Muy largas)
// ─────────────────────────────────────────────

// 1. Usando if y typeof (Cuidado: typeof null también es 'object')
if (typeof gamesystem.specifications === 'object' && gamesystem.specifications !== null) {
    console.log(gamesystem.specifications.ram)
}

// 2. Usando el operador 'in' (Solo dice si la clave existe, pero puede ser undefined)
if ('specifications' in gamesystem && gamesystem.specifications !== undefined) {
    console.log(gamesystem.specifications.ram)
}


// ─────────────────────────────────────────────
// LA SOLUCIÓN: Optional Chaining (?.)
// ─────────────────────────────────────────────
// Permite leer propiedades anidadas sin validar cada nivel.
// Si lo que hay antes del '?.' es null o undefined, se detiene y devuelve 'undefined' (sin dar error).

// ❌ Antes rompía la app, ahora devuelve undefined de forma segura:
console.log(gamesystem.specifications?.cpu)
// -> undefined

// ✅ Si la propiedad SÍ existe, funciona normalmente y devuelve el valor:
console.log(gamesystem.specs?.cpu)
// -> AMD Ryzen Zen 2


// ─────────────────────────────────────────────
// EJEMPLO PRÁCTICO: Objetos muy anidados
// ─────────────────────────────────────────────
const user = {
    name: 'Peter',
    settings: {
        theme: 'dark',
        notifications: {
            email: true,
            push: false,
            marketing: undefined
        }
    }
}

// ❌ LA FORMA CLÁSICA (Verbosa y difícil de leer):
// Hay que validar que cada nivel exista antes de pedir el siguiente
let emailClasico = undefined
if (user && user.settings && user.settings.notifications && user.settings.notifications.email) {
    emailClasico = user.settings.notifications.email
}
console.log(emailClasico) // -> true


// ✅ CON OPTIONAL CHAINING (Limpio y directo):
// Si 'settings' o 'notifications' no existen, automáticamente devuelve undefined
const emailModerno = user?.settings?.notifications?.email
console.log(emailModerno) // -> true
