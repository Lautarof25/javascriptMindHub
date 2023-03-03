// Objetos y arrays

var celular = {
    marca: "TCL",
    modelo: "20B",
    color: "Negro",
    anio: 2021,
    numero: "1160382014",
    camara: "Doble",
    tamanio: 6.5,
    doble_chip: false,
    ntf: false,
    impermeable: true,
}

console.log(celular);

celular.color = "Blanco";
celular.numero = "1122334455";
celular.horas_bateria = 24;
console.log(celular.horas_bateria);

delete celular.numero;

console.log(celular);

var arrayLenguajes = ["python", "java", "javascript", "html", "css", "php", "c", "c++", "go", "typescript"]
var otroArray = ["1"]

console.log("lenght:",arrayLenguajes.length);

arrayLenguajes.pop();
arrayLenguajes.push("nuevoElemento");
arrayLenguajes.shift();
arrayLenguajes.unshift("nuevoElemento");
arrayLenguajes.indexOf("java");
arrayLenguajes.includes("rust");
arrayLenguajes.toString();
arrayLenguajes.join("-");
arrayLenguajes.concat(otroArray);

console.log(arrayLenguajes)

// Ejercicio Loops 


for (let i = 0; i < arrayLenguajes.length; i++) {
    console.log(arrayLenguajes[i])
}

var i = 0;

while(i < arrayLenguajes.length){
    console.log(arrayLenguajes[i]);
    console.log("Soy el while")
    i++;
}


for (props in celular){
    console.log(props +": "+celular[props] )
}

// Ejercicio Funciones 

const nombre = "Lautaro";
const apellido = "Fernández";
let edad = 33;
const dni = 35174222;
let domicilio = "Hurlingham";

function imprimir_datos(){
    console.log("Hola mi nombre es",nombre,apellido,"tengo",edad,"mi dni es",dni,"y vivo en",domicilio)
}
imprimir_datos();

function calcularIva(precio){
    var iva = 21;
    var total = precio +(iva * precio / 100);
    console.log("El producto con precio",precio,"cuesta en total con iva",total)
}

calcularIva(100);

var arrayDeNumeros = [1,2,3,4,5];

function sumarArrays(array){
    var totalArray = 0;
    for (let i = 0; i <= array.length; i++) {
        totalArray = i + totalArray;
    }
    console.log("El total de los numeros sumamos en el array es",totalArray)
}

sumarArrays(arrayDeNumeros);

function alertaEdadConducir(unaEdad){
    if(unaEdad >= 18){
        alert("ya puedes conducir")
    }else if (unaEdad < 18){
        alert("Aun no puedes conducir")
    }
}

// alertaEdadConducir(16)

// Ejercicio DOM 

document.getElementById("nombre").innerHTML = nombre;
document.getElementById("apellido").innerHTML = apellido;
document.getElementById("edad").innerHTML = edad;

document.querySelector("#nombre").innerHTML = "otro nombre";
document.querySelector("#apellido").innerHTML = "otro apellido";
document.querySelector("#edad").innerHTML = "otra edad";

var claseVar = document.getElementsByClassName("nombre");

var tagVar = document.getElementsByTagName("h3");

console.log(claseVar);


