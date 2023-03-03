var paises = ["Argentina","Francia","Brasil","Uruguay","Chile","Paraguay","Peru","Venezuela","Bolivia","Colombia"]

// Busco el elemento body
var body = document.querySelector("body");

for (let i = 0; i < paises.length; i++) {
    // Creo el elemento div
    var div = document.createElement("div");
    // Agrego a   body el element div
    var element = body.appendChild(div);
    var div_creado = document.querySelectorAll("div");
    div_creado.className = "Hola"

    div_creado.innerHTML = `
        <p></p>
    `
}



