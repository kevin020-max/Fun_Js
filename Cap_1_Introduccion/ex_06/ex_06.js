/*==============Operadores =================*/

//Operadores de asignacion

let a =1;

document.writeln('El valor de a = ', a);
document.writeln('<br>'); // Se crea etiqueta <br> desde el javascript como elemennto HTML para hacer saltos de paginacion
console.log('El avlor de a = ', a);


a++ //El operador ++ aumenta o incrementa el valor de uno 
document.writeln('El valor de a  ',a);
document.writeln('<br>');
console.log('El valor de a =', a);

a+=5; //El opperador += incrementa el avlor de la variable dependiendo del valor que se ponga luego del igual
document.writeln('El valor de a  ', a);
document.writeln('<br>');
console.log('El valor de a =', a);


a--;//El operador -- decrementa el valor en uno
document.writeln('El valor de a = ', a,'<br>');
console.log('El valor de a =', a);

a-=2;// El operador -= resta el valor de la variabke dependiendo del valor que se ponga luego del igual
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

a*=2;//El operador * multiplica el vallor de la variable dependiendo del valor que se quiera multiplicar
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

a/=4;//El operador /= deivide el valor de la variable dependiendo del valor que se quiera dividir
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

a**=3;//El operador **= potencia el valor de la variable dependiendo el valor que se digite a potenciar
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);


//Operaciones de comparacion

//Los operadores de comparacion sirven para comparar valores entre variables


/*
= es el operador de signacion
> es el operadoer mayor que
< es el operadpr menor que 
== es el operador igual que
!= es el operador diferente que
>= es el operador mayor igual que
<= es el operador menor igual que 
*/

let valorUno, valorDos; // se declaran las variables
valorUno = 20;// Se inicializa la variable con un valor de tipo entero
valorDos = 10;// Se inicializa la variable con un valor de tipo entero

// Operador mayor que >
document.writeln(valorUno > valorDos, '<br>');
console.log (valorUno>valorDos);
// El sistema verificara si la variable uno es mayor que la dos y devolvera un resultado booleano es decir: falso o verdaddero (true or false)

//Operador menor que <
document.writeln(valorUno < valorDos, '<br>');
console.log(valorUno < valorDos);
// El sistema verificara si la variable uno es menor que la dos y devolvera un resultado booleano es decir: falso o verdaddero (true or false)

//Operador ==
document.writeln(valorUno == valorDos, '<br>');
console.log(valorUno == valorDos);
// El sistema verificara si las variable son iguales de lo contario dara false

//Operador != Diferente que
document.writeln(valorUno != valorDos, '<br>');
console.log(valorUno != valorDos);
// El sistema verificara si las variables son diferentes en caso de que si lo sean dara true

// Operador mayor igual que >=
document.writeln(valorUno >= valorDos, '<br>');
console.log(valorUno >= valorDos);
//El sistema verificara si la variable uno es mayor o igua que la dos y devolvera un resultado en booleano es decir: falso o verdaddero (true or false)

//Operador menor o igual que <=
document.writeln(valorUno <= valorDos, '<br>');
console.log(valorUno <= valorDos);
//El sistema verificara si la variable uno es menor o igua que la dos y devolvera un resultado en booleano es decir: falso o verdaddero (true or false)