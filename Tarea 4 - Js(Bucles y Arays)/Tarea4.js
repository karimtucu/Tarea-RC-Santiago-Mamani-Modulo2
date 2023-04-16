/*(Ejercicio N4)
Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
Al salir con“cancelar” deberá indicarse la suma total de los números introducidos. */
let sum = 0;
let input;

do {
  input = prompt("Ingrese un número:");

  if (input === null) {
    break;
  } else if (!Number(input)) {
    alert("Debe ingresar un número válido.");
    continue;
  }

  sum += parseInt(input);
} while (true);

alert(`La suma total de los números ingresados es: ${sum}`);

/* (Ejercicio N8)
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456 */

let numero = parseInt(prompt("Introduce un número no mayor de 50: "));

if (numero <= 50) {
  for (let i = 1; i <= numero; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    console.log(linea);
  }
} else if (numero > 50) {
  console.log("El número introducido es mayor de 50.");}

  else {
 console.log("por favor introdusca un numero valido")
  }

/*(Ejecisio N1)
Crear un array llamado meses y que almacene el nombre de los doce meses del año.
 Mostrar por pantalla en forma de lista los doce nombres del arreglo.
Output:

Lista de meses
enero
febrero
marzo
abril
mayo
junio
julio
agosto
septiembre
octubre
noviembre
diciembre
 */

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let listaMeses = "<ul>";
for (let i = 0; i < meses.length; i++) {
  listaMeses += "<li>" + meses[i] + "</li>";
}
listaMeses += "</ul>";

document.getElementById("meses").innerHTML = listaMeses;


/* (Ejercisio N2)
 Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas
 en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, 
‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’,
‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, 
Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

Output:
el arreglo de cuidades tiene 10 elementos 
elemneto 1er pocion: nueva york , estados unicos
elementos 3ero posicion: tikio, japon
elemento ultima pocicion: el cairo, egipto 
elemento ultima pocicion: paris
 */
let ciudades = [];

while (true) {
  let ciudad = prompt("Ingrese una ciudad (presione cancelar para terminar):");
  if (ciudad === null) {
    break;
  } else {
    ciudades.push(ciudad);
  }
}

document.write("<p>El arreglo de ciudades tiene " + ciudades.length + " elementos</p>");
document.write("<p>Elemento primera posición: " + ciudades[0] + "</p>");
document.write("<p>Elemento tercera posición: " + ciudades[2] + "</p>");
document.write("<p>Elemento última posición: " + ciudades[ciudades.length - 1] + "</p>");

ciudades.push("París");
document.write("<p>Se ha agregado la ciudad de París en la última posición</p>");

document.write("<p>El elemento en la segunda posición es: " + ciudades[1] + "</p>");

ciudades[1] = "Barcelona";
document.write("<p>Se ha reemplazado el elemento en la segunda posición por Barcelona</p>");

console.log(ciudades);
/*(Ejercicio N4)
Escribir el código de una función a la que se pasa como parámetro un número entero y 
devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función. */
function parOImpar(numero) {
if (numero % 2 === 0) {
 return "El número es par";
} 
else {
return "El número es impar";
}
}
function mostrarResultado() {
 let inputNumero = document.getElementById("numero");
 let resultado = document.getElementById("resultado");
let numero = parseInt(inputNumero.value);

if (isNaN(numero)) {
 resultado.innerHTML = "Por favor ingrese un número válido.";
} else {
resultado.innerHTML = parOImpar(numero);
}
}

/*(Ejercicio N6)
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58
*/

let ladoA = parseInt(prompt("Ingrese el valor del lado A del rectángulo"));
let ladoB = parseInt(prompt("Ingrese el valor del lado B del rectángulo"));

function calcularPerimetroRectangulo(a, b) {
  let perimetro = 2 * (a + b);
  return perimetro;
}

let perimetro = calcularPerimetroRectangulo(ladoA, ladoB);

document.write("El perímetro del rectángulo es: " + perimetro);
