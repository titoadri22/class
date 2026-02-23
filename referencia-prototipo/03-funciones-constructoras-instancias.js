// =========================================================================
// 🚀 TEMA 3: FUNCIONES CONSTRUCTORAS E INSTANCIAS
// =========================================================================

// Antes de que existieran las "Clases" en JS (año 2015), los desarrolladores 
// inventaron una forma de crear muchos objetos similares usando funciones normales.

// ─────────────────────────────────────────────
// 1️⃣ LA FUNCIÓN CONSTRUCTORA
// ─────────────────────────────────────────────
// Es una función normal, pero por convención:
// - Su nombre se escribe con MayúsculaInicial (PascalCase).
// - No hace "return" de nada.
// - Sirve como una "plantilla" o "molde" para crear copias.

function Producto(nombre, precio) {
    // `this` hace referencia al nuevo objeto vacío que vamos a crear en el futuro
    this.nombre = nombre
    this.precio = precio

    // OJO: Si metemos la función aquí directamente, gastaremos RAM por cada 
    // producto porque se fotocopiará mil veces.
    this.mostrarInfo = function () {
        console.log(`El producto ${this.nombre} cuesta ${this.precio}€`)
    }
}

// ─────────────────────────────────────────────
// 2️⃣ CREANDO INSTANCIAS (El operador `new`)
// ─────────────────────────────────────────────
// Para usar la plantilla, usamos OBLIGATORIAMENTE la varita mágica `new`.
// ¿Qué hace `new` mágicamente por detrás?:
// 1. Crea un objeto vacío `{}` en la memoria.
// 2. Hace que la palabra `this` dentro de la función apunte a ese nuevo objeto vacío.
// 3. Devuelve (hace un return automático) de ese nuevo objeto de vuelta hacia fuera.

const pan = new Producto("Barra de Pan", 1)  // Nace un Producto
const leche = new Producto("Leche de Vaca", 1.5) // Nace otro distinto

pan.mostrarInfo()
leche.mostrarInfo()


// ─────────────────────────────────────────────
// 3️⃣ SOLUCIONANDO EL PROBLEMA DE LA MEMORIA (Con Prototipos)
// ─────────────────────────────────────────────
// En el ejemplo de arriba, cada vez que hacías `new Producto`, se clonaba la
// función `mostrarInfo` y se gastaba memoria a lo tonto (1000 productos = 1000 funciones).

// LA SOLUCIÓN PROFESIONAL (El método antiguo antes de Classes):
// Añadimos los métodos al "Prototipo" de la plantilla. Así, los 1000 productos 
// buscarán en su padre la función y solo existirá UNA copia de la función para todos.

function Coche(marca) {
    this.marca = marca
}

// Añadimos al PROTOTIPO DEL PADRE:
Coche.prototype.arrancar = function () {
    console.log(`Brum brum, soy un ${this.marca}`)
}

const mustang = new Coche("Mustang")
const prius = new Coche("Prius")

mustang.arrancar()
// mustang no tiene la función dentro de sí mismo, viaja a su prototipo (Coche.prototype) y la usa.
