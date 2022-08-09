/*
Cuando hablamos del DOM, estamos hablando de dos representaciones de nuestra pagina:
una de ellas es la presentacion del codigo fuente (La estructura del HTML) y ña otra es 
la representacion visual (La estructura del DOM).

Nodos 
Es la unidad mas basica que puede ser modificada, que permite ser una etiqueta o elemento 
o un nodo de texto.

<h1> //padre
    HOLA generation // Hijo o nodo de texto
</h1>

Document: el nodo raiz a partir del cual se derivan los demas nodos. Este objeto es el que
nos permite acceder a todos los elementos del DOM. todos los nodos derivan del document.


Element: son los nodos definidos por la etiqueta html. Por ejempl, una etiqueta <div></div>, <h1></h1>, etc.

    <h1> //nodo elemento (padre)
        Hola generation //nodo texto (hijo)
    </h1>

    text: el texto que esta dentro de un element o etiqueta.

    Atributos: los atributos de las etiquetas definen nodos (en JS no los vemos tal cual como nodos, si no como informacion asociada al nodo del tipo element.)

    comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en la cabecera de los documentos HTML tambien generan nodos.

    Con JavaScript podemos cambiar:
        -Todos los elementos HTML de una pagina
        - Todos los atributos de la pagina web
        - Todos los estilos CSS de la pagina
        -Eliminar elemntos y atributos 
        -Reaccionar a todos los elementos HTML que existan en la pagina
        -Crear nuevos eventos HTML en la pagina.

    Metodos de seleccino de elemntos 

    Son elementos que nos van a permitir seleccionar uno o varios elementos o grupos de elementos 
*/

// let parrafo = "Hola Generation";

// let parrafo2 = document.getElementById("parrafo");

//const cambioDeParrafo = document.getElementById("parrafo2").innerHTML = "Quiero chilaquiles";
/* 
SELECCIONAR ELEMENTOS 

    sirven para realizar busquedas de elementos dentro del documento 

    -getElementById("IDEelemento"): buscar elemento po el id
    -getelementByClassName("nombreClase"): Busca elementos por el nombre de clase 
    -getElementByTagName(): Busca un elemento por su nombre 
    -getELemtnByName(): Busca un elemento por su nombre 

    Metodos modernos 

    - querySelector():Buscar el pirmer elemento que coincida con el selector 
    -querySelectorAll():Busca Todos los elementos que coinciden con el selector 


*/

// getElementById()
const elementID = document.getElementById('parrafo4');
//getElementByCLassName
const elementClass = document.getElementsByClassName("parrafitos");

//getElementByTagName  y ByName

const elementTag = document.getElementsByTagName("p");
const elementName = document.getElementsByName("primerparrafo");

//querySelectorALL()
const querySelector = document.querySelector('#parrafo3');
const querySelector2 = document.querySelector('.parrafitos');

// querySelectorALL()
const querySelectorAll = document.querySelectorAll(".parrafitos");


/*
CREAR ELEMENTOS

    - createElement(): Crea un elemento EN MEMORIA del tipo element (<div></div>)
    - createComment(): Crea un nodo del tipo comentario
    - createTextNode(): Crea un nodo del tipo texto

    - cloneNode(): Clonar un elemento
    - Investigar los metodos para añadir, modificar y eliminar atributos

*/

//createelement()

const crearDiv = document.createElement("div");
const crearImagen = document.createElement("img");

//createTextNode()
const textNode = document.createTextNode("Hola a todos, me gustan los tacos");

//cloneNode()
const parrafoAClonar = document.createElement("p");
parrafoAClonar.textContent = "soy un parrafo, cloname";

const parrafoClon = parrafoAClonar.cloneNode(true);

const encabezadoOriginal = document.getElementById("encabezado");

const encabezadoClon1 = encabezadoOriginal.cloneNode();
const encabezadoClon2 = encabezado.cloneNode(true);

//Metodos para aniadir, modifircar y eliminar atributos
/*
son metodos que nos van a permitir hacer modificaciones a nuestros elementos dentro del documento HTML

    -textContent: Mostrar el contenido en un texto de un element
    -innerHTML: Modificar el contenido de un element
    -outerHTML: Mostrar el contenido con todo y etiquetas
*/
//textContent
encabezado.textContent;
parrafo1.textContent;
parrafo2.textContent;

//innerHTML
//parrafo1.innerHTML = ("Lo siento ahora yo soy el texto del parrafo 1");


nombreProducto.innerHTML = ("PlayStation 5 ");
precioProducto.innerHTML = ("15000");
imagenProducto.innerHTML = ("imagen.jpg");

//outerHTML
encabezado.outerHTML;
parrafo1.outerHTML;

/*
INSERTAR ELEMENTOS

son metodos que nos permiten poner la informacion que estaba en una memoria virtual de forma visual en nuestro documento

    -.appendChild()
    -.remove
    -.removeChild(investigar)
    -.replaceChild(investigar)

*/
//appendChild()
const appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";

appendImg.alt = "imagen sorpresa";

document.body.appendChild(appendImg);
