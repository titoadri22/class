// =========================================================================
// 🚀 TEMA 5: SYMBOL (Símbolos)
// =========================================================================

// El tipo primitivo `Symbol` (introducido en ES6) sirve para crear valores
// ÚNICOS e IRREPETIBLES, aunque tengan el mismo nombre.
// Su uso fundamental es como "claves ocultas" o "identificadores únicos" 
// para propiedades de objetos.

// ─────────────────────────────────────────────
// 1️⃣ CÓMO CREARLO (Nunca se usa `new`)
// ─────────────────────────────────────────────
const primerSimbolo = Symbol("id")
const segundoSimbolo = Symbol("id")

// Aunque los dos nacen con la descripción "id", en la memoria interna de JS son distintos
console.log(primerSimbolo === segundoSimbolo) // false ❌

const nombre = Symbol("adri")
console.log(typeof nombre) // "symbol"


// ─────────────────────────────────────────────
// 2️⃣ SU USO ESTRELLA: PROPIEDADES OCULTAS EN OBJETOS
// ─────────────────────────────────────────────
// Imagina que alguien te pasa un objeto gigante (ej. el perfil de un usuario que 
// viene de una API) y tú quieres añadirle una propiedad `id` tuya sin riesgo a pisotear
// otra propiedad que casualmente también se llame `id`.

const USUARIO_API = {
    id: "234-A",
    nombre: "Juan"
}

// Me creo mi símbolo único de "id interno"
const miIdentificadorSeguro = Symbol("miId")

// Se lo añado al objeto
USUARIO_API[miIdentificadorSeguro] = 999

// ¿Por qué es seguro?
// 1. No pisa a la propiedad 'id' normal
console.log(USUARIO_API.id) // "234-A"
console.log(USUARIO_API[miIdentificadorSeguro]) // 999

// 2. Está OCULTO en los bucles. Si iteras el objeto, tu símbolo secreto no sale.
for (const propiedad in USUARIO_API) {
    console.log(propiedad)
}
// Solo imprimirá: "id", "nombre". (El Símbolo es invisible)


// ─────────────────────────────────────────────
// 3️⃣ REGISTRO GLOBAL DE SÍMBOLOS (Symbol.for)
// ─────────────────────────────────────────────
// Si SÍ quieres que dos símbolos creados en distintas partes de tu programa 
// puedan ser iguales si tienen el mismo nombre, usas `Symbol.for()`.
// (Es el único caso donde un Symbol puede ser igual a otro).

const simboloGlobal1 = Symbol.for("clave-maestra")
const simboloGlobal2 = Symbol.for("clave-maestra")

console.log(simboloGlobal1 === simboloGlobal2) // true ✅
