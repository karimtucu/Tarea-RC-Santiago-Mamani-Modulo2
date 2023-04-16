
//(ejecicio N1)
// Escribir un programa que solicite la edad
let edad = parseInt(prompt("ingrese su edad por favor"))
//si es mayor de 18 años mostrar un mensaje que ya puede conducir
if( edad > 18 ){
    console.log("ya puede conducir tiene la edad requerida")
}
//si la edad ingresada no es un número válido indicarlo en un mensaje.
else{
    console.log("no puedes conducir no tiene la edad requerida")
}


//(ejecicio N2)
//Escribir un programa que solicite una nota (número) de 0  a 10
let nota = parseInt(prompt("solicito nota"))
//Luego mostrar la calificación en un alert según los siguientes rangos de nota:
//0-2: Muy deficiente
if(nota <= 2){
    alert("muy deficiente")
}
//3-4: Insuficiente
else if(nota <= 4){
    alert("Insuficiente")
}
//5-6: Suficiente
else if(nota <= 6){
    alert("Suficiente")
}
//7: Bien
else if(nota === 7 ){
    alert("bien")
}
//8-9: Notable
else if(nota <= 9){
    alert("Notable")
}
//10: Sobresaliente
else if(nota === 10){
    alert("Sobresaliente")
}
//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
else if(nota > 10 ){
    alert("número erróneo")
}
//Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
else{
    alert("Introduce un número válido")
}

//(ejercicio N3)
//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. 
/*
let cadenas = [];

while (true) {
  let cadena = prompt("Introduce una cadena de texto:");
  if (cadena === null) {
    break;
  }
  cadenas.push(cadena);
}

if (cadenas.length > 0) {
  let resultado = cadenas.join(" - ");
  console.log(resultado);
} else {
  console.log("No se han introducido cadenas.");
}
*/
//(ejecicio N11)
let nombres = [];
let edades = [];

// Pedir los nombres y edades por teclado
for (let i = 1; i <= 3; i++) {
  let nombre = prompt(`Introduce el nombre ${i}:`);
  let edad = parseInt(prompt(`Introduce la edad de ${nombre}:`));

  nombres.push(nombre);
  edades.push(edad);
}

// Encontrar el índice de la mayor edad
let indiceMayor = 0;
for (let i = 1; i < edades.length; i++) {
  if (edades[i] > edades[indiceMayor]) {
    indiceMayor = i;
  }
}

// Mostrar el nombre del mayor
alert(`El mayor es ${nombres[indiceMayor]} con ${edades[indiceMayor]} años.`);

//(ejercicio N12)
//Math.random(): función que devuelve un número aleatorio entre 0 y 1 (no incluido).
//Math.floor(): función que redondea un número hacia abajo, en este caso, para obtener un número entero.
//Math.random() * 98: se multiplica el resultado de Math.random() por 98 para obtener un número aleatorio entre 0 y 98.
//+1: se suma 1 al resultado para obtener un número aleatorio entre 1 y 99.
//console.log(numeroAleatorio): se muestra el número aleatorio generado por consola.
let numeroAleatorio = Math.floor(Math.random() * 98) + 1;
console.log(numeroAleatorio);

//(ejercicio N13)
//prompt("Introduce un texto"): muestra un cuadro de diálogo para que el usuario introduzca un texto y lo guarda en la variable texto.
//texto.toUpperCase(): convierte el texto introducido por el usuario a mayúsculas y lo guarda en la variable textoMayusculas.
//console.log(textoMayusculas): muestra el texto en mayúsculas por consola.
let texto = prompt("Introduce un texto");
let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);
