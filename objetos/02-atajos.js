// ATAJOS PARA TRABAJAR CON OBJETOS

// si la propiedad y la variable tienen el mismo nombre podemos omitir el valor
const name = 'Spidey'
const universe = 42

const spiderman = {
    name,
    universe,
    powers: ['web', 'invisibility', 'spider-sense']
}


// incluso teniendo powers fuera del objeto, se pde crear el objeto en la misma linea
const name2 = 'Spidey'
const universe2 = 42
const powers2 = ['web', 'invisibility', 'spider-sense']

const spiderman2 = { name2, universe2, powers2 }


// DESESTRUCTURACION: ATAJO AL RECUPERAR PROPIEDADES

// para guardar el valor de la prop 

const universee = spiderman.universe
console.log(universe) // -> 42

const powerss = spiderman['powers'][1]
console.log(powerss) // -> invisibility

const { univers, namess, power } = spiderman
console.log(univers) // 42
console.log(namess) // 'Spidey'
console.log(power) // ['web', 'invisibility', 'spider-sense']

// Renombrar variables y valores por defecto

const { universe: universeNumber } = spiderman
console.log(universeNumber) // 42

// Lo que estamos haciendo es recuperar la propiedad universe pero crear la constante con el nombre universeNumber.

// si la propiedad no existe, le asignamos un valor por defecto

const { namessss, isAvenger = false } = spiderman
console.log(namessss) // 'Spidey'
console.log(isAvenger) // false


// objetos anidados y atajo

const spiderman33 = {
    name: 'spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense'],
    partner: {
        name: 'MJ',
        universe: 42,
        powers: ['red hair', 'blue eyes']
    }
}
