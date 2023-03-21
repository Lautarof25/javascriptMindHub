// Obtenemos el formulario
var form = document.querySelector("form");
// Escuchamos el evento submit, y hacemos que se autoejecute
form.addEventListener("submit",(evento)=>{formData(evento)})
// Asignamos una variable global 
let dataFromForm;

function formData(evento){
    // Acá prevenimos que se recargue la página
    evento.preventDefault()
    // Podemos imprimir su atributo target, que devuelve un array con c/u de las entradas de los datos
    // console.log(evento.target) 
    dataFromForm = {
        // Devolviendo valores del input de tipo text
        firstName: evento.target[0].value,
        lastName: evento.target[1].value,
        countries: evento.target[2].value,
        // Para devolver checkboxes - Se pueden usar también los eventos "click" y "change"
        languages: (()=> {
            // Lo guardaremos en un array
            let checked = []
            // Identificamos los checkboxes
            let checkboxes = evento.target.querySelectorAll("input[type=checkbox]")
            // Recorremos 
            for (var i = 0 ; i < checkboxes.length ; i++){
                if(checkboxes[i].checked){
                    // Por cada elemento checqueado, ingresará el valor
                    checked.push(checkboxes[i].value)
                }
            }
            return checked
        })(),// Función autoejecutable: (()=>{"Codigo a ejecutar"})()
        // Devolver el género con un método object
        gender: (()=> {
            let radio = evento.target.querySelectorAll("input[type=radio]")
            for (let i = 0; i < radio.length; i++) {
                if(radio[i].checked){
                    return radio[i].value
                }
            }
        })()// Función autoejecutable: (()=>{"Codigo a ejecutar"})()
    }
    // console.log(evento)
    console.log(dataFromForm)
}

// Ejemplos input Text - Con otros eventos
// Evento change (cuando se da enter o saca el foco del input en cuestión)
var input = document.getElementById("fname");
input.addEventListener("change",(evento)=>capturaInput(evento))

let dataInput;

function capturaInput(evento){
    dataInput = evento.target.value
    console.log(dataInput)
}

// Evento keyUp (Cuando el usuario suelta la tecla de ingreso de caracteres)

var input = document.getElementById("lname");
input.addEventListener("keyup",(evento)=>capturaInput(evento))

let dataInput2;

function capturaInput(evento){
    dataInput2 = evento.target.value
    console.log(dataInput2)
}

// Evento click o change en checkboxes -- REVISAR PORQUE DEVUELVE ARRAY VACIO

let checkboxes2 = document.querySelectorAll("input[type=checkbox]")
let chequeado = []
for (var i = 0; i < checkboxes2.length; i++){
    checkboxes2[i].addEventListener("click",(evento)=>{
        if (evento.target.chequeado){
            chequeado.push(evento.target.value)
        }
        console.log(chequeado)
    })
}

//  Select - selección simple(string) o multiple(array) - Evento change

var select = document.getElementById("countries");
select.addEventListener("change",(evento)=>capturaSelect(evento))

let selected;

function capturaSelect(evento){
    selected = evento.target.value
    console.log(selected)
}

//-- Para selección multiple

select.addEventListener("change",(evento)=>capturaSelectMultiple(evento))

let selectedMultiple;

function capturaSelectMultiple(evento){
    selectedMultiple = []
    let options = evento.target.options
    for (let i = 0; i < options.length; i++) {
        if(options[i].selectedMultiple){
            selectedMultiple.push(options[i].value)
        }
    }
    console.log(selectedMultiple)
}
