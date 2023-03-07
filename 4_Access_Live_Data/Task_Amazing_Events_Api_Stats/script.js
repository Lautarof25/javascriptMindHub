// API a trabajar

// https://amazing-events.herokuapp.com/api/events


// ------------------------------------------------------------

let paises = ["Argentina","Brasil","Uruguay","Chile","Perú"]
// Convertir un objeto o valor de JS en una cadena de texto JSON
            //Array    //propiedad específica "name"
JSON.stringify(paises, ["name"],1)  
                                // Espaciado

// Analizar una cadena de texto como JSON

let data = JSON.stringify(paises,["name"],1)

console.log(JSON.parse(data))
// Combinar estos métodos puede ser efectivo a la hora de extraer datos de arrays complejos

// -------- API ------ //
// Application programming interface

// Sirve para comunicar dos componentes entre sí mediante un conjunto de definiciones y protocolos
// Un ejemplo es una aplicación meteorológica del celular que se comunica constantemente con este sistema API para ver las actualizaciones del tiempo

// Su arquitectura se explica en término cliente-servidor
// Cliente = envia la solicitud
// Servidor = Envia la respuesta 
// La base de datos del clima es el servidor y la aplicación móvil es el cliente

// -- Método fetch
// Se usa para solicitar al servidor y cargar la información en las páginas web
// La solicitud puede ser cualquier API que devuelva los datos del formato JSON o XML

// Devolviendo una promesa
let dato;

async function getData(){
    await fetch("https://rescountries.com/v3.1/all")
    .then(response => response.json())
    .then(json => dato = json)

    console.log(dato)
}

getData();

// --------------- LOCAL STORAGE ------------------
// Espacio de almacenamiento en memoria de nuestro navegador, vinculado con la URL que lo creó y persiste en este hasta que es eliminado por el usuario mediante un método o manualmente

// Para ser almacenado usa un modelo clave valor, muy similar a una variable, y en él podemos almacenar cualquier tipo de dato soportado por JS (string, number, boolean, object, array)

// Session storage o cookies: perdura mientras la ventana está abierta o tiempo de duración


// Crear un local storage
localStorage.setItem("clave",valor) // Guarda un elemento en el local storage, asignandole una clave
// Obtener 
localStorage.getItem("clave")// busca el elemento cuya clave coincida con el parámetro
// Eliminar
localStorage.removeItem("clave")// elimina el elemento que coincida con el parámetro
// eliminar todo
localStorage.clear() // Elimina todo lo almacenado en el local storage

