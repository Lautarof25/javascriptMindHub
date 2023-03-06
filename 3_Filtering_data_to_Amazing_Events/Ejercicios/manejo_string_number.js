var cadena = "       eStoy en El moduLo tres DEl curso de JavAScrip    ";

// La frase se tiene que mostrar como "Estoy en el módulo 3 del curso de JavaScript."
// Utiliza los distintos métodos strings

function ordenarCadena(){
    ordenada = cadena.trim().toLowerCase();
    capitalizadoPrimeraLetra = ordenada.charAt(0).toUpperCase();
    ponerTildeAModulo = ordenada.replace("modulo","módulo");
    textoANumero = ponerTildeAModulo.replace("tres","3");
    correccionJS = textoANumero.replace("javascrip","JavaScript.");
    restoLetras = correccionJS.slice(1);
    return capitalizadoPrimeraLetra + restoLetras;
}

console.log(ordenarCadena());

var numeros = "3,8,9,8.65,3.6965378,9";

var separarNumeros = numeros.split(",");

separarNumeros.forEach();

var maximo = Math.max(separarNumeros);
var minimo = Math.min(separarNumeros);