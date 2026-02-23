// =========================================================================
// 🚀 TEMA 1: CONDICIONAL IF
// =========================================================================

// El condicional `if` nos permite ejecutar un bloque de código SOLO SI
// se cumple una condición (es decir, si la condición da como resultado `true`).

// ─────────────────────────────────────────────
// 1️⃣ IF (Si pasa esto...)
// ─────────────────────────────────────────────

let edad = 20

if (edad >= 18) {
    // Todo lo que haya entre estas llaves {} se ejecutará 
    // porque la condición de arriba es VERDADERA.
    console.log("Puedes entrar a la discoteca. 🕺")
}

// Si la condición fuera falsa, JS simplemente saltaría este bloque 
// e ignoraría todo lo que hay dentro de las llaves.


// ─────────────────────────────────────────────
// 2️⃣ ELSE (Si NO pasa esto, entonces haz esto otro...)
// ─────────────────────────────────────────────
// A veces queremos tener un "plan B" si la condición original falla.

let dinero = 15

if (dinero >= 50) {
    console.log("¡Nos vamos a cenar a un restaurante chulo!")
} else {
    // Como 15 NO es mayor o igual a 50, entraremos aquí obligatoriamente
    console.log("Nos quedamos en casa comiendo pizza. 🍕")
}


// ─────────────────────────────────────────────
// 3️⃣ ELSE IF (Múltiples condiciones encadenadas)
// ─────────────────────────────────────────────
// Cuando tenemos más de dos posibilidades. JS las evaluará EN ORDEN
// y ejecutará la PRIMERA que se cumpla (ignorando todas las demás).

let nota = 7.5

if (nota >= 9) {
    console.log("¡Sobresaliente! 🌟")
} else if (nota >= 7) {
    console.log("Notable. ¡Muy bien escrito! 👏") // Entrará aquí porque 7.5 >= 7
} else if (nota >= 5) {
    console.log("Aprobado por los pelos. 😅")
} else {
    // Si NINGUNA de las de arriba se cumple, cae aquí por descarte
    console.log("Suspenso... A estudiar más. 📚")
}


// ─────────────────────────────────────────────
// 4️⃣ IF ANIDADOS (Un if dentro de otro if) - ⚠️ Evítalo si puedes
// ─────────────────────────────────────────────
// Se puede hacer, pero el código se vuelve feo y difícil de leer ("Spaghetti code").

let tieneCarnet = true
let estaBorracho = false

if (tieneCarnet === true) {
    if (estaBorracho === false) {
        console.log("Puedes conducir el coche 🚗")
    } else {
        console.log("Tienes carnet pero has bebido, llama a un taxi 🚕")
    }
} else {
    console.log("No puedes conducir")
}

// ✨ TRUCO PRO: Mejor usar operadores lógicos para no anidar:
// if (tieneCarnet && !estaBorracho) { console.log('Puedes conducir') }
