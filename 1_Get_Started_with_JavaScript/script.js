
// Ejercicio 1 - Variables

const nombre = "Lautaro"; // String
const apellido = "Fernández"; // String
let edad = 32; // number
const dni = "35111111"; // String
let peso = "65"; // String
let estado_civil = "En pareja"; // String
let mascotas = true; // booleano
let tipo_mascota = "perro"; // String
const celular = {
    marca: "Lg",
    modelo: "lg-k8",
    año: 2018,
    numero: "1160382014",
    impermeable: true,
} // Object
let numeros_quiniela = [25,14,90,7]; // Array

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(dni);
console.log(peso);
console.log(estado_civil);
console.log(mascotas);
console.log(tipo_mascota);
console.log(celular);
console.log(numeros_quiniela);

// Ejercicio 2 - Condicionales

if (estado_civil == "soltero"){
    console.log("Soy soltero")
} else if (estado_civil == "casado"){
    console.log("Soy casado")
}else if (estado_civil == "en pareja"){
    console.log("Estoy en pareja")
}

switch(mascotas){
    case 0:
        console.log("No tienes mascotas");
        break;
    case 1:
        if (tipo_mascota == ""){
            console.log("Tengo una mascota");       
        }else if (tipo_mascota == "gato"){
        console.log("Tengo un gato");       
        }else if (tipo_mascota == "perro"){
        console.log("Tengo un perro");       
    }
        break;
    case 2:
        if (tipo_mascota == ""){
            console.log("Tengo dos mascotas");       
        }else if (tipo_mascota == "gato"){
        console.log("Tengo dos gatos");       
        }else if (tipo_mascota == "perro"){
        console.log("Tengo dos perros");       
    }
    default:
        console.log("Error");       
}