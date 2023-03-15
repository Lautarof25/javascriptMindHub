/*
Resumen
Palabra reservada “let” o “const” para crear variables
Signo “=” para realizar una asignación de un valor a una variable
La función “prompt(‘Texto del cuadro de dialogo’)” se utiliza para recibir algún valor ingresado por pantalla, se debe asignar a alguna variable para manipular dicho valor
La función “alert(‘Contenido a mostrar en el cuadro de dialogo’)” se utiliza para mostrar algún contenido en el navegador como un mensaje.
La función “confirm(‘Texto del cuadro de dialogo’)” se utiliza para recibir una respuesta del usuario la cual devolverá true o false dependiendo de su elección.
El objeto “console” se utiliza para mostrar un mensaje en la consola del navegador, utilizando console.log(), .warn(), .table() o .error() colocando dentro de los paréntesis la sentencia a mostrar.
Operadores binarios, que necesitan 2 operandos: 
Operadores aritméticos: +, -, *, /, %
Operadores de comparación: ==, ===, !=, !==, <, <=, >, >=
Operadores lógicos: &&, ||
Operadores unarios, que solo requieren de 1 operando:
– cambia el signo de un numero
! invierte el valor de un booleano
typeof devuelve el tipo de dato del elemento
*/


/*
Ejercitación:
En cada ejercicio utilizar console.log() o alert() para visualizar el resultado en pantalla o en consola.
Crear una variable llamada miNombre y guardar en ella su primer nombre.
*/

const miNombre = "Lautaro";

/*

Crear una variable llamada miApellido y guardar en ella su apellido.

*/

const miApellido = "Fernández";

/*
Crear una variable llamada miEdad y guardar en ella su edad.

*/

const miEdad = 33;

/*
Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.

*/

const miMascota = "Negra";

/*
Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.

*/

const edadMascota = 11;

/*
Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.

Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.

*/

    const nombreCompleto = miNombre +" " + miApellido;

/*
Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.

*/

    const textoPresentacion = "Mi nombre completo es "+nombreCompleto+ " tengo "+ miEdad +" años "+ " y mi mascota "+miMascota+ " tiene "+edadMascota+ " años";

/*
Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
*/

    const sumaEdades = miEdad + edadMascota;
    const restaEdades = miEdad - edadMascota;
    const productoEdades = miEdad * edadMascota;
    const divisionEdades = miEdad / edadMascota;

/*

Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.
*/

    // let miNombre2 = prompt("Ingrese su nombre: ")
    // let miApellido2 = prompt("Ingrese su apellido: ")
    // let miEdad2 = Number(prompt("Ingrese su edad: "))
    // let miMascota2 = prompt("Ingrese su mascota: ")
    // let edadMascota2 = Number(prompt("Ingrese la edad de su mascota: "))

    // const sumaEdades2 = miEdad2 + edadMascota2;
    // const restaEdades2 = miEdad2 - edadMascota2;
    // const productoEdades2 = miEdad2 * edadMascota2;
    // const divisionEdades2 = miEdad2 / edadMascota2;

/*

Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
*/

    const alumno = {
        nombre: "Lautaro",
        apellido: "Fernández",
        edad: 33,
        curso: "Matematica",
        anio: 3
    }

    console.table(alumno.nombre)
    console.table(alumno.apellido)
    console.table(alumno.edad)
    console.table(alumno.curso)
    console.table(alumno.anio)

/*

Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
*/

const mascota = {
    tipo: "perro",
    nombre: "Negra",
    raza: "mestizo",
    edad: 11,
    color: "negro"
}

console.table(mascota.tipo)
console.table(mascota.nombre)
console.table(mascota.raza)
console.table(mascota.edad)
console.table(mascota.color)

/*
Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

*/

    const frutas = ["Banana","Naranja","Pera","Manzana","Uvas"]

    console.log(frutas)

    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);
    console.log(frutas[3]);
    console.log(frutas[4]);

/*


Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
*/

    const numeros = [25,90,2,1990,14]

    console.log(numeros)

    console.log(numeros[0]);
    console.log(numeros[1]);
    console.log(numeros[2]);
    console.log(numeros[3]);
    console.log(numeros[4]);

/*

Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.

*/

const familia = [
    lautaro = {
        edad: 33
    },
    ivan = {
        edad: 31
    },
    romina = {
        edad: 41
    },
    felipe = {
        edad: 1
    },
    jorge = {
        edad: 71
    }
]

console.log(familia);

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

/*
Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.

*/


const textoAleatorio = frutas[2]+ numeros[3] + familia[4].edad;

console.log(textoAleatorio);

/*
Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
Mi edad es igual a la de mi compañero: false
Mi edad es mayor a la de mi compañero: true
Mi edad es menor a la de mi compañero: false

*/

// const edadPrompt = prompt("Ingrese su edad ");
// const edadCompanero = prompt("Ingrese la edad de su compañero ");

// const edadesIguales = edadPrompt == edadCompanero;
// const soyMayor = edadPrompt > edadCompanero;
// const soyMenor = edadPrompt < edadCompanero;

// console.log("Mi edad es igual a la de mi compañero: "+edadesIguales);
// console.log("Mi edad es mayor a la de mi compañero: "+soyMayor);
// console.log("Mi edad es menor a la de mi compañero: "+soyMenor);

/*

Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.

*/

// const soyMayorDeEdad = edadPrompt >= 18;

// console.log("Soy mayor de edad: "+soyMayorDeEdad)

/*
Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.

*/

// const edadPersona = prompt("Ingrese la edad de la persona")
// const estaturaPersona = prompt("Ingrese la estatura de la persona en cm")

// const puedeSubir = edadPersona > 6 && estaturaPersona > 120;

// console.log("Puede subir a la atracción "+puedeSubir)


/*

Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. 
En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.

*/

const pasePersona = prompt("Ingrese el pase : VIP - NORMAL - LIMITADO").toUpperCase();

const saldoDisposible = Number(prompt("Ingrese el saldo"))

const puedePasar = pasePersona == "VIP" && saldoDisposible > 1000;

console.log("La persona puede pasar: "+ puedePasar)