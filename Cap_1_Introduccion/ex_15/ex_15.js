//funciones

function saludo() {
    document.writeln('Hola Mundo','<br>');
    console.log('Hola mundo');
}

saludo();

function despedida() {
    document.writeln('Adios Mundo', '<br>');
    console.log('Adios mundo');
}

despedida();

function saludarusuario(nombreUsuario, apelllidousuario){
    document.writeln('Hola ', nombreUsuario, ' ', apelllidousuario, ',', ' Bienvenido(a)')

}
let  nombre = prompt('Dime tu nombre')
let apellido = prompt('Dime tu apellido')


saludarusuario(nombre, apellido);

//Funciones con caculos simples

function CalcularAreaRectangulo(base, altura) {
    let = area * altura;
    return area;
}
console.log('El area del rectangulo es: ', area = CalcularAreaRectangulo(5, 10));

function esMayor_o_Menor(edad) {
    if(edad>=18){
        console.log('Es mayor de edad')
    }else{
        console.log('Es menor de edad')
        }
}
esMayor_o_Menor(20);
esMayor_o_Menor(12);

function suma() {
    let  a = parseInt(prompt('Ingrese el 1er numero a sumar'));
    let b = parseInt(prompt('Ingrese el 2do numero a sumar'));
    return a+b;// Devuelve la suma de los datos ingresados por el usuario
}
document.writeln('El resultado de la suma es: ', suma(), '<br>');

function verColor() {
    valor = parseInt(prompt('Por favor ingrese números entre 1 y 3 para activar el semáforo...'))

    switch(valor){
        case 1:
            return'Perfecto has elegido el color: Rojo';
        case 2:
            return'Perfecto has elegido el color: Verde';
        case 3:
            return'Perfecto has elegido el color: Amarillo';
        default:
            return'No ha ingresado un valor correcto en la instruccion dada'
    }
}
document.writeln(verColor());