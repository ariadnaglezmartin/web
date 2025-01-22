alert("Conteste con la inicial mayúscula y con una palabra")
var puntuacion = 0

var p1=prompt("¿En qué año se casaron Isabel de Castilla y Fernando de Aragón?");
if (p1 == 1469){
    alert("Respuesta correcta");
    puntuacion++;}
else{
    alert("Respuesta incorrecta, la respuesta correcta es 1469");
    puntuacion--;
}
alert("Llevas "+puntuacion+" puntos.")

var p2=prompt("¿Qué institución fue creada para garantizar la seguridad en los caminos y ciudades?");
if (p2 == "Hermandad"){
    alert("Respuesta correcta");
    puntuacion++;}
else{
    alert("Respuesta incorrecta, la respuesta correcta es Hermandad");
    puntuacion--;
}
alert("Llevas "+puntuacion+" puntos.")

var p3=prompt("¿Qué ciudad albergaba una de las sedes de la Chancillería Real?");
if (p3 == "Valladolid"){
    alert("Respuesta correcta");
puntuacion++;}
    else{
        alert("Respuesta incorrecta, la respuesta correcta es Valladolid");
    puntuacion--;}
    alert("Llevas "+puntuacion+" puntos.")

var p4=prompt("¿Qué grupo social ocupó cargos administrativos bajo los Reyes Católicos?")
if (p4 == "Juristas"){
    alert("Respuesta correcta");
puntuacion++;}
    else{
        alert("Respuesta incorrecta, la respuesta correcta es Juristas");
    puntuacion--;}
    alert("Llevas "+puntuacion+" puntos.")

var p5=prompt("¿Qué año marca la conquista del reino de Granada?")
if (p5 == 1492){
    alert("Respuesta correcta");
puntuacion++;}
    else{
        alert("Respuesta incorrecta, la respuesta correcta es 1492");
    puntuacion--;}
    alert("Llevas "+puntuacion+" puntos de 5.")
