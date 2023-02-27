// Datos básicos:

// objeto datos basicos (nombre, apellido, edad, etc y debe tener un array hobbies)

// objeto vehiculo con minimo 3 propiedades

// objeto vivienda con minimo 8 propiedades

// unir 3 objetos en un array

var datos_persona = {
    nombre: "Lautaro",
    apellido: "Fernández",
    edad: 33,
    en_pareja: true,
    hijos: 0,
    pasatiempos: ["Ping pong","Programar","Andar en bicicleta"]
}

var vehiculo = {
    marca: "Fiat",
    modelo: "Palio",
    anio: 2015,
    color: "Gris",
    puertas: 3
}

var vivienda = {
    ubicacion: "Hurlingham",
    tipo: "Casa",
    cantidad_habitaciones: 5,
    anios_antiguedad: 50,
    metros_cuadrados: 80,
    con_patio: true,
    con_garaje: true,
    terraza_accesible: true,
}

var objetos_unidos = [datos_persona,vehiculo,vehiculo]

console.log(objetos_unidos)

var union_datos = [datos_persona.nombre+" tiene un auto marca "+vehiculo.marca+" y vive en su casa ubicada en "+vivienda.ubicacion+" y su hobbie favorito es "+datos_persona.pasatiempos[2]]

console.log(union_datos)