// mejores practicas 
//Simplificar func. lo mas que se pueda 

// utilizar keyword personal 
// nombrar nuestra funcion 
// utilizar () y arbir y cerrar la función {}

function myFuncion () {
   // console.log("Hola mundo ");
}
// llamar la funcion 
myFuncion();

// Variable con scope local
function miNombre () {
    let name = "Brandon Nicolás";
    // console.log(name);
}

miNombre();
// scopeFunction();
//variable global 
var nombre = "Brandon Nicolás";

function globalScope () {
  //  console.log(nombre);
}

globalScope();

// Scope de variables  


// let
// Scope local 
// Hoisting: la variable no existe para nuestro interprete de javascript
//console.log(a);
//let a = "Hoisting de let";

// var 
// scope global, local 
// Hoisting no se puede utlilizar o invocar antes de declarala. Aparece como undefined
//
 
//console.log(x);
var x = "Hola"; // esto no se puede hacer 

// Const 
// Scope global, local
// Hoisting: no se puede utlizar. No existe para nuestro interprete de JS

const c = "Hoisting const";

// input 
const mNombre = "Brandon Nicolás";

function fiufiu (x) {
    //console.log(x)
}

fiufiu(mNombre);
// Parametro aleatorio
fiufiu("Brandon Calva Zamora");
fiufiu(2);

fiufiu(mNombre, 2)

//////////////////////////////////////////////////////

// OUTPUT

function out () {
    let x = "Hola";
    return x;
}
// Podemos recibir el dato de forma directa 
//console.log(out());


// Podemos guardar el output en una variable
// Y la podemos utilizar despues
const recive = out();

//console.log(recive);

//Funcion con parametros  y return
function areaRectangulo(b, a) {
    var resultado = b *a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo (base, altura) {
    var resultado = (base*altura)/2;
    return resultado;
}

console.log(areaTriangulo(8,4));
