
function idCard() {
    let nombre = " Brandon";
    let ubicacion = "Hidalgo"
    let pasaTiempo = "Ciclismo"
     
    return console.log(`Hola, mi nombre es ${nombre}. Vivo en ${ubicacion} y disfruto del ${pasaTiempo}`)
}

// ejercicio 2

function calcMascotaAge (edadAnioHumano) {
    let dato = edadAnioHumano;
    let equivalenciaHumana = 8;
    let resultado = dato * equivalenciaHumana;
    return console.log(`la edad de tu perro es ${resultado} años`);
}
////////////////////////////////////////////////////////////////
function esPar (numero) {
    let parametroNumero = numero;
    if (numero  != 0) {
        if (parametroNumero % 2 === 0){
            alert(`${numero} es par`)
        } else {
            alert(`${numero} es impar`);
        }
    } else {
        alert("ingresa un numero diferente a 0");
    }
}
//////////////////////////////////////////////////////////////////

function esMayor(añoNacimiento){
    let añoActual = 2022;
    let diferencia = añoActual - añoNacimiento;
    if (diferencia > 18) {
       // console.log("Es mayor de edad");
        alert("es mayor de edad");
    } else {
        alert("es menor de edad");
    }
}
