/*
Resumen
Palabra reservada “if” para crear una sentencia de decisión.
Abrir paréntesis (expresión a evaluar) donde ira la sentencia a evaluar la cual dará siempre tendrá como valor verdadero (true) o falso (false).
Abrir llaves {… bloque de código…} para escribir la o las acciones a realizar en caso de que la expresión a evaluar halla sido verdadero (true).
Luego de la llave de cierre de la expresión “if” se puede utilizar “else” por si se quiere realizar alguna acción o acciones cuando la expresión evaluada dentro del “if” halla sido falsa (false).
En caso de usar “else” se debe abrir nuevamente llaves {…bloque de código…} para realizar la o las acciones en el mismo.
También se puede escribir “else if {…bloque de código…}” para realizar otra pregunta en caso de haber sido falsa (false) el valor del “if” inicial y se puede seguir agregando tantos “else {}” o “else if{}” como se requieran al finalizar una sentencia “if” o “else if”.
Palabra reservada “switch” para crear una sentencia de decisión múltiple.
Abrir paréntesis (variable de control) para colocar la variable que se va a evaluar el valor que contiene.
Abrir llaves para escribir el bloque de código del “switch(variable de control){…bloque de código…}”
Dentro de las llaves se definen los casos literales a evaluar: ”case ‘valor’:{}”.
Dentro de cada caso se debe usar la palabra reservada “break” para finalizar ese caso de uso.
Al final de los casos declarar un caso “default:{}” para cualquier caso no contemplado.
Dato extra, pueden utilizar la función “confirm(‘texto de pregunta al usuario’)” para poder preguntar algo por pantalla y según sea la respuesta escogida por el usuario la función devuelve verdadero (true) o falso (false) según corresponda.
*/

/*
Ejercitación:
Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

*/
    const num1 = 15;
    const num2 = 18;

    console.log(num1 > num2);
/*
    Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
*/
   
   console.log(num1 == num2);
/*
Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.
*/
   if(num1 > num2){
        console.log("El numero "+num1+" es más grande")
    }else if(num2 > num1){
        console.log("El numero "+num2+" es más grande")
    }else {
        console.log("Los numeros son iguales")
    }
/*
Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

*/
    const num3 = 25;

    if (num1 > num2 && num1 > num3){
        console.log("El numero "+num1+" es más chico")
    }else if(num2 > num1 && num2 > num3){
        console.log("El numero "+num2+" es más chico")
    }else if(num3 > num1 && num3 > num2){
        console.log("El numero "+num3+" es más chico")
    }
/*
Realizar un programa que dado 2 objetos representando personas con las propiedades 
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.
*/
let persona = {
    nombre: "nombre",
    edad: 99,
    altura: 1.55
}

const persona1 = new Object(persona)

persona1.nombre = "Lautaro";
persona1.edad = 33;
persona1.estatura = 169;

const persona2 = new Object(persona)

persona2.nombre = "Felipe";
persona2.edad = 1;
persona2.estatura = 72;

if(persona1.estatura >  persona2.estatura){
    console.log("La persona más alta es: "+persona1.nombre )
}else if (persona1.estatura <  persona2.estatura){
    console.log("La persona más alta es: "+persona2.nombre )
}

if(persona1.edad > 18 && persona2.edad > 18){
    console.log("Los dos son mayores de edad" )
}else if (persona1.edad > 18){
    console.log("Es mayor de edad: "+persona1.nombre )
}else if(persona2.edad > 18){
    console.log("Es mayor de edad: "+persona2.nombre )
}else {
    console.log("Ninguno es mayor de edad")
}


/*

Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

*/

    const persona3 = new Object(persona)

    persona3.nombre = prompt("Ingrese su nombre");
    persona3.edad = prompt("Ingrese su edad");
    persona3.altura = prompt("Ingrese su altura");
    persona3.vision = Number(prompt("Ingrese su vision"));


    if (persona3.edad >= 18 && persona3.vision >= 8){
        console.log("Estás capacitado para conducir")
    }else {
        console.log("No Estás capacitado para conducir")
    }

/*

Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.
*/
    
    const nombrePersona = prompt("Ingresar nombre ");
    const pase = prompt("Ingresar 1 - Vip | 2 - Normal");
    const entrada = prompt("Tiene entrada: 1 - Si | 2 - No ");
    let comprar;
    let saldo = 1500;

    if(nombrePersona == "Lautaro" || pase == "1"){
        console.log("Bienvenido!")
    }else if (entrada == "1"){
        console.log("Bienvenido!")
    }else {
        comprar = prompt("Desea comprar entrada? 1 - Si | 2 - No")
        if(comprar == "1"){
            if(saldo >= 1000){
                console.log("Entrada vendida correctamente")
                console.log("Bienvenido!")
            }else {
                console.log("Venta rechazada -  Posee menos de 1000")
            }
        }else {
            console.log("Gracias por utilizar el programa")
        }
    }

