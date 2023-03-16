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
// Cada vez que ocurra un evento change, se autoejecuta 
form.addEventListener("change", () => { formData() })

function formData() {
    // Obtengo el checkbox
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    // Creo el array para guardar los chequedado
    let checked = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked.push(checkboxes[i].value)
        }
    }
    if (checked.length > 1 && all_checked.checked) {
        all_checked.checked = false;
    }
    printEvents(checked)
}

// Imprimo las tarjetas - Lo pongo dentro de una función
function printEvents(chk) {
    if (all_checked.checked) {
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
    } else {
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
