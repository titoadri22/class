// =========================================================================
// 🚀 TEMA 5: HERENCIA EN CLASES (Extends y Super)
// =========================================================================

// Cuando programamos Orientado a Objetos (OOP), a veces queremos que una
// Clase Hija "herede" (adquiera gratis) todas las propiedades y capacidades
// de una Clase Padre.

// Imaginemos un videojuego:
// Tenemos la Clase "Personaje" (con vida y fuerza).
// De ella nacen las clases "Mago" y "Guerrero". Ambos son Personajes, 
// así que heredan la vida y la fuerza, pero cada uno tendrá sus cosas propias.

// ─────────────────────────────────────────────
// 1️⃣ LA CLASE PADRE
// ─────────────────────────────────────────────

class Personaje {
    constructor(nombre) {
        this.nombre = nombre
        this.vida = 100
    }

    moverse() {
        console.log(`${this.nombre} avanza 5 metros 🚶‍♂️`)
    }
}


// ─────────────────────────────────────────────
// 2️⃣ LA CLASE HIJA (Palabra clave: `extends`)
// ─────────────────────────────────────────────
// Le decimos que Mago "extiende" la plantilla de Personaje.

class Mago extends Personaje {

    // Como el Mago tiene algo especial (maná), necesitamos construirlo 
    // pidiéndole al usuario ese nuevo dato.
    constructor(nombre, mana) {

        // ⚠️ LA REGLA DE ORO DE LA HERENCIA: 'super()'
        // Antes de poder usar `this` en una clase hija, tienes OBLIGACIÓN ABSOLUTA 
        // de llamar al constructor del Padre pasándole lo que te pida.
        // 'super(nombre)' es como decir: "Papá, construye tu parte (nombre y vida) primero".
        super(nombre)

        // Una vez el papá ha terminado, ya podemos ocuparnos de nuestra parte nueva:
        this.mana = mana
    }

    hechizar() {
        // Si no tenemos maná, no podemos.
        if (this.mana <= 0) {
            console.log("Estás sin energía 😴")
            return // Detenemos la función y cortamos
        }

        this.mana -= 10
        console.log(`${this.nombre} lanza una superbola de fuego 🔥. (Magia restante: ${this.mana})`)
    }
}


// ─────────────────────────────────────────────
// 3️⃣ COMPROBANDO LA HERENCIA EN LA INSTANCIA
// ─────────────────────────────────────────────

// Creamos un nuevo Mago ("Gandalf") y le damos 50 de maná inicial.
const gandalf = new Mago("Gandalf", 50)

// 1. Usando el poder PROPIO del Mago:
gandalf.hechizar() // -> Lanza bola de fuego, mana restante: 40

// 2. Usando el poder HEREDADO del Padre (Personaje):
gandalf.moverse()
// Funciona perfecto. JavaScript intenta ver si Mago tiene el método `moverse`.
// Como no lo tiene, escala a su prototipo Padre (Personaje) y lo encuentra ahí.

console.log(gandalf.vida) // -> 100 (Heredado gratis por el 'super()')
