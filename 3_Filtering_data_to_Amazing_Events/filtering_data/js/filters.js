// Importo los datos de Amazing events js
import data from '../js/amazingEvents.js';

let dataFromForm;
// Obtengo el input search
var input = document.querySelector("input[type=search]")

input.addEventListener("keyup", (evento) => {
    evento.preventDefault()
    dataFromForm = {
        inputSearch: evento.target.value
    }
    console.log(dataFromForm)
});

var form = document.querySelector("form");

form.addEventListener("change", (evento) => { formData(evento) })

function formData(evento) {
    evento.preventDefault()
    // Obtengo el checkbox
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    // Creo el array para guardar los chequedado
    let checked = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked.push(checkboxes[i].value)
        }
    }
    // Obtengo el checkbox de all
    let all_checked = document.querySelector("#all");
    if (checked.includes("all") && checked.length > 1 ) {
        all_checked.setValue(false);
    }
    if(checked.includes("all")){
        for (let i = 1; i < checked.length; i++) {
            checked[i] = false;
        }
    }
}