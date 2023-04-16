//(ejecisio N1,N2 y N3)
// alert muestra una ventana emergente con la palabra mensaje.
// el dociment.white muestra la palabra hello world en el sitio.
// la fucion <br> hace un salto de linea
// el ultimo ducument.white muestra la suma de 3 + 5
alert("un mensaje");
document.write("Hello World");
document.write("<br>"); // Crea un salto de línea
document.write(3 + 5);
/*
//(ejecisio N4)
//la primera linea de texto muestra un contenedor que en este caso seria nombreUsurio que dontro va contener
//un prompt este mismo va mostrar una ventana emergenteque pedira que se ingrese un nombre de usurio
//la segunda linea muestra el comando console.log la cual se encargara de mostrar en la consola un hola nombreUsuario
//la tercera linea muestra un alert este se encarga de mostra un ventana emerjente con las palabras hola nombreUsuario

let nombreUsuario = prompt("Por favor, introduce tu nombre");
console.log(`Hola ${nombreUsuario}`);
alert("hola " + nombreUsuario) // alerta para mostrar el nombreUsurio

//(ejecisio N5)
//la primera linea de texto muestra un contenedor que es num1 el cual contiene un parseInt el cual se ultiliza convertir una cadena de caracteres en un número entero.
//esto esta seguido de un prot el cual mestra una ventana emergente que en este caso pide el primer numero 
//El contenedor num2 hace lo mismo pidiendo un numero que se va almacenar en la contenedor num2
//la tercera linea de texto hace la suma de la variable num1 y num2 la cual se guarda en el contenedor resultado
//la curta linea muestra console.log la cual sirve para que el resultado se muestra de la sigueinte manera en la consola
//"la suma de num1 y num2 es resultado"
//la quinta linea muestra un alerte de una ventana emergente la cual muestra el mensaje "la suma es = resultado"
let num1 = parseInt(prompt("Ingrese el primer número que desea sumar:"));
let num2 = parseInt(prompt("Ingrese el segundo número que desea sumar:"));
let resultado = num1 + num2;
console.log(`La suma de ${num1} y ${num2} es: ${resultado}`);
alert("la suma es = " + resultado)// alerta para mostrar el resultado de la suma
//(ejecisio N6)
//En la primera linea se muestra el contenedor num1 la cual mediante el pronseInt(convertir una cadena de caracteres en un número entero)
//luego el prompt hace que se muestre una ventan emergente la cual te pide "Ingrese el primer número"
//la segunda linea hace lo mismo solo que esta te pide que ingreces el contenido del contenedor num2
//luego se muetran la variables if else if y else cada una se mostrara (en la consola porque tiene la variable console.log) dependiendo de que resultado se cumpla
//la varible if se mostrara solo si num1 es mayor a num2
//la varible else if se mostrara solo si num2 es mayor que num1 
//la variablre else se mostrara si los dos numeros son iguales 

let num3 = parseInt(prompt("Ingrese el primer número:"));
let num4 = parseInt(prompt("Ingrese el segundo número:"));

if (num3 > num4) {
  console.log(`El ${num3} es el número más grande.`);
} else if (num4 > num3) {
  console.log(`El ${num4} es el número más grande.`);
} else {
  console.log("Los dos números son iguales.");
}

//este comando hace que se muestre la alerta tanto como en el naveador como en la consola (ejecision N6)

let num8 = parseInt(prompt("Ingrese el primer número:"));
let num9 = parseInt(prompt("Ingrese el segundo número:"));

if (num8 > num9) {
  let message = `El ${num8} es el número más grande.`;
  console.log(message);
  alert(message);
} else if (num9 > num8) {
  let message = `El ${num9} es el número más grande.`;
  console.log(message);
  alert(message);
} else {
  let message = "Los dos números son iguales.";
  console.log(message);
  alert(message);
}

//(ejecisio N7)
//en las tres primeras linea de codigo se pide tre variables que van a ser guardadas en sus respetivos contenedore num1 num2 y num3
//el parseInt se ultiliza convertir una cadena de caracteres en un número entero el promtpt es lo que permite ingresar la informacion
//en la cuarta linea de codigo se muestra mediante && se comprueba si esta es true o false , si la operacion es true se va mostrar en la consola
//el texto (el num es el mas grande). la primera exprecion se lee: si num1 es mayor que num2 y num1 es mayor que num3,
//esta condicional sera tomada como true lo cual permitira que se muestre en la consola

let num5 = parseInt(prompt("Ingrese el primer número:"));
let num6 = parseInt(prompt("Ingrese el segundo número:"));
let num7 = parseInt(prompt("Ingrese el tercer número:"));

if (num5 > num6 && num5 > num7) {
  console.log(`El ${num1} es el número más grande.`);
} else if (num6 > num5 && num6 > num7) {
  console.log(`El ${num6} es el número más grande.`);
} else if (num7 > num5 && num7 > num6) {
  console.log(`El ${num7} es el número más grande.`);
} else {
  console.log("Al menos dos números son iguales.");
}

//(ejecisio N8)
//en la primera linea se pide que se ingrese un numero para que este pueda ser almacenado en la variable num 
//parseInt se ultiliza convertir una cadena de caracteres en un número entero , prompt permite que se ingrese un numero a la variable 
//en la tercera linea de codigo se muestra if el mensaje que contenga if solo se mostrara si la divicion de num es divisible en 2
//en caso de no ser asi se motrara lo que contenga else 

let num = parseInt(prompt("Ingrese un número:"));

if (num % 2 === 0) {
  console.log(`El ${num} es divisible por 2.`);
} else {
  console.log(`El ${num} no es divisible por 2.`);
}

//(ejecisio N9)
//en la primera linea de codigo se le pide al usuario una frace mediante el comando prompt 
//luego en la segunda linea se ingreda un contenedor vacio para que en este mismo se vallan guardan las variables
//la tercera linea se utiliza for para hacer un bucle y recorer cada letra
//la variable i = 0 marcar la posicion inial , el bucle se repetira mietras i sea menor a la longiud de la frace ingresada 
//al ingresar i++ nos aseguramos de que el bucle avance por todas las posiciones de la cadena 
//charAt() de la cadena para obtener la letra correspondiente a la posición actual del bucle, indicada por la variable i.
//Después, utilizamos el método toLowerCase() para convertir la letra a minúscula.
//En este if, comprobamos si la letra actual es una vocal. Para ello, comparamos la letra con las vocales en minúscula utilizando el operador ===
//Dentro del if, utilizamos el operador += para añadir la letra actual a la variable vocales

let frase = prompt("Ingrese una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i).toLowerCase();

  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    vocales += letra;
  }
}

console.log(vocales);

//(ejecisio N10)
//en la primera linea de codigo tenemos un contenedor numero el cual pose un parseInt el cual convierte el valor introducido 
//a numeros enteros, tambien pose el prompt el cual hace una ventana emergente donde el usuario puede poner sus datos
//if valida si el numero es divisible por 2 en caso de no ser didvisible por 2 pasa a la siguiente varible de comprovacion que seria
//si el numero es divisible por 3 y asi sucesiva mente en caso de no ser divisible por ninguno de estos se mostrar (el "numero" no es divisible por 2,3,5 ni 7)

let numeroDiv = parseInt(prompt("Introduce un número:"));

if (numeroDiv % 2 === 0) {
  console.log(`El ${numeroDiv} es divisible por 2.`);
} else if (numeroDiv % 3 === 0) {
  console.log(`El ${numeroDiv} es divisible por 3.`);
} else if (numeroDiv % 5 === 0) {
  console.log(`El ${numeroDiv} es divisible por 5.`);
} else if (numeroDiv % 7 === 0) {
  console.log(`El ${numeroDiv} es divisible por 7.`);
} else {
  console.log(`El ${numeroDiv} no es divisible por 2, 3, 5 ni 7.`);
}

//(ejercisio N11)
///en la primera linea de codigo tenemos un contenedor numero el cual pose un parseInt el cual convierte el valor introducido
//a numeros enteros, tambien pose el prompt el cual hace una ventana emergente donde el usuario puede poner sus datos
//if muestra que si el valor numero es divisible por dos si la division de numero y 2 es igual a 0 se agragara a la variable 
//divisible, mediante += (se agragara a la varible "2 y "). a asi se agragara con lo otros if que se compureben que son divisibles
//
//Output: El 20 es divisible por 2 y por 5.
//Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let numero = parseInt(prompt("Introduce un número:"));

let divisibles = `El ${numero} es divisible por `;

if (numero % 2 === 0) {
  divisibles += "2 por ";
}
if (numero % 3 === 0) {
  divisibles += "3 por ";
}
if (numero % 5 === 0) {
  divisibles += "5 por ";
}
if (numero % 7 === 0) {
  divisibles += "7 y por";
}

divisibles = divisibles.slice(0, -5); // Eliminar la última "y" y el espacio

if (divisibles !== `El ${numero} es divisible por`) {
  console.log(divisibles + ".");
} else {
  console.log(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
}
*/