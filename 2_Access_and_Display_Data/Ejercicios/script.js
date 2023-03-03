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
