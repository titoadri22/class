// =========================================================================
// 🚀 TEMA 1: OBJETOS Y LA REFERENCIA EN MEMORIA
// =========================================================================

// JavaScript trata a los Datos Primitivos (Numbers, Strings...) de forma muy
// distinta a los Objetos/Arrays cuando los guardas o los pasas a una función.
// Esta es la causa número 1 de bugs en desarrolladores Junior.

// ─────────────────────────────────────────────
// 1️⃣ CÓMO FUNCIONAN LOS PRIMITIVOS (Por Valor)
// ─────────────────────────────────────────────
// Se guardan directamente en el cajón de la variable. 
// Cuando copias un primitivo a otra variable, JS hace una FOTOCOPIA exacta.

let edad = 20
let edadCopia = edad // Se crea una fotocopia del 20 y se guarda aquí

edadCopia = 30 // Le cambio la edad a la copia

console.log(edadCopia) // 30
console.log(edad) // 20 -> EL ORIGINAL SIGUE INTACTO ✅


// ─────────────────────────────────────────────
// 2️⃣ CÓMO FUNCIONAN LOS OBJETOS/ARRAYS (Por Referencia)
// ─────────────────────────────────────────────
// Los objetos son pesados. JS no los mete en el cajón de la variable. 
// En su lugar, pone el objeto en un almacén lejano y en la variable 
// solo guarda la "DIRECCIÓN" (referencia) que dice dónde está el almacén.

const usuarioA = { nombre: "Adrián" }

// ⚠️ PELIGRO: Esto NO hace una fotocopia del objeto. 
// Lo que estás copiando es la DIRECCIÓN del almacén.
const usuarioB = usuarioA

// Ahora usuarioA y usuarioB son dos llaves que abren LA MISMA PUERTA.
usuarioB.nombre = "Pepe" // Voy con la llave B y cambio el nombre en el almacén.

console.log(usuarioB.nombre) // "Pepe"
console.log(usuarioA.nombre) // "Pepe" -> ❌ EL ORIGINAL SE HA MODIFICADO


// ─────────────────────────────────────────────
// 3️⃣ ¿CÓMO FOTOCOPIAR UN OBJETO SIN ROMPER NADA?
// ─────────────────────────────────────────────
// Para hacer un "Clon" real y no pasar la referencia, usamos el 
// operador de propagación (Spread Operator `...`) o `structuredClone()`.

const coche = { marca: "Ford" }

// Clon Superficial (Spread operator): "Saca todo lo de coche y mételo en este NUEVO objeto {}"
const cocheCopia = { ...coche }

cocheCopia.marca = "Toyota"

console.log(cocheCopia.marca) // "Toyota"
console.log(coche.marca)      // "Ford" -> ✅ EL ORIGINAL SIGUE A SALVO


// ─────────────────────────────────────────────
// 4️⃣ COMPARANDO OBJETOS (Cuidado con los = )
// ─────────────────────────────────────────────
// Si comparas dos objetos distintos, aunque tengan LA MISMA información dentro, 
// JS te dirá que son diferentes, porque evalúa si tienen la MISMA DIRECCIÓN de memoria.

const perro1 = { nombre: "Toby" }
const perro2 = { nombre: "Toby" }

console.log(perro1 === perro2) // false ❌ (Son idénticos por dentro, pero son dos "almacenes" distintos)

const perro3 = perro1
console.log(perro1 === perro3) // true ✅ (Tienen la misma dirección de memoria, son el mismo almacén)
