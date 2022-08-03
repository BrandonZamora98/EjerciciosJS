const nineros = true;

const hambre = true;

alert(nineros == hambre);

alert(nineros || hambre);

//And 
// Todas las condiciones deben ser true 

// Or 
// solo una condicion debe ser true 
//true || true = true 
//true || false = true 
// false || false = false 

// Not 
// Es la negacion a la condicion 
// true -> false, false -> true 

var hora = 8;

if (hora == 8) {
	console.log("Buen dia");
}
//////////////////////////////////

var hora = 3;

if (hora != 8) {
	console.log("Buen dia");
}
//////////////////////////////////
var hungry = true;
    if (hungry) {
        alert("Tengo mal del porky");
    }else{
        alert("two mimir");
    }
//////////////////////////////////

var hour = 9;

if (hour < 18) {
    alert("good day");
} else {
    alert("good evening");
}

//////////////////////////////////

var hora = 12;

if (hora > 0 && hora <= 24) {
    if (hora <= 7){
        alert("Buenas madrugadas");
    } else {

    }
} else {
    alert("Su hora no es valida");
}

/////////////////////////////////////
var dinero = 100;

if (nineros <= 10) {
    alert("concha de vainilla y 4 picafresas");
} else if (nineros <= 50) {
    alert("tacos al vaporwave y agua de horchata");
}

//////////////////////////////////////
