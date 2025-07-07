//pedir datos a un usuario (como ejercicio pues cuando se piden datos utilizan inputs.)

let nombre, edad, direccion, movil, email; //se puede crear tantas variables como se necesite con una declaracion let. 
// prompt es una palabra reservada que despliega uns funcion y sale un mensaje de tip alert para pedir datos.


nombre = prompt('Escriba su nombre: '); //se piden los datos del usuario
document.writeln('Su nombre es: ', nombre, '</br>'); //se imprimen los datos proporcionados por el usuario

edad = prompt('Escriba su edad: '); //se piden los datos del usuario
document.writeln('Tu edad es: ', edad, '</br>');//se imprimen los datos proporcionados por el usuario

direccion = prompt('Escriba su direccion: '); //se piden los datos del usuario
document.writeln('vives en: ', direccion, '</br>'); //se imprimen los datos proporcionados por el usuario

movil = prompt('Escriba su movil: '); //se piden los datos del usuario
document.writeln('Tu numero móvil es: ', movil, '</br>'); //se imprimen los datos proporcionados por el usuario

email = prompt('Escriba su email: '); //se piden los datos del usuario
document.writeln('Tu email es: ', email, '</br>'); //se imprimen los datos proporcionados por el usuario

//con la etiqueta <br> se pueden realizar saltos de página

console.log('Su nombre es: ', nombre, '</br>');
console.log('Tu edad es: ', edad, '</br >');
console.log('vives en: ', direccion, '</br>');
console.log('Tu numero móvil es: ', movil, '</br >');
console.log('Tu email es: ', email, '</br>');