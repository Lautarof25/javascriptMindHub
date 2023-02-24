const datos = {
    nombre: "Lautaro",
    apellido: "Fernández",
    edad: 32,
    mascotas: 1,
    tipo_mascota: "",
    estado_civil: "soltero",
}

console.log(datos.nombre);
console.log(datos.apellido);
console.log(datos.edad);
console.log(datos.mascotas);


if (datos.edad > 18){
    console.log("si, es mayor a 18")
} else if (datos.edad < 18){
    console.log("No, es menor a 18")
}

switch(datos.nombre) {
    case "Exequiel":
        console.log("Bienvenido exequiel")
        break;
    case "Lautaro":
        console.log("Bienvenido Lautaro")
        break;
        default:
        console.log("Bienvenido!")
}

if (datos.estado_civil == "soltero"){
    console.log("Eres soltero")
}else if(datos.estado_civil == "casado"){
    console.log("Eres casado")
}

switch(datos.mascotas){
    case 0:
        console.log("No tienes mascotas");
        break;
    case 1:
        if (datos.tipo_mascota == ""){
            console.log("Tengo una mascota");       
        }else if (datos.tipo_mascota == "gato"){
        console.log("Tengo un gato");       
        }else if (datos.tipo_mascota == "perro"){
        console.log("Tengo un perro");       
    }
        break;
    case 2:
        if (datos.tipo_mascota == ""){
            console.log("Tengo dos mascotas");       
        }else if (datos.tipo_mascota == "gato"){
        console.log("Tengo dos gatos");       
        }else if (datos.tipo_mascota == "perro"){
        console.log("Tengo dos perros");       
    }
    default:
        console.log("Error");       
}

// Checkpoint

const nombre = "Lautaro"; // String
const apellido = "Fernández"; // String
let edad = 32; // number
const dni = "35111111"; // String
let estatura = "1.65"; // String
let peso = "65"; // String
let estado_civil = "soltero"; // String
let mascotas = true; // booleano
let tipo_mascota = "perro"; // String
const celular = {
    marca: "Lg",
    modelo: "aaa22",
    año: 2018,
    numero: "1160382014",
    impermeable: true,
} // Object
let numeros_quiniela = [25,14,90,7]; // Array

