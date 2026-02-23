// =========================================================================
// 🚀 TEMA 6: SWITCH (Alternativa a IF-ELSE)
// =========================================================================

// Cuando un condicional se te empieza a llenar de demasiados 'else if', 
// se vuelve muy feo de leer. El `switch` nació para solucionar esto.
// Nos permite coger una variable y evaluar muchos casos posibles
// de forma mucho más ordenada.

// ─────────────────────────────────────────────
// 1️⃣ SINTAXIS BÁSICA Y FUNCIONAMIENTO
// ─────────────────────────────────────────────

// Evaluaremos qué color nos llega:
const colorSemaforo = "naranja"

switch (colorSemaforo) {
    case "rojo":
        // Si la variable evalúa a "rojo", entrá aquí
        console.log("¡Para inmediatamente! 🛑")
        // ⚠️ EL 'BREAK' ES OBLIGATORIO:
        // Le dice a JS que ya hemos encontrado nuestro caso y que 
        // debe saltarse lo demás. Si te lo olvidas, ejecutará los demás de forma infinita.
        break

    case "naranja":
        console.log("Frena poco a poco, va a ponerse rojo. ⚠️")
        break

    case "verde":
        console.log("Puedes avanzar. 🟢")
        break

    default:
        // El 'DEFAULT' es como el 'else' final. Si ninguno 
        // de los casos de arriba coincidió, siempre caerá aquí.
        console.log("Color no reconocido. ¿El semáforo está roto? 🤷‍♂️")
    // Como es el último caso, no hace falta poner break.
}


// ─────────────────────────────────────────────
// 2️⃣ AGRUPANDO CASOS (Caída Intencionada)
// ─────────────────────────────────────────────
// A veces queremos que varios casos distintos hagan EXACTAMENTE LO MISMO.
// Si quitamos el "break" a propósito y ponemos los "case" en cascada,
// compartiremos la misma respuesta.

const mes = "Enero"

switch (mes) {
    // Los 3 primeros meses harán lo mismo porque no hay nada,
    // simplemente "caen" hasta llegar al log y al break.
    case "Enero":
    case "Febrero":
    case "Marzo":
        console.log("Estamos en el primer trimestre del año. ❄️")
        break

    case "Abril":
    case "Mayo":
    case "Junio":
        console.log("Estamos en el segundo trimestre. 🌸")
        break

    // ...
    default:
        console.log("Mes no contemplado en este ejemplo rápido.")
}

// 💭 NOTA MENTAL PRO: Cuidado, los switch siempre usan Igualdad Estricta (===) por debajo. 
// Si le pasas un 2 (number) no enganchará con un case "2" (string).
