// Obtenemos cards de main
const cards = document.querySelector("main .cards");
// Obtenemos la fecha base
const fecha = data.fechaActual;
// Obtenemos los eventos
const eventos = data.eventos;
// Obtenemos el formulario que contiene los checkboxes y el input search
const form = document.querySelector("form");
// Obtenemos el primer checkbox "all"
const all_checkbox = document.querySelector("#all");

// Imprimo todos los eventos la primera vez que se entra a la página
// printCards(0) // Ver cómo solucionar esto

// ----------------- EVENTO CHANGE PARA CHECKBOXES -------------------- //
// Escuchamos el evento change en form con la función formData
form.addEventListener("change", (evento) => { formData(evento) })


// Creamos la función formData para escuchar los eventos
function formData(evento) {
    // Propósito: escuchar el evento actual e imprimir las tarjetas o no
    // Evitamos que la página se recargue
    evento.preventDefault();
    // Creamos un array vacio con los valores positivos de los checkboxes
    let arrayChecked = []
    // Obtenemos todos los valores de los checkboxes
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    // Creamos un for para agregar los eventos tildados al array vacio
    for (let i = 0; i < checkboxes.length; i++) {
        // Si el checkbox actual está tildado
        if (checkboxes[i].checked) {
            // Lo agregamos al array
            arrayChecked.push(checkboxes[i].id)
        }
    }
    printCards(arrayChecked)
}

function printCards(events) {
    // Propósito: Imprimir las tarjetas de eventos según los eventos **events** pasados
    // Parámetros: events - Array de eventos a imprimir
    // Precondiciones: Ninguna

    // Imprimo una tarjeta vacía para evitar que se repitan los eventos en cada actualización de evento
    cards.innerHTML = ``;
    for (let j = 0; j < eventos.length; j++) {
        // Obtengo la categoria del evento actual
        let category = data.eventos[j].category;
        // Si la categoria actual está en el array events
        if(events.includes(category)){
            cards.innerHTML +=
            `
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
