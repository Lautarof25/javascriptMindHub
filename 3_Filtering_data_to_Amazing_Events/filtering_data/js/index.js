// Variables 
const cards = document.querySelector("main .cards");
const card_items = document.getElementsByClassName("card");
const fechaBase = data.fechaActual;
const eventos = data.eventos;
const form = document.querySelector("#form");
const all_checkbox = document.querySelector("#all");
const first_time = ["all"];
const inputSearch = document.querySelector("input[type=search]");
const boton = document.querySelector("button[type=button]")
let dataInput;
let arrayIds = [];
// Imprimo todas las tarjetas la primer vez que carga la página
printCards(first_time);
// Separa los eventos pasados y futuros
let eventosPasados = [];
let eventosFuturos = [];
// Recorro los eventos
eventos.forEach(evento => {
    evento.date > fechaBase
        ? eventosFuturos.push(evento)
        : eventosPasados.push(evento);
})

// ----------------- EVENTO CHANGE PARA CHECKBOXES -------------------- //
// Escuchamos el evento change en div con id form con la función formData
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
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            arrayChecked.push(checkbox.id)
        }
    })
    // Si "all" está tildado y se tilda otro
    if (all_checkbox.checked && arrayChecked.length > 1) {
        // Se desactiva "all"
        all_checkbox.checked = false;
        // Se quita "all" del array
        arrayChecked.shift();
    }
    printCards(arrayChecked)
    // ----------------- EVENTO CHANGE PARA SEARCH -------------------- //
    // guardamos el texto del input search
    /* PROBLEMA REPITIENDO TARJETAS ANTERIORES CON EL FILTRO DE TODAS*/
    /* El patrón es: filtro correcto, pero toma las anteriores según su id
        Si traigo id correspondiente a 3, trae también tarjetas con id 1,2
    */
    dataInput = inputSearch.value.toLowerCase();
    // Si el input search no está vacio
    if (dataInput != "") {
        // Reinicio el Array de ids
        arrayIds = []
        // Recorro las tarjetas en busca del id
        searchIdByNameAndDescription(card_items)
        // Imprimo las tarjetas en base a su texto
        let newCardsByID = saveCardsById(card_items);
        cards.innerHTML = ""
        if (arrayIds.length != 0) {
            cards.innerHTML = newCardsByID
        } else {
            cards.innerHTML = "No se encontró ningún resultado"
        }
    }

}

// Función para Buscar el ID en card_items en las tarjetas impresas en el HTML
function searchIdByNameAndDescription(card_items) {
    // Propósito: Buscar el id de la tarjeta impresa en el HTML
    // Parámetros: card_items - String - El documento html de las tarjetas
    // Recorro las tarjetas en busca del id
    for (var i = 0; i < card_items.length; i++) {
        // Creo variables temporales para la ruta de name, description,id y category
        let nameEventLower = (card_items[i].childNodes[3].childNodes[0].nodeValue).toLowerCase();
        let descriptionEventLower = (card_items[i].childNodes[5].childNodes[0].nodeValue).toLowerCase();
        let idEvent = card_items[i].childNodes[7].childNodes[3].href.slice(-1);
        // Si el name o description tiene el texto guardado
        if (nameEventLower.includes(dataInput) || descriptionEventLower.includes(dataInput)) {
            // Guardo el id en un arrayIds
            arrayIds.push(idEvent)
        }
    }
}

// Función para imprimir las cards en base a card_items (las tarjetas ya impresas en el HTML)
function saveCardsById(card_items) {
    // Propósito: Imprime las tarjetas de acuerdo al id
    // Parámetros: card_items - String - El HTML de las tarjetas impresas
    // Tipo: String
    // Crear una variable para alojar la impresión, así podes resetear el HTML sin que se borre lo impreso 
    let htmlNewCards = "";
    if (arrayIds.length != 0) {
        for (var i = 0; i < card_items.length; i++) {
            // Creo una variable por cada nodo
            let imgNode = card_items[i].childNodes[1].childNodes[1].src
            let titleNode = card_items[i].childNodes[3].childNodes[0].nodeValue
            let descriptionNode = card_items[i].childNodes[5].childNodes[0].nodeValue
            let priceNode = card_items[i].childNodes[7].childNodes[1].innerHTML
            // Falta ID y categoria
            // Falta reseatear el HTML y que encuentre más alternativas
            if (arrayIds.includes(card_items[i].childNodes[7].childNodes[3].href.slice(-1))) {
                htmlNewCards += `
             <div class="card">
                 <div class="img">
                     <img src="${(imgNode)}" alt="service">
                 </div>
                 <h2 class="name">${titleNode}</h2>
                 <p class="description">${descriptionNode}
                 </p>
                 <div>
                     <p>${priceNode}</p>
                     <a href="./pages/details.html?id=${cards.id}">see more...</a>
                 </div>
             </div>
             `
            }
        }
        return htmlNewCards
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
        eventos.forEach(evento => {
            // creo una variable para actualizar el index de las imagenes
            let index = evento.id - 1;
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
                      <a href="./pages/details.html?id=${evento.id}">see more...</a>
                  </div>

              </div>
              `
        })
    }// Si no hay ninguna tarjeta, que se imprima una leyenda al respecto
    else if (events.length == 0) {
        cards.innerHTML = `<div> No se encontró ningún resultado </div>`;
    }// De otra forma, imprime las tarjetas(o no) que sean seleccionadas en el checkbox
    else {
        eventos.forEach(evento => {
            // creo una variable para actualizar el index de las imagenes
            let index = evento.id - 1;
            // Si el evento actual está en el array de eventos
            if (events.includes(evento.category)) {
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
                      <a href="./pages/details.html?id=${evento.id}">see more...</a>
                  </div>
              </div>
              `
            }
        })
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

// Revertir la parte final de url de la imagen
function reverseUrlImagen(url) {
    // Reverse string
    let urlFinalReverse = "";
    for (let k = url.length - 1; k >= 0; k--) {
        urlFinalReverse += url[k]
    }
    return urlFinalReverse;
}