//Mostrar los numeros del 1 al 5
// Se usa cuando sabemos cuantas veces queremos repetir algo
for (let numero= 1; numero<= 5; numero++){
    console.log("numero actual: ",numero);
}


//Mostrar los datos de una persona
// Se usa para recorrer las propiedades de un objeto 
let persona= {
    nombre: "carlos",
    edad: 25,
    ciudad: "Bogota"
}

for (let propiedad in persona){
    console.log(propiedad+ ": " + persona[propiedad]);
}

//Contar hastsa 3 con un while 
//Se usa cuando no sabemos cuantas veces, pero tenemos una condicion que evalua antes de entrar
let contador= 1;

while (contador <= 3){
    console.log ("contador:", contador);
    contador++;
}

//Igual que while, pero siempre ejecuta al menos una vez.
//Mostrar el menu hasta que el usuario elija salir
let opcion="";

do {
    opcion= prompt("Escibe una opcion (Escribe 'salir' para terminar):");
    console.log("Elegite:", opcion);
}while (opcion !== "salir");

//Este se usa para recorrer valores de arreglos (no objetos)
//Recorrer una lista de frutas
let listaDeFrutas = ["manzana", "banana", "uva"];

for (let fruta of listaDeFrutas){
    console.log("fruta:", fruta);
}

//Ciclo de numeros pares 
document.writeln('Ciclo de numeros pares', '<br>');

for (let x= 2; x<=20; x+=2){
    document.writeln (`Valor de x = ${x}`, `<br>`);  
}

let usuario, clave, control; 

control = 0;
usuario=prompt('Ingrese su usuario...');
clave = prompt('Ingrese su contraseña...');

do{
    if(clave != 'Micontraseña'){
        clave= prompt('Contraseña incorrecta, intemtalo de nuevo...');
        control= 0; //continuara valiendo cero mientras la clave digitada sea diferente a la establecida en el sistema
    }else {
        control= 1//control valdra uno cuando la contraseña ingresada sea la correcta
    }
}while (control !=1);
//La contraseña ingresada es verificada por control, s ale 1 le dara acceso al sistema sino continuara pidiendola hasta que se cumpla la condicion o usted programe los intentos
document.writeln('Acceso concedido, Bienvenido','<br>')

//saber cuantas bvocales tiene una palabra

let palabra = "murcielagos";
let vocal =0;//En esta varable se va a guardar la cantidad de vocales que se encuenran en la palabra

for(let p in palabra){
    if (palabra[p] == 'a'||palabra[p] == 'e' ||palabra[p] == 'i' ||palabra[p] == 'o' ||palabra[p] == 'u')//El cclo analiza en cada vuelta si la letra es gual a ana de las vocales en la busqueda
    {
        vocal++;
    }
}
document.writeln('cantidad de vocales: ', vocal)