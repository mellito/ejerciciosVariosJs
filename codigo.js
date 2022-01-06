/*
Todo el código JavaScript se encuentre en un archivo externo llamado codigo.js y el script siga funcionando de la misma manera.
Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el primer script"
Añadir algunos comentarios que expliquen el funcionamiento del código
Añadir en la página XHTML un mensaje de aviso para los navegadores que no tengan activado el soporte de JavaScript

este codigo imprime en consola la informacion que le enviamos
*/
console.log("Hola Mundo!");
console.log("soy el primer script");

/*El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el funcionamiento del script sea el mismo.
El mensaje mostrado sea el de la siguiente imagen: */

let mensaje= 'hola mundo que facil es inculiir \'comillas simples\' y \"comillas dobles\"'
console.log(mensaje)

/* Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log(). */

let meses =["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
console.log(meses);

/*

A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

Determinar cual de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

*/

let valores = [true, 5, false, "hola", "adios", 2];

//1
let text1 = valores[3];
let text2 = valores[4];

(text1.length > text2.length) ? console.log( text1 +" es mayor que "+ text2) : console.log( text2 +" es mayor que "+ text1 ) ;

//2

let boolTrue= valores[0];
let boolFalse = valores[2];

(boolTrue & boolFalse ) ? console.log(boolFalse) : console.log(true);

//3 
let num1 = valores[1];
let num2 = valores[5];

console.log(num1+num2);
console.log(num1*num2);
console.log(num1-num2);
console.log(num1/num2);

/*
Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:

*/

var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
  console.log("numero2 es positivo");
}
if(numero1<=0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1 < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

/*--5
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del núm45ero de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.23

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

Almacene en una variable el número de DNI indicado por el usuario y e23n otra variable la letra del DNI que se ha indicado.
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.

*/
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//1
let letter=prompt("ingresa tu letra");
let dni=prompt("ingresa tu DNI");

let result = letras[parseInt(dni)%23];

//2 y 3
(dni<=0 | dni> 99999999) ? console.log(dni + " no es valido"): console.log(result);

//4
(letter.toUpperCase() === result) ? console.log("la letra " +letter+" es igual a "+result): console.log("la letra " + result+" es igual a "+ letter);



