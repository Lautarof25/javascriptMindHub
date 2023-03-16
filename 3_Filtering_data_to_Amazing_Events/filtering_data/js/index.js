// Importo los datos de Amazing events js
import data from '../js/amazingEvents.js';

// Obtenemos cards de main
const cards = document.querySelector("main .cards");
// Obtenemos la fecha
const fecha = data.fechaActual;
// Obtenemos los eventos
const eventos = data.eventos;
// Obtenemos el checkbox "all"
const all_checked = document.querySelector("#all");

// Creamos un evento del formulario
var form = document.querySelector("form");

// Imprimo una vez la tarjeta
for (let j = 0; j < eventos.length; j++) {
    cards.innerHTML += `
                 <div class="card">
                     <div class="img">
                          <img src="./Images/${getFinalUrlImage(j)}" alt="service">
                     </div>
                     <h2>${eventos[j].name}</h2>
                     <p>${eventos[j].description}
                     </p>
                     <div>
                         <p>Price: ${eventos[j].price}</p>
                         <a href="./pages/details.html">see more...</a>
                     </div>
                 </div>
             `
}

// ------------- Busqueda por checkboxes ---------------------


// Cada vez que ocurra un evento change, se autoejecuta 
form.addEventListener("click", () => { formData() })

function formData() {
    // Obtengo el checkbox
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    // Creo el array para guardar los chequedado
    let checkeds = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkeds.push(checkboxes[i].value)
        }
    }
    // Si "all" está tildado y tildo otra categoria
    if (all_checked.checked && checkeds.length >= 2) {
        // "all" se destilda
        all_checked.checked = false;
    }
    // Ejecuto la impresión de eventos en base a los elementos tildados
    printEvents(checkeds)
}

function unckeckAll(arrayChecks) {
    for (let i = 1; i < arrayChecks.length; i++) {
        arrayChecks[i].checked = false;
    }
}

// Imprimo las tarjetas - Lo pongo dentro de una función
function printEvents(chk) {
    // Reseteamos el HTML
    cards.innerHTML = `
                        `
    // Por cada elemento de los eventos
    for (let j = 0; j < eventos.length; j++) {
        // Si el array checked tiene el evento en cuestión, lo imprime
        if (chk.includes(eventos[j].category)) {
            cards.innerHTML += `
                     <div class="card">
                         <div class="img">
                              <img src="./Images/${getFinalUrlImage(j)}" alt="service">
                         </div>
                         <h2>${eventos[j].name}</h2>
                         <p>${eventos[j].description}
                         </p>
                         <div>
                             <p>Price: ${eventos[j].price}</p>
                             <a href="./pages/details.html">see more...</a>
                         </div>
                     </div>
                 `
        }
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

//  ------------- Busqueda por input search ------------------

let dataFromForm;
// Obtengo el input search
var input = document.querySelector("input[type=search]")

input.addEventListener("change", (evento) => {
    evento.preventDefault();
    dataFromForm = {
        inputSearch: evento.target.value
    }
    console.log(dataFromForm.inputSearch)
});