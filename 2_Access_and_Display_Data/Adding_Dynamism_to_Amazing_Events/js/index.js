import data from '../js/amazingEvents.js';

// Obtenemos cards de main
const cards = document.querySelector("main .cards");
// Obtenemos la fecha
const fecha = data.fechaActual;
// Obtenemos los eventos
const eventos = data.eventos;

// Imprimo las tarjetas
for (let j = 0; j < eventos.length; j++) {
    cards.innerHTML += `
        <div class="card">
            <div class="img">
                <!-- <img src="./Images/${eventos[j].image}" alt="service"> -->
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

function getFinalUrlImagen(id) {
    let url = eventos[id].image;
    let urlFinal = "";
    for (let i = url.length - 1; i > 0; i--) {
        if (url[i] != "/") {
            urlFinal += url[i];
        } else {
            break
        }
    }
    return urlFinal;
}


function reverseUrlImagen(url) {
    // Reverse string
    let urlFinalReverse = "";
    for (let k = url.length - 1; k >= 0; k--) {
        urlFinalReverse += url[k]
    }
    return urlFinalReverse;
}


/*
img 
name
description
price
*/



/*
 <div class="cards">
    <div class="card">
        <div class="img">
            <img src="../Images/Feria_de_comidas7.jpg" alt="service">
        </div>
        <h2>Fiesta de las colectividades</h2>
        <p>Disfruta de tus platos favoritos, de los diferentes paises, en un evento unico para toda la familia
        </p>
        <div>
            <p>Price 5</p>
            <a href="../pages/details.html">see more...</a>
        </div>
    </div>
</div>
*/