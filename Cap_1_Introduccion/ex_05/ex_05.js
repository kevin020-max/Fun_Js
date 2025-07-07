// Operadores Matemáticos
let a, b; //Aqui va a dar n error es normal
let c, d; // Aquí las operaciones van a dar el resultado real
let suma, resta, mult, div, residuo, potencia; //variables para obtener los resultados de los operandos.

//obtener datos ingresados por el usuario
a = prompt('ingrese un numero');
b = prompt('ingrese un numero');

//resultados de las operaciones
suma = a + b; //aquí las operacion no se da pues se concatenan los valores por el operando +
resta = a - b;
mult= a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;

//imprimir los resultados
document.writeln(
    'Resultados de la operacion a + b sin convertir valores ', '<br>',
    'La suma es : ', suma, '<br>',
    'La resta es : ', resta, '<br>',
    'La multiplicaciona es : ', mult, '<br>',
    'La deivision es : ', div, '<br>',
    'El residuo es : ', residuo, '<br>',
    'La potencia es : ', potencia, '<br>',
)

document.writeln('<br>') //salto de linea

//segunda operacion
//Para que las operaciones numericas se puedan dar corectamente, se deben convertir los datos ingresados con parseInt o parseFloat.
//obtener los datos de los usuarios ya parseados
c = parseInt(prompt('ingrese un numero'));
d = parseFloat(prompt('ingrese un numero'));

//resultados del segundo bloque de operaciones
suma = c + d; 
resta = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;

document.writeln(
    'Resultados de la oeracion c + d convirtiendo los valoes', '<br>',
    'La suma es : ', suma, '<br>',
    'La resta es : ', resta, '<br>',
    'La multiplicaciona es : ', mult, '<br>',
    'La deivision es : ', div, '<br>',
    'El residuo es : ', residuo, '<br>',
    'La potencia es : ', potencia, '<br>',
)