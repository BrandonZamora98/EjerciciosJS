/*
Arreglos, arrays o matrices
Definicion 
un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable

cuando tenemos una variable, la usamos para almacenar un solo dato.
en cambio con un arreglo podemos tener muchos datos a manera de lista.

Un arreglo yano es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos.
*/

// let nombre = "Felipe"; // Aqui se almacena un solo dato

// array = ["Felipe", "Ivonne", "Briana", "Zabdiel", "Alonso"];

// arrayConDiferentesTiposDeDatos = ["Felipe", 23, true, null, undefined]; 

/* 
Formas de crear un array 
1.- Primera forma:

Utilizando la palabra reservada "new Array"
var marcaDeColores = new array("Mapita", "Prismacolor", "Blancanieves", "Faber Castle", "Norma");

2.- Segunda forma:

La segunda forma se trata de usar el arreglo solo usando corchetes 
[]. Esta es la forma mas usada para crear arreglos en JS.



var marcaDeColores2 = ["Mapita", "Prismacolor", "Blancanieves", "Faber Castle", "Norma"];


-- Acceder a elementos de un array 
Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

-Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices 
 -- Posicion de los elementos de la lista del super

    0: "Leche",
    1: "Papitas",
    2: "Jabon",
    3: "Nachos",
    4: "Huevos"
Numero de elementos NO es lo mismo que si posicion
*/

 let arrayPaises = ["Mexico", "Chile", "Argentina", "España", "Colombia"];

 let arrayPeliculas = ["La quinta ola", "Proyecto almanaque", "Scott Philgrim vs the world", "Rendirse jamas", "Lo que el agua se llevo "];

 let arrayVideojuegos = [ "Apex", "Fortnite", "Overwatch", "Valorant", "Fall guys",]

 let arrayTiposDatos = [ null, true, 123456, "Hola mundo", false ];

 let arrayNumeros = [1, 2, 3, 4, 5];


 lsitaDeSuper = ["leche", "papitas", "Jabon", "Nachos", "Huevos"];

 console.log("EL producto en la posicion 1 es: " + lsitaDeSuper[1]);

 /* Encontramos que al tratar de seleccionar un elemento de nuestro arreglo que no esxiste, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podamos crecer su manaio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento momento recibe mas informacion 
 */

 /*
Array Asociativo 

Arreglos asociativos 

Son arreglos donde cada elemento esta asociado no solo con su indice, si no que tambien esta asignado a un identificador. 
 */

// Sintaxis de un arreglo asociativo
/*
*/
// Ejemplo de una Ecomerce
let propiedadesDeMiComputadora = {
    marca: "Asus",
    procesador: "intel i7",
    ram: "16 Gb",
    almacenamiento: "1 Tb",
    precio: "15000"
}


console.log(propiedadesDeMiComputadora);

console.log("la ram de mi computadora es de: ", propiedadesDeMiComputadora["ram"]);

console.log("El tamaño de la pantalla es de: ", propiedadesDeMiComputadora["procesador"]);

console.log(propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);

//Ejemplo de una Red Social
let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "Agosto",
    likes: "5000",
    descripcion: "Esta es una bonita foto de lasagna",
    ubicacion: "Estado de Mexico"
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);

/*
En los arreglos, tnemos ciertos metodos o instrucciones que nos van a permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

Podemos dividir estos metodos en 3:

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)
*/
console.log("//////////////////////////////////////////////////////");

var arrayDeEjemplo = ["manzana", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandia", "Fresas"];

// Metodos transformadores 
/*
La sintaxis basica del metodo es .nombreDelMetodo(valorAModificar)
*/
// push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Se agrego pitaya al arreglo de ejemplo");

// pop(): Eliminar el ultimo elemento del arreglo
arrayDeEjemplo.push();
console.log("Eliminar el ultimo elemento del arreglo", arrayDeEjemplo)

// unshift(): Agregamos uno o mas elementos al principio del arreglo 
arrayDeEjemplo.unshift("bananas", "tunas", "aguacate", "lichi");
console.log("Agregamos 4 elementos al principio del arrelgo", arrayDeEjemplo);

// shift(): eliminar el primer elemento y devolver ese valor eliminado

arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

// sort(): Permite ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

//slice(): Extraemos una seccion de nuestro arreglo y lo enviamos a uno nuevo 
// copiando el arreglo (no se modifica nada, sino que creamos una copia)
var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3, 7);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

// Se va en sentido inverso 
var saludo3 = saludo1.slice(-9, -5);
console.log("Imprimimos la rebanada del arreglo original");

//splice(): Modificar el arreglo en 3 formas distintas 

