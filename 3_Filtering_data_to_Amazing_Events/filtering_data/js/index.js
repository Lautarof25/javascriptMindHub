// Obtenemos el contenedor cards de main
const cards = document.querySelector("main .cards");
// Obtenemos todas las tarjetas del contenedor cards
const card_items = document.getElementsByClassName("card");
// Obtenemos la fecha base
const fecha = data.fechaActual;
// Obtenemos los eventos
const eventos = data.eventos;
// Obtenemos el formulario que contiene los checkboxes y el input search
const form = document.querySelector("form");
// Obtenemos el primer checkbox "all"
const all_checkbox = document.querySelector("#all");
// Creo un array temporal para simular que "all" está chequeado
const first_time = ["all"];
// Obtenemos el input search
const inputSearch = document.querySelector("input[type=search]");
// Obtenemos el boton 
const boton = document.querySelector("button[type=button]")
// Creo una constante para guardar el evento
let dataInput;
// Imprimo todas las tarjetas la primer vez que carga la página
printCards(first_time);

// ----------------- EVENTO CHANGE PARA CHECKBOXES -------------------- //
// Escuchamos el evento change en form con la función formData
form.addEventListener("change", (evento) => { formData(evento) })

// Creamos la función formData para escuchar los eventos
function formData(evento) {
    // Propósito: Escuchar el **evento** actual e imprimir o no las tarjetas de eventos
    // Evitamos que la página se recargue
    evento.preventDefault();
    // Creamos un array vacio con los valores positivos de los checkboxes
    let arrayChecked = []
    // Obtenemos todos los valores de los checkboxes
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    // Creamos un forEach para agregar los eventos tildados al array vacio
    checkboxes.forEach(checkbox =>{
        if(checkbox.checked){
            arrayChecked.push(checkbox.id)
        }
    })
    // Si "all" está tildado y se tilda otro
    if (all_checkbox.checked && arrayChecked.length > 1){
        // Se desactiva "all"
        all_checkbox.checked = false;
        // Se quita "all" del array
        arrayChecked.shift();
    }
    console.log(arrayChecked)
    printCards(arrayChecked)
    // ----------------- EVENTO CHANGE PARA SEARCH -------------------- //
    // guardamos el texto del input search
    dataInput = inputSearch.value;
    // Convierto el texto todo a minúscula
    var lowerInput = dataInput.toLowerCase();
    // Creo un array de nuevos eventos con sus categorias
    var arrayNewChecked = [];
    // Si el input search no está vacio
    if (dataInput != ""){
        // Recorro las tarjetas
        for (var i = 0;i < card_items.length;i++){
            // Creo variables temporales para la ruta de name, description y category
            var nameEventLower = (card_items[i].childNodes[3].childNodes[0].nodeValue).toLowerCase();
            var descriptionEventLower = (card_items[i].childNodes[5].childNodes[0].nodeValue).toLowerCase();
            var categoryEvent = card_items[i].childNodes[8].nextSibling.className;
            // Si el name o description tiene el texto guardado
            if(nameEventLower.includes(lowerInput) || descriptionEventLower.includes(lowerInput)){
                arrayNewChecked.push(categoryEvent)
            }
        }
        // Problema! Trae otro evento que tiene la misma categoria, hay que hacer un condicional por nombre y otro description
        printCards(arrayNewChecked)
    }
}


function printCards(events) {
    // Propósito: Imprimir las tarjetas de eventos según los eventos **events** pasados
    // Parámetros: events - Array de eventos a imprimir
    // Precondiciones: Ninguna

    // Imprimo una tarjeta vacía para evitar que se repitan los eventos en cada actualización de evento
    cards.innerHTML = ``;
    // Si el el checkbox "all" está tildado, imprime todas las tarjetas
    if (events.includes("all")) {
        // creo una variable para actualizar el index de las imagenes
        var index = -1;
        eventos.forEach(evento =>{
              index++;
              // Imprimo la tarjeta 
              cards.innerHTML +=
              `
              <div class="card">
                  <div class="img">
                      <img src="./Images/${getFinalUrlImage(index)}" alt="service">
                  </div>
                  <h2 class="name">${evento.name}</h2>
                  <p class="description">${evento.description}
                  </p>
                  <div>
                      <p>Price: ${evento.price}</p>
                      <a href="./pages/details.html">see more...</a>
                  </div>
                  <p class="${evento.category}"></p>
              </div>
              `
        } )
    }// De otra forma, imprime las tarjetas(o no) que sean seleccionadas en el checkbox
    else {
        // creo una variable para actualizar el index de las imagenes
        var index = -1;
        eventos.forEach(evento => {
            index++;
            // Si el evento actual está en el array de eventos
            if(events.includes(evento.category)){
                // Imprimo la tarjeta 
                  cards.innerHTML +=
                  `
              <div class="card">
                  <div class="img">
                      <img src="./Images/${getFinalUrlImage(index)}" alt="${evento.name}">
                  </div>
                  <h2 class="name">${evento.name}</h2>
                  <p class="description">${evento.description}
                  </p>
                  <div>
                      <p>Price: ${evento.price}</p>
                      <a href="./pages/details.html">see more...</a>
                  </div>
                  <p class="${evento.category}"></p>
              </div>
              `
            }
        } )
    }
}

// Obtener La parte final de la propiedad image para la imagen
function getFinalUrlImage(id) {
    let url = eventos[id].image;
    let urlFinal = "";
    for (let i = url.length - 1; i > 0; i--) {
        if (url[i] != "/") {
            urlFinal += url[i];
        } else {
            break
        }
    }
    return reverseUrlImagen(urlFinal);
}

// Reverter la parte final de url de la imagen
function reverseUrlImagen(url) {
    // Reverse string
    let urlFinalReverse = "";
    for (let k = url.length - 1; k >= 0; k--) {
        urlFinalReverse += url[k]
    }
    return urlFinalReverse;
}
