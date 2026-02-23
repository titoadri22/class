// ITERAR OBJETOS

// Objeto de ejemplo que usaremos en todos los casos
const spiderman_target = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
}

// ─────────────────────────────────────────────
// 1️⃣  for...in
// Itera sobre las PROPIEDADES del objeto directamente
// Útil cuando quieres acceder a clave y valor sin métodos extra
// ─────────────────────────────────────────────
for (const property in spiderman_target) {
    console.log(`${property}: ${spiderman_target[property]}`);
}
// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense


// ─────────────────────────────────────────────
// 2️⃣  Object.keys()
// Transforma el objeto en un array con solo las PROPIEDADES (claves)
// ─────────────────────────────────────────────
const properties = Object.keys(spiderman_target)

console.log(properties.length) // 3 → hay 3 propiedades en el objeto

properties.forEach(property => {
    console.log(property)
})
// -> name
// -> universe
// -> powers


// ─────────────────────────────────────────────
// 3️⃣  Object.values()
// Transforma el objeto en un array con solo los VALORES
// ─────────────────────────────────────────────
const values = Object.values(spiderman_target)

values.forEach(value => {
    console.log(value)
})
// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]


// ─────────────────────────────────────────────
// 4️⃣  Object.entries()
// Transforma el objeto en un array de pares [propiedad, valor]
// Es el más completo: te da acceso a CLAVE y VALOR a la vez
// ─────────────────────────────────────────────
const entries = Object.entries(spiderman_target)

// Forma básica: accediendo por índice
entries.forEach(entry => {
    const property = entry[0] // la clave
    const value = entry[1]    // el valor
    console.log(`${property}: ${value}`)
})

// Forma moderna con destructuring (más limpia y recomendada)
entries.forEach(([property, value]) => {
    console.log(`${property}: ${value}`)
})
// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense


// Tienes una función que recibe un objeto como parámetro. 
// La función debe retornar un array con el nombre de 
// las propiedades que su tipo sea boolean.


function getBooleanProperties(obj) {
    // Obtenemos las claves del objeto y filtramos
    // solo las que sean de tipo boolean con typeof
    return Object.keys(obj).filter(key => typeof obj[key] === 'boolean')
}