//Eliminar elementos del arreglo
//Agregar elementos nuevos al arreglo 
//Reemplazar elementos que ya existen en el arrelgo 
/* Sintaxis basica 

splice(indice de inicio, cantidad de elementos a eliminar, nuevoElemento1, nuevoElemento2, etc.)

    - Indice de inicio: laposicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    -Elemento a a gregar: Los nuevos que se agregan al arreglo(tercer elemento del parentesis)
*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto"];
console.log("Este es nuestro arreglo de los meses del anio: ", mesesDelAnio);

// Eliminar y agregar datos usando splice

mesesDelAnio.splice(2,2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ", mesesDelAnio);

//Agregar elementos sin borrar nada del arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(2, 0, "Jueves", "Viernes", "Sabado"); // a partir de la posicion 2 comenza a insertar los datos 
console.log("Los nuevos dias de la semana son: ", diasSemana);

var ensalda = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

// length() Nos permite saber el nuemro de elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada ", ensalda.length);

//join(): nospermite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalda.join( "-"));

//concat(): Nos permite unir dos o mas arrays en un solo.
// devuelve un nuevo arreglo con los elementos de los otros arreglos

let dulces = ["galletas", "cheetos", "glorias", "gansitos", "picafresas", "tamborines"];

let mezcla = ensalada.concat(dulces);

console.log("Esta es mi mezcla: ", mezcla);

// indexOf: nos permite saber la ultima posicion de un elemento dentro del arreglo

console.log("La posicion de los cheetos de mi arreglo dulces: ", dulces.indexOf("cheetos"));

// lastindexof(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo 
console.log("La posicion de las galletas es: ", dulces.lastIndexOf("galletas"));

//toString
//valueOf
console.log(dulces.valueof());
//includes 


//toString(): Nos permite convertir el array en una cadena de texto 
console.log(mezcla.toString());

// valueof(): Nos permite devolver el valor de nuestro arreglo 
console.log(mezcla.valueof());

//includes() Nos permite saber si un elemento existe o no dentro de un arreglo 
console.log("asi podemos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true

/*

Metodos repetidores 

*/

//filter(): Recorre el array y devuelve uno nuevo con los elementos que se cumplan. (Es como un bubcle)

var nuemros = [1,2,3,4,5,6,7,8,9,10];
console.log("Numeros del 1 al 10", numeros);


//Filtramos los datos del arreglo
var numeros1al5 = nuemros.filter(numero => numero < 5);
console.log("Estos son los numeros que cumplen la condicion al ser menores que 5", numeros1al5);

var  numeros6al9 = numeros.filter(nuero => numero > 6 && nuero < 10 );
console.log("Estos son los numeros que cumplen la condicion al ser mayores que 5 y menores que 10", numeros6al9);

//map() nos permite recorrer el arreglo modificar los elementos presentes en el y retornar esos valores modificados en una nuevo con la misma longitud que el arreglo original 

var map = numeros.map(numero => numeros *3);
console.log("Estos son los numeros multilplicados por 3", map);

var arregloBase = [1,2,3,4,5,6,7,8,9,10];

var tabla2 = arregloBase.map(numeros => numeros * 2)
console.log("esta es la tabla del 2", tabla2);


//forEach(): este metodo nos permite llamar a una funcion "calback";
/*
Este metodo nos permite llamar a una funcino "calback" especifica una vez 
*/

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);


/*

Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false

*/
/*
Normalmente tenemos 3 ciclos
    - While (mientras)
    - Do while (hacer mientras)
    - For (para)

Tenemos otras sentencias mas especificas:

    - for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION

    - for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR


*/

/*
sentencia while (mientras)

esta sentencia nos va a permitir recorrer un bloque de codigo siempre que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de while es:

palabraReservada while (condicion que tiene que ser true){
    //codigo a ejecutar
}
*/

//Programa para sumar numeros
// el bucle no tiene definido una condicion para detenerse
let numeroParaSumar = 0;
while (numeroParaSumar <10) {
    console.log("el numero es menor a 10")
}


//contador sencillo 

let valorInicial = 0;

while (valorInicial <5) {
    valorInicial ++;
    console.log(valorInicial)   
}

//La sentencia while se ejecuta mientras se sigan obteniendo resultados positivos (true)
//y hasta que el resultado sea false, se para
//Practica grupal: escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese numero.


let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log(numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}

/*
Do While (HACER MIENTRAS O HACER HASTA)

El bucle do while nos sirve para ejecutar una sentencia especififcada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.


Estructura basica de un do while 

    palabraReservada do{

    }
    while(condicion);

*/

//Ejemplo 1

let numeroPequenio = 0; //Declaramos la variable en 0

do { //Esto se hara...
    console.log("El numero es: " + numeroPequenio); //imprimimos 
    numerito ++; //aumentamos de 1 en uno 1
} while (numeroPequenio <= 10);



