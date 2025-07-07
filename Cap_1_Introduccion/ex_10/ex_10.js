/*CONDICIONALES 

Funcionalidades que permiten mejorar la toma de decisiones en la ejecucion del codigo, estas decisionesz se basn en evaluar si una o mas condiciones so verdaderas o falsas, es decir, si se cumple algo en ciertas situaciones o condiciones espefcificas.

Ahora bien, se puede verificar si se cumple una condicion determinada tiene un resultado especifico, el programa se ejecutará dentro de las instrucciones dadas

*/

//Condicion if() else()

let nombre, edad;
nombre = prompt('ingresa tu nombre');
edad = prompt('ingresa tu edad');
edad = parseInt(edad);

if (edad >= 18) {
    document.writeln('Tu eres mayor de edad');
    console.log('edad digitada: ',edad, 'Mayor de edad')
}else {
    document.writeln('Tu eres menor de edad');
    console.log('edad digitada: ', edad, 'Menor de edad')
}