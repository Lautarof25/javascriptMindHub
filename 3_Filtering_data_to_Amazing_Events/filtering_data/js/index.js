// Importo los datos de Amazing events js
import data from '../js/amazingEvents.js';

// Obtenemos cards de main
const cards = document.querySelector("main .cards");
// Obtenemos la fecha
const fecha = data.fechaActual;
// Obtenemos los eventos
const eventos = data.eventos;

printEvents()

// Creamos un evento del formulario
var form = document.querySelector("form");
// Cada vez que ocurra un evento change, se autoejecuta 
form.addEventListener("change", () => { formData() })
form.addEventListener("click", () => { formData() })

function formData() {
    // Se ejecutará nuestra función para imprimir eventos
    printEvents()
}

// Imprimo las tarjetas - Lo pongo dentro de una función
function printEvents() {
    // Obtengo el checkbox de all
    let all_checked = document.querySelector("#all").checked;
    if (all_checked){
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
    }else {
        cards.innerHTML = `

        `
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
