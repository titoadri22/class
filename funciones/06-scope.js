// =========================================================================
// 🚀 TEMA 6: EL ÁMBITO (El "Scope" de las variables)
// =========================================================================

// El "Scope" (o ámbito) es algo fundamental de entender.
// Simplemente define desde QUÉ ZONAS de nuestro archivo podemos acceder a 
// una variable que hemos creado, y en qué zonas está "invisible" o "prohibida".

// ─────────────────────────────────────────────
// 1️⃣ EL SCOPE GLOBAL (El mundo exterior)
// ─────────────────────────────────────────────
// Si creas una variable fuera de cualquier función o bloque, 
// vivirán en el Scope Global. TODO EL MUNDO (funciones, bucles, ifs...) 
// puede verlas, leerlas y modificarlas.

const jugadorGlogal = "Messi" // 🌍 SCOPE GLOBAL

function retransmitirPase() {
    // Aquí SÍ PUEDO ver 'jugadorGlobal' porque todo el mundo lo ve.
    console.log(`${jugadorGlogal} pasa la pelota a Jordi Alba.`)
}

retransmitirPase()


// ─────────────────────────────────────────────
// 2️⃣ EL SCOPE DE BLOQUE Y FUNCIÓN (Local / Burbujas)
// ─────────────────────────────────────────────
// Cada vez que abres unas llaves `{}` para un 'if', un 'for', o 
// declaras una función, creas una "burbuja" privada o de Scope Local.
//
// Las cosas que creas DENTRO de esa burbuja, no se pueden ver DESDE AFUERA de la burbuja.

function marcarGol() {
    // Esta variable solo nace y existe dentro de estas llaves.
    const delantero = "Ronaldo" // 📦 SCOPE LOCAL
    console.log(`¡Golazo de ${delantero}!`)
}

marcarGol()

// console.log(delantero) // ❌ ERROR CRÍTICO: ReferenceError 
// Para el código global, ¡la variable "delantero" no existe y nunca existió!


// ─────────────────────────────────────────────
// 3️⃣ LA REGLA DEL CRISTAL TINTADO (Jerarquía)
// ─────────────────────────────────────────────
// - Los que están DENTRO de la burbuja pueden ver hacia afuera (ven lo global).
// - Los que están FUERA de la burbuja no pueden ver hacia adentro (no ven lo local).
// - Las funciones siempre tienen preferencia por sus variables si se llaman igual (Shadowing).

const animal = "Gato 🐈"

function granja() {
    // Creamos una nueva burbuja
    const animal = "Cerdo 🐖"

    // Imprimirá "Cerdo". Tiene el animal local justo delante de sus narices,
    // así que ignora por completo el animal Global que se llama igual ("Gato")
    console.log(animal)
}

granja() // Saldrá Cerdo
console.log(animal) // Saldrá Gato
