var paises = ["Argentina","Francia","Brasil","Uruguay","Chile","Paraguay","Peru","Venezuela","Bolivia","Colombia"]

// Busco el elemento body
var body = document.querySelector("body");

function agregandoHTML(array){
    for (let i = 0; i < paises.length; i++) {
        body.innerHTML += `
            <div class="card">
                <p class="pais${i}">${paises[i]}</p>
            </div>
        `
    }
    var todos_paises = document.querySelector(".pais0");
    console.log(todos_paises);
    todos_paises.className = "losQueNoFueronCampeones";
    var francia = document.querySelector(".pais1");
    francia.style.color = "red";
}
// Llamando a la fución
agregandoHTML(paises);