/*
Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
*/

const numeroIncognita = 9;

let numeroIngresado = prompt("Ingrese un numero del 1 al 10");

const intentos = 3;

if(numeroIngresado > numeroIncognita && intentos > 0){
    console.log("El numero ingresado es mayor, vuelva a intentarlo")
    intentos--;
    numeroIngresado = prompt("Ingrese un numero del 1 al 10");    
}else if(numeroIngresado < numeroIncognita && intentos > 0){
    console.log("El numero ingresado es menor, vuelva a intentarlo")
    intentos--;
    numeroIngresado = prompt("Ingrese un numero del 1 al 10");
}else if(numeroIngresado == numeroIncognita){
    console.log("Ganaste, haz adivinado el numero")
}


/*
Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
*/

const edadOtra = prompt("Ingresa tu edad")

if(edadOtra >= 0 && edadOtra <= 12){
    console.log("Eres un infante")
}else if(edadOtra > 12 && edadOtra <= 18){
    console.log("Eres un adoleescente")
}else if(edadOtra > 18 && edadOtra <= 45){
    console.log("Eres un mayor joven")
}else if(edadOtra > 45 && edadOtra <= 100){
    console.log("Eres un anciano")
}else if(edadOtra > 100){
    console.log("En realidad tienes esa edad")
}


/*
Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
*/

const jugador1 = prompt("Ingrese PIEDRA PAPEL o TIJERA").toUpperCase();
const jugador2 = prompt("Ingrese PIEDRA PAPEL o TIJERA").toUpperCase();

if(jugador1 == "PIEDRA" || jugador1 == "PAPEL" || jugador1 == "TIJERA" && 
jugador2 == "PIEDRA" || jugador2 == "PAPEL" || jugador2 == "TIJERA"
){
    if(jugador1 == "TIJERA" && jugador2 == "PAPEL"){
        console.log(jugador1+" ha ganado");
    }
    else if (jugador1 == "PAPEL" && jugador2 == "PIEDRA"){
        console.log(jugador1+" ha ganado");
    }
    else if (jugador1 == "PIEDRA" && jugador2 == "TIJERA"){
        console.log(jugador1+" ha ganado");
    }
    else if (jugador2 == "TIJERA" && jugador1 == "PAPEL"){
        console.log(jugador2+" ha ganado");
    }
    else if (jugador2 == "PIEDRA" && jugador1 == "TIJERA"){
        console.log(jugador2+" ha ganado");
    }
    else if (jugador2 == "PAPEL" && jugador1 == "PIEDRA"){
        console.log(jugador2+" ha ganado");
    }else {
        console.log("han empatado");
    }
}else {
    console.log("Has hecho trampa")
}


/*
Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
*/

const color = prompt("Ingrese un color")

let normalizarColor = color.charAt(0).toUpperCase() + color.slice(1);


switch (normalizarColor) {
    case "Blanco":
    case "Negro":
        console.log("Falta de color")
        break;
    case "Verde":    
        console.log("El color de la naturaleza")
        break;
    case "Azul":    
        console.log("El color del agua")
        break;
    case "Amarillo":    
        console.log("El color del sol")
        break;
    case "Rojo":    
        console.log("El color del fuego")
        break;
    case "Marrón":    
        console.log("El color de la tierra")
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado")
}

/*
Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
*/

const valor1 = Number(prompt("Ingrese un numero"));
const operacion = prompt("Ingrese la operación: + - * / ");
const valor2 = Number(prompt("Ingrese otro numero"));
let total = 0;

switch (operacion) {
    case "+":
        total = valor1 + valor2
        console.log("El total es : "+total)
        break;
    case "-":
        total = valor1 - valor2
        console.log("El total es : "+total)
        break;
    case "*":
        total = valor1 * valor2
        console.log("El total es : "+total)
        break;
    case "/":
        if(valor2 != 0){
            total = valor1 / valor2
            console.log("El total es : "+total)
        }else {
            console.log("Error")
        }
        break;
    default:
}


/*
Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y 
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
*/

const nombreDato =  prompt("Ingrese su dni")
const apellidoDato = prompt("Ingrese su dni")
const domicilioDato = prompt("Ingrese su dni")
let respuesta;

console.log(nombreDato,apellidoDato,domicilioDato);

respuesta = prompt("Los datos son correcots? S o N").toUpperCase()

if(respuesta == "S"){
    const dni = {
        nombre: nombreDato,
        apellido: apellidoDato,
        domicilio: domicilioDato
    }
    console.table(nombre,appellido,domicilio)
}else {
    console.log("Vuelva a intentarlo en 1 mes")
}


/*

*/