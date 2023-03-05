let paises = ["Argentina","Brasil","Peru","Chile","Uruguay","Paraguay","Colombia","Bolivia","Venezuela","Ecuador"];

var ulPaises = document.querySelector("ul");
var paisesHTML = "";

// Map
paises.map(pais =>
    paisesHTML += 
    `
        <li>${pais}</li>
    `
) 

// Foreach
paises.forEach(pais =>
    paisesHTML += 
    `
        <li>${pais}</li>
    `
) 

// Filter
let paisesFilter = paises.filter(pais => pais === "Argentina")
    paisesHTML += 
    `<li>${paisesFilter}</li>`

// Reduce
let paisesReduce = paises.reduce((valorAnterior,valorActual) =>{
    return `${valorAnterior} ${valorActual},`
},"Los paises son: ")

// Find
let paisesFind = paises.find(pais => 
    pais == "Argentina"
)

// FindIndex
let paisesFindIndex = paises.findIndex(pais => 
    pais == "Brasil"
)

// Some
let paisesSome = paises.some(pais => 
    pais == "Bolivia"
)

// Sort
let paisSort = paises.sort((a,b) => {
    if(a<b){return -1}
    if(a>b){return 1}
    return 0
})

// Sort invertido


// Traigo todos los botones
const mapButton = document.querySelector("#map");
const foreachButton = document.querySelector("#foreach");
const filterButton = document.querySelector("#filter");
const reduceButton = document.querySelector("#reduce");
const findButton = document.querySelector("#find");
const findIButton = document.querySelector("#findindex");
const someButton = document.querySelector("#some");
const sortButton = document.querySelector("#sort");
const sortInvertButton = document.querySelector("#sortinvert");

// Creamos la función para cada evento

mapButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisesHTML;
    }
)

foreachButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisesHTML;
    }
)

filterButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisesFilter;
    }
)

reduceButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisesReduce;
    }
)

findButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisesFind;
    }
)

findIButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisesFindIndex;
    }
)

someButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisesSome;
    }
)

sortButton.addEventListener("click",
    function(){
        ulPaises.innerHTML = paisSort;
    }
)

sortInvertButton.addEventListener("click",
    function(){
        let paisSortInvert = paises.sort((x,y) => {
            if(x>y){return -1}
            if(x<y){return 1}
            return 0
        })
        ulPaises.innerHTML = paisSortInvert;
    }
)

// FALTA REFACTORIZAR EL CÓDIGO