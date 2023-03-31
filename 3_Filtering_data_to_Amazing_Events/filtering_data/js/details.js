// Obtenemos cards de main
const card_detail = document.querySelector("main .card_detail");
// Obtenemos la fecha
const fecha = data.fechaActual;
// Obtenemos los eventos
const eventos = data.eventos;
// Obtengo el "id" de la url de detalle
var idEventos = location.search.split("?id=").filter(Number)-1

// Imprimo el detalle
function printDetails(id){
    // Propósito: Imprimir la tarjeta de detalle en base a su id
    card_detail.innerHTML += `
    <img class="img_detail" src="../Images/${getFinalUrlImage(id)}" alt="product">
    <div>
        <h1>${eventos[id].name}</h1>
        <span>Date: ${eventos[id].date}</span>
        <p>${eventos[id].description}</p>
        <ul>
            <li>Category: ${eventos[id].category}</li>
            <li>Place: ${eventos[id].place} C</li>
            <li>Capacity: ${eventos[id].capacity}</li>
            <!-- If upcoming -Estimate- else assistance -->
            <li>Estimate: ${eventos[id].assistance}</li>
            <li>Price: ${eventos[id].price}</li>
        </ul>
    </div>
`
}

printDetails(idEventos);


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
