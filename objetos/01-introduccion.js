// OBJETOS

const gameSystem = {
    name: "PS5",
    price: 299,
    company: "Sony",
    games: ['God of war', 'Spiderman', 'Ratchet and Clank'],
    specs: {
        cpu: "AMD Ryzen 9 5900X",
        gpu: "NVIDIA GeForce RTX 3080",
        ram: "16GB",
        storage: "1TB SSD"
    },
    runGame(game) {
        console.log(game)
    }
}

// para acceder a propiedades

console.log(gameSystem.name)
console.log(gameSystem.company)
console.log(gameSystem.specs.cpu)
console.log(gameSystem.games[1]) // -> Spiderman
console.log(gameSystem.specs.gpu) // -> NVIDIA GeForce RTX 3080


// otra forma de acceder a los metodos

const propertyName = 'company'

gameSystem[propertyName] // -> Sony


// otro ejemplo

const persona = {
    name: 'Dani',
    age: 30,
    isWorking: true,
    family: ['Miguel', 'Maria'], // array
    address: { // otro objeto
        street: 'Calle de la piruleta',
        number: 13,
        city: 'Barcelona'
    }
}

// otra forma de crear un objeto

const persona1 = {
    name: 'Dani',
    age: 30,
    isWorking: true,
    family: ['Miguel', 'Maria'],
    address: {
        street: 'Calle de la piruleta',
        number: 13,
        city: 'Barcelona'
    },
    walk: function () { // <- método
        console.log('Estoy caminando')
    }
}

// const persona = { 'full name': 'Dani' }

// console.log(persona['full name']) // -> Dani

// // ❌ no puedes hacer esto
// // persona.full name


// const persona = {
//   name: 'Dani',
//   walk: function () {
//     console.log('Estoy caminando')
//   }
// }

// persona.walk() // -> Estoy caminando

// let method = 'walk'
// persona[method]() // -> Estoy caminando
