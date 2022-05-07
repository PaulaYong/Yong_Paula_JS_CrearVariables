//var requerimientos para subir a la atracción"
var alturaMinima = 100; //altura en cm
var edadMinima = 10;

//var datos de la persona
var imputAltura = 100; //altura en cm
var imputEdad = 11;

//var comparando información
var altura = imputAltura >= alturaMinima;
var edad = imputEdad >= edadMinima;

//mostrar resultado en la pantalla
if (altura == true && edad == true ){
  alert('¡Felicidades, puedes subir a la atracción!');

} else {
  alert('¡Lo sentimos, no cumples con los requisitos minimos para subir a la atracción!');
}
