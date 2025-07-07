/* Las funciones Matemáticas en javascript utilizando la case Math 
Estas funciones permiten realizar operaciones denro del código */

var precio = Math.round(399.53) // si se declara la variable con valor decimal la funcuion round la vuelve entero 
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio); 

var precio = Math.round(399.42)
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio); 

var precio = Math.ceil(299.83) // Se declara la variable con valor decimal la funcion ceill la vuelve entero 
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio); 

var precio = Math.ceil(299.28) // Se declara la variable con valor decimal la funcion ceill la vuelve entero al mas cercano sin importar el decimal
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio); 

var precio = Math.floor(540.93) // Se declara la variable con valor decimal la funcion floor la vuelve entero 
document.writeln('precio redondeado: ', precio, '<br>');
console.log('precio redondeado: ', precio); 

var seno = Math.sin(45);//Se calcula el seno del angulo 45
document.writeln('El valor de seno de un angulo de 45 es: ', '<br>');
console.log('seno de 45 : ', seno);

var coseno = Math.cos(50);//Se calcula el coseno del angulo 45
document.writeln('El valor de coseno de un angulo de 45 es: ', coseno, '<br>');
console.log('El valor de coseno de un angulo de 45 es: ', coseno);

var tangente = Math.tan(68);//Se calcula la tangente del angulo 68
document.writeln('El valor de la tangente de un angulo de 68 es :', tangente, '<br>');
console.log('El valor de la tangente de un angulo de 68 es :', tangente);

var exponencial = Math.exp(2);//Se calcula el exponencial de 2 
document.writeln('Exponencial de 2: ', exponencial, '<br>');
console.log('Exponencial de 2: ', exponencial);

var exponente = Math.pow(4,2); //Esto se traduce como 4 elevado a la 2 (4 por 4 = 16).
document.writeln('Exponente de 4 elevado a la 2 : ',exponente, '<br>');
console.log('exponente de 4 elevado a la 2 es: ', exponente);

var logaritmo = Math.log(10);// Halla el logaritmo de un numero dado
document.writeln('El logaritmo de 10 es: ', logaritmo, '<br>');
console.log('El logaritmo de 10 es :', logaritmo)

var absoluto = Math.abs(-10);//Calcular el valor absoluto de un numero dado
document.writeln('El valor absoluto de -10 es: ', absoluto, '<br>');
console.log('El valor absoluto de -10 es :', absoluto);

var raiz = Math.sqrt(81); //Cacular la raiz cuadrada de un numero dado
document.writeln('La raiz cuadrada o de 81 es: ', raiz, '<br>');
console.log('Raiz de 81: ', raiz);

var aleatorio = Math.random();//Random siempre va desde 0,0 hasta 0.999999........
document.writeln('Elvalor aleatorio o ramdom es: ', aleatorio);
console.log('El valor aleatorio es: ', aleatorio);

var numRam = Math.floor(Math.random()*(15 - 5 + 1)+5);//Formula para realizar numer srandom pero con ranfo y convertirlos  a entero.
document.writeln('El valor aleatorio entre 5 y 15 es: ', numRam, '<br>');
console.log('El valor aleatorio entre 5 y 15 es: ', numRam);

/* Para este caso a traves de este esquema de fórmula sucede lo siguiente:
Math.floor(Math.random() * (Max - Min + 1) + Min);

1. Math.random()genera un número decimal entre 0y 1(incluye 0, pero nunca 1). Puede generar valores como 0.0, 0.5, 0.9999999, pero nunca exactamente 1.

2. Se multiplica el random generado por (Max - Min + 1), lo que da el tamaño del rango de números posibles. En este caso: 15 - 5 + 1 = 11, lo que significa que Math.random()se escalará a un valor entre 0 y 10.9999999.

3. Se suma Min para desplazar el rango. Antes de sumar Min, los valores estan entre 0y 10.9999999. Posteriormente, al sumar 5, ahora los valores estarán entre 5y 15.9999999. 

4. Math.floor()redondea hacia abajo para asegurar de obtener solo números enteros. Sin Math.floor(), se obtendrían decimales. Con Math.floor(), cualquier valor entre 5.000000 y 5.999999 se convierte en 5, entre 6.000000 y 6.999999 se convierte en 6, y así sucesivamente hasta 15. 

5. El + 1 en (Max - Min + 1) se utiliza para incluir el límite superior (Max). Sin el + 1, Math.random() solo podría generar números hasta Max - 1. El + 1 permite que Math.random() * (Max - Min + 1) llegue hasta Max, garantizando que Max sea una posibilidad al hacer Math.floor().

Ejemplo:

Si Math.random() genera 0.999999, el cálculo es: 
Math.floor(0.999999 * (15 - 5 + 1) + 5);
1. 0.999999 * 11 = 10.99999
2. 10.99999 + 5 = 15.99999
3. Math.floor(15.99999) = 15✅
Esto confirma que 15 puede ser generado.

Si Math.random()se genera 0, el cálculo es:
Math.floor(0 * (15 - 5 + 1) + 5);
1. 0 * 11 = 0
2. 0 + 5 = 5
3. Math.floor(5) = 5✅
Esto confirma que 5 puede ser generado.
*/