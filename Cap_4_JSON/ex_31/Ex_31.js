/*
JSON
Un archivo .json es como una hoja de apuntes ordenada donde se guardan datos de manera clara para que una persona o un programa los pueda leer, entender y utilizar

Ejemplo: Haga de cuenta que es como un cuaderno o libreta de notas donde usted escribe informacion importante de alguien como por ejemplo: su nombre, edad, direccion y estta informacion la mantiene en el mismo formato y bien organizada para cuando usted o alguien que requiera dicha informacion la necesite y pueda encintrarla facilmente.

Ejemplo tecnico: Entidad Personas o Directorio de Personas.

{
    "nombre": "su nombre coompleto",
    "edad":"tiene 40 años",
    "direccion": "carrera 25 # 38 - 65",
    "telefono": "3107406038",
    "emai": "sucorreoelectronico@gmail.com",
}

Ejemplo de un menu en archivo .json:

{
    "Plato":"Hamburguesa",
    "Preco": 22000,
    "ingredientes": ["pan","lechuga","carne"],
    "disponible": true
}

*/

//Explicacion de GPT//

/*
Un archivo .json es un archivo de texto plano que contiene datos estructurados en formato JSON (JavaScript Object Notation). Este formato es ampliamente utilizado para almacenar e intercambiar datos entre aplicaciones, especialmente en el desarrollo web y APIs.

¿Qué significa JSON?

JSON = JavaScript Object Notation
Aunque proviene de JavaScript, es compatible con muchos lenguajes de programación como Python, Java, PHP, etc.


---

📦 ¿Cómo luce un archivo .json?

Ejemplo de contenido de un archivo datos.json:

{
    "nombre": "Kevin",
    "edad": 25,
    "activo": true,
    "intereses": ["programación", "fútbol", "música"]
}


---

🧠 Características clave:

Formato ligero y fácil de leer para humanos y máquinas.

Utiliza pares clave-valor.

Admite estructuras como:

Objetos ({})

Listas o arreglos ([])

Valores primitivos: strings, números, booleanos, null.




---

📌 ¿Para qué se usa?

Guardar configuraciones de programas (por ejemplo: config.json).

Intercambiar datos entre un cliente (navegador) y un servidor web.

Almacenar bases de datos ligeras o datos temporales.

Leer o escribir datos en muchas aplicaciones móviles y web.

*/


let persona = {
    "nombre":"adolfo",
    "edad":17,
    "aprendiz":"true",
    "residencia": {"direccion": "cabuyal calle 3b # 7.50",
    "ciudad": "candelaria",
    "departamento": "valle del cauca"},
    "telefono": "3122146534"
}

let elementoTexto = document.getElementById('nombre');

elementoTexto.textContent = persona.nombre;