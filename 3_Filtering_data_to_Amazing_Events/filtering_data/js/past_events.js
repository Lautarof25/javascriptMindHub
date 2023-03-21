// Obtenemos cards de main
const cards = document.querySelector("main .cards");
// Obtenemos la fecha
const fecha = data.fechaActual;
// Obtenemos los eventos
const eventos = data.eventos;

// Imprimo las tarjetas
for (let j = 0; j < eventos.length; j++) {
    if (fecha >= eventos[j].date){
        cards.innerHTML += `
            <div class="card">
                <div class="img">
                     <img src="../Images/${getFinalUrlImage(j)}" alt="service">
                </div>
                <h2>${eventos[j].name}</h2>
                <p>${eventos[j].description}
                </p>
                <div>
                    <p>Price: ${eventos[j].price}</p>
                    <a href="../pages/details.html">see more...</a>
                </div>
            </div>
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
