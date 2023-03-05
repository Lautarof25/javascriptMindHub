// ------------------FUNCIONES ANÓNIMAS ------------------//

// Busco el elemento
const buttonSearch = document.querySelector("#button-search");

// Agrego el escuchador de eventos.

// Al hacer "click" en el elemento, que se ejecute la función anónima

// buttonSearch.addEventListener("click",
//     function(){
//         alert("Se ejecuta función anónima")
//     }    
// )

// ------------------FUNCIÓN FLECHA ------------------//

// Función flecha sin parámetros, solo con paréntesis
const funcionFlecha = ()=>{
    alert("Ejecuto una función flecha");
}

// Función flecha con un parámetro, poner solo parámetro
const funcionFlechaConParametro = param => {
    alert("Soy "+param);
}

// Función flecha con más parámetros, poner paréntesis
const funcionFlechaConParametros = (param1,param2)=> {
    alert("Soy"+param1+" "+param2);
}
// Funcion flecha con una sola sentencia, pueden obviarse las llaves
const funcionFlechaConParametro2 = param => 
    alert("Soy "+param)

// ------------------FUNCIÓN FLECHA VS TRADICIONAL ------------------//
// Tienen diferentes ámbitos de alcance

const coche = {
    marca: "ford",
    modelo: "mustange",

    arrancar: function(){
        console.log(`Arrancando el coche ${this.marca} ${this.modelo}`);
    },

    parar: () => {
        console.log(`Parando el coche ${this.marca} ${this.modelo}`);
    }
}

coche.arrancar(); // Arrancando el coche ford mustange
coche.parar(); // Parando el coche undefined undefined

// En las funciones tradicionales, el alcance es donde está contenida, por eso podemos usar "this"

// En las funciones flecha, this no hace referencia a la instancia del objeto en el que se define, sino al ámbito de la variable coche (su padre)
// No son la mejor opción a la hora de definir un método de un objeto
// Para todo lo demás, SI se recomiendan las funciones flecha

// ------------------FUNCIONES DE ORDEN SUPERIOR ------------------//

// sirven para esconder el detalle y dar una mayor abstracción
// Son : codigo simple y elegante, tienen menos errores, facil de probar y depurar

// ------------------ FUNCIONES INTEGRADAS DE ORDEN SUPERIOR ------------------//

// map(),foreach(), filter(), reduce(), find(),findindex(),some(),sort()

// ------------------ MAP ------------------
// Recorre el array mediante una función y retorna un array de respuesta

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
var autosHTML = "";

autos.map(auto => 
    autosHTML += 
    `
        <li>${auto}</li>
    `    
)

ulAutos.innerHTML = autosHTML;

// ------------------ FOREACH  ------------------
// Recorre el array mediante una función (suele ser anónima pero puede ser nombrada)

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
var autosHTML = "";

autos.forEach(auto => 
    autosHTML += 
    `
        <li>${auto}</li>
    `    
)

ulAutos.innerHTML = autosHTML;
// La diferencia con map radica en el uso de checkboxes

// ------------------ FILTER ------------------
// Recorre un array mediante una función que retorna un condicional, y retorna un array filtrado con los elementos que hayan pasado ese condicional

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
var autosHTML = "";

let autosFilter = autos.filter(auto => auto === "fiat")
    autosHTML += 
    `<li>${autosFilter}</li>`

ulAutos.innerHTML = autosFilter;

// ------------------ REDUCE ------------------
// Recorre un array según y permite realizar una operación mediante un acumulador

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
var autosHTML = "";

let autosReduce = autos.reduce((valorAnterior,valorActual) =>{
    return `${valorAnterior} ${valorActual},`
},"Las marcas de autos son: ")

ulAutos.innerHTML = autosReduce;

// ------------------ FIND ------------------
// Devuelve el primer elemento que cumpla con la función inyectada (si ningún elemento cumple, retorna undefined)

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
var autosHTML = "";

let autosFind = autos.find(auto => 
    auto == "ford"
)

ulAutos.innerHTML = autosFind;

// ------------------ FINDINDEX ------------------
// Devuelve el primer elemento que cumpla con la función inyectada (si ningún elemento cumple, retorna -1)

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
var autosHTML = "";

let autosFindIndex = autos.findIndex(auto => 
    auto == "ford"
)

ulAutos.innerHTML = autosFindIndex;

// ------------------ SOME ------------------
// Devuelve true o false si hay al menos un elemento en el array que cumpla con la función inyectada

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
var autosHTML = "";

let autosSome = autos.some(auto => 
    auto == "ford"
)

ulAutos.innerHTML = autosSome;

// ------------------ SORT ------------------
// Requiere la utilización de una función de orden superior para realizar ordenamientos ascendentes y descendientes y ordenar letras y numeros


var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
// Ordenamiento ascendente
let autoSort = autos.sort((a,b) => {
    if(a<b){return -1}
    if(a>b){return 1}
    return 0
})

ulAutos.innerHTML = autoSort;

var autos = ["fiat","ford","peugeot"];
var ulAutos = document.getElementById("autos");
// Ordenamiento descendente
let autoSortReves = autos.sort((a,b) => {
    if(a>b){return -1}
    if(a<b){return 1}
    return 0
})

ulAutos.innerHTML = autoSortReves;

var numeros = [1,22,17,54,11]
var ulAutos = document.getElementById("autos");

// Ordenamiento Ascenente
let numeroSort = numeros.sort((a,b) => {
    a-b
})

// Ordenamiento Ascenente
let numeroSortReves = numeros.sort((a,b) => {
    b-a
})

ulAutos.innerHTML = numeroSort;
// 1,11,17,22,54

ulAutos.innerHTML = numeroSortReves;
// 54,22,17,11,1
