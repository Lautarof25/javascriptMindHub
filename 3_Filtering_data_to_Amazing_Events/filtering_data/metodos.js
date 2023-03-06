// ------------------ MÉTODO TO STRING ------------------
// Algunos son: 
/*
.toUpperCase()
.toLowerCase()
.trim()
.charAt()
.slice()
.substring()
.replace()
.indexOf()
.split()
.startsWidth()
*/

var cadena = "Esto es una cadena";
console.log(cadena.toUpperCase()); // ESTO ES UNA CADENA
console.log(cadena.toLowerCase()); // esto es una cadena
var cadena = "           Esto es una cadena           ";
console.log(cadena.trim()); // Esto es una cadena
var cadena = "Esto es una cadena";
console.log(cadena.charAt(3)); // o
console.log(cadena.slice(0, 7)); // Esto es
console.log(cadena.substring(1, 6)); // sto e
console.log(cadena.replace("cadena", "string")); // Esto es un string
console.log(cadena.split(" ")); // ['Esto', 'es', 'una', 'cadena']
console.log(cadena.startsWith("Esto")); // true

// Combinación de métodos

var cadena = "      esto es Una cAdenA         ";

function ordernarCadena() {
    ordernada = cadena.trim().toLowerCase();
    separoPrimeraLetra = ordernada.charAt(0).toUpperCase();
    restoDeLetras = ordernada.slice(1)
    return separoPrimeraLetra + restoDeLetras;
}

console.log(ordernarCadena()); // Esto es una cadena

// ------------------ MÉTODO NUMBERS ------------------
/*
.parseInt()
.parseFloat()
.Number()
.isNaN()
.toFixed()
.toPrecision()
*/

var numero = "12.345";
console.log(parseInt(numero)); // 12
console.log(parseFloat(numero)); // 12.345
console.log(Number(numero)); // 12.345
console.log(isNaN(33)); // false
console.log(isNaN("ab")); // true
console.log(12.5564545.toFixed(2)); // 12.56

// Object Math
/*
.min()
.max()
.random()
.cell()
.floor()
.round()
*/
console.log(Math.min(2, 4, 6, 1)); // 1
console.log(Math.max(2, 4, 6, 1)); // 6
console.log(Math.random()); // numero random en decimales
console.log(Math.ceil(12.345)); // 13
console.log(Math.floor(12.345)); // 12
console.log(Math.round(12.345)); // 12
console.log(Math.round(12.545)); // 13


// ------------------ MÉTODO DATE ------------------
// cantidad de milisegundos transcurridos entre la fecha que definas y 1 de enero de 1970

// Date() // Llamada de función, retorna una cadena que representa la fecha y hora actual
// new Date() // Llamada de constructor, retorna un nuevo objeto Date

/*
.now()
.parse()
.UTC()
.getDate()
.getDay()
.getFullYear()
.getMilliseconds()
.getMinutes()
.getSeconds()
.getTime()
*/

var day1 = new Date("08/25/2020");
var day2 = new Date("12/25/2021");

var difference = day2.getTime() - day1.getTime();

console.log(difference); // 42076800000

// Sin métodos

var day = 1000 * 60 * 60 * 24;
var month = day * 30;
var year = month * 12;

var differenceDays = (day2.getTime() - day1.getTime()) / day; // 487
var differenceMonths = (day2.getTime() - day1.getTime()) / month; // 16.233333333334
var differenceYears = (day2.getTime() - day1.getTime()) / year; // 1.3527777777779
// Esto ultimo es incorrecto

// Con métodos

var year = day2.getFullYear() - day1.getFullYear();
var month = day2.getMonth() - day1.getMonth() + (12 * year);

console.log("Meses: " + month, "Años: " + year); // Meses: 16 Años: 1
// Esto es correcto!!!