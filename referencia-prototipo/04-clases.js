// =========================================================================
// 🚀 TEMA 4: CLASES (ES6 Classes)
// =========================================================================

// En 2015 (ES6), JavaScript introdujo la palabra reservada `class`.
// OJO: Es muy importante saber que en JS las clases ¡NO EXISTEN REALMENTE!
// Son simplemente un "Azúcar Sintáctico" (Syntactic Sugar). Es decir, una capa 
// de maquillaje para que los programadores de Java/C++ se sintieran más cómodos.

// Por debajo, JS sigue usando Funciones Constructoras y Prototipos.
// Pero la sintaxis de Clases hace que todo sea mucho más limpio y fácil de leer.

// ─────────────────────────────────────────────
// 1️⃣ CÓMO CREAR UNA CLASE
// ─────────────────────────────────────────────
// La convención es que el nombre de la clase SIEMPRE empieza por Mayúscula.

class Usuario {

    // 1. EL CONSTRUCTOR: Es la función que se ejecuta MÁGICAMENTE y 
    // de forma automática cada vez que alguien hace `new Usuario()`.
    // Aquí es donde preparamos (inicializamos) las propiedades de la instancia.
    constructor(nombre, edad) {
        // `this` apunta al nuevo objeto que se está naciendo en ese momento.
        this.nombre = nombre
        this.edad = edad
        this.conectado = false // Valores por defecto que no vienen por parámetro
    }

    // 2. MÉTODOS DE LA CLASE: 
    // CUALQUIER función que escribamos aquí fuera del constructor, 
    // ¡Se va a guardar sola MÁGICAMENTE en el Prototipo de la clase! 
    // Ya no hay que meter funciones feas dentro del constructor que gasten RAM,
    // JS lo hace automático por nosotros.

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }

    iniciarSesion() {
        this.conectado = true
        console.log(`${this.nombre} ha iniciado sesión. 🟢`)
    }
}


// ─────────────────────────────────────────────
// 2️⃣ CÓMO CREAR UNA INSTANCIA
// ─────────────────────────────────────────────
// Igual que con las funciones constructoras: necesitas la varita mágica `new` 
// y pasarle los "ingredientes" que te pida la función `constructor` de la clase.

const paco = new Usuario("Paco", 35)
const luz = new Usuario("Luz", 28)

paco.saludar()
luz.iniciarSesion()

// ─────────────────────────────────────────────
// 3️⃣ CÓMO COMPROBAR QUE SON LO MISMO DE SIEMPRE 
// ─────────────────────────────────────────────

// Si le preguntamos a JS qué tipo de cosa es una clase... nos dirá la verdad:
console.log(typeof Usuario) // -> "function" ✅ 

// ¡Sigue siendo una puta Función Constructora por debajo de todo el maquillaje!


// ─────────────────────────────────────────────
// 4️⃣ OTRA PIEL DEL MAQUILLAJE: GETTERS Y SETTERS
// ─────────────────────────────────────────────
// Son métodos que se comportan como PROPIEDADES. Nos sirven para poner lógica
// extraña antes de que alguien pida un dato (get) o modifique un dato (set).

class Producto {
    constructor(precioBase) {
        this._precio = precioBase // La convención de "guion bajo" avisa: "No toques esto a mano"
    }

    // Se usa como si fuera una variable normal, sin paréntesis: `console.log(pan.precioFinal)`
    get precioFinal() {
        const iva = this._precio * 1.21
        return iva
    }

    // Se usa como si fuera una variable normal: `pan.precioFinal = 500`
    set precioFinal(nuevoValor) {
        if (nuevoValor < 0) {
            console.log("Error: El precio no puede ser negativo")
            return
        }
        this._precio = nuevoValor
    }
}
