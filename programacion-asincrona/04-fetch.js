// =========================================================================
// 🚀 TEMA 4: FETCH (Consumir APIs de Internet)
// =========================================================================

// `fetch()` es la API nativa y moderna de JavaScript para hacer peticiones
// por la red (HTTP). Se usa para traer datos a tu web de otro servidor, 
// o para enviar datos de un formulario hacia fuera.

// Reemplazó a la antigua bestia conocida como `XMLHttpRequest`.

// ─────────────────────────────────────────────
// 1️⃣ Petición GET Básica (Traer datos)
// ─────────────────────────────────────────────

// Usaremos "PokeAPI" como ejemplo divertido:
const URL_API = 'https://pokeapi.co/api/v2/pokemon/pikachu'

// 1. Fetch devuelve siempre una PROMESA
fetch(URL_API)
    .then((respuestaServidor) => {
        // 2. Comprobamos si el servidor nos dio un OK (código HTTP 200-299)
        if (!respuestaServidor.ok) {
            throw new Error(`¡Error HTTP!: ${respuestaServidor.status}`)
        }

        // 3. El servidor nos escupe un chorizo de texto incomprensible (JSON String).
        // Tenemos que pedirle a la "respuesta" que lo transforme en Objeto JS.
        // OJO: Esta transformación TARDARÁ un rato, así que NOS DEVUELVE OTRA PROMESA.
        return respuestaServidor.json()
    })
    .then((datosPokemon) => {
        // 4. Aquí ya tenemos nuestro objeto limpito, 100% JavaScript.
        console.log("¡He capturado un Pokémon! ⚡️")
        console.log("Nombre del bicho:", datosPokemon.name)
        console.log("Número Pokedex:", datosPokemon.id)
        console.log("Ataque principal:", datosPokemon.moves[0].move.name)
    })
    .catch((error) => {
        // Si falla el internet, o Pókemon no responde... cae aquí de golpe.
        console.error("Algo ha ido terriblemente mal 💥", error)
    })


// ─────────────────────────────────────────────
// 2️⃣ Petición POST (Subir/Enviar datos)
// ─────────────────────────────────────────────
// Si no quieres "leer" sino "escribir" en un servidor (ej. un registro de usuario),
// `fetch` recibe un segundo parámetro: un objeto de configuración.

const URL_REGISTRO = 'https://jsonplaceholder.typicode.com/posts'

const nuevoUsuario = {
    title: "Juanito Pérez",
    body: "Soy nuevo aquí",
    userId: 1
}

fetch(URL_REGISTRO, {
    method: 'POST', // Queremos enviar

    // Como el servidor solo entiende TEXTO, cogemos nuestro bonito
    // objeto JS y lo "Stringificamos" antes de subirlo:
    body: JSON.stringify(nuevoUsuario),

    // Avisamos al servidor qué formato le estamos mandando exactamente:
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(resp => resp.json())
    .then(jsonResultante => {
        console.log("¡Usuario creado con éxito en el servidor!", jsonResultante)
    })
// .catch(...)
