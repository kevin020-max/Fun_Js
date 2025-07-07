/*Promesas solicitudes y repusestas

Teoria
Peticiones:

GET. Se utiliza para obtener informacion de un servidor.
POST. Se utiliza para enviar iformacion al servidor.
PUT. Se utiliza para actualizar un recurso en un servidor.
DELETE. Se utiliza para eliminar un recurso que se encuentra en un servidor.

Respuesta:

Las respuestas a estas peticiones y/o solicitudes http van a traer consigo un código de estado
http. Estos códigos son números que indican cuál ha sido el resultado de las solicitudes y los
códigos más comunes que se pueden recibir son:

El código 200 para indicar que la respuesta fue completada exitosamente.
El código 201 que indica cuando un elemento se ha creado en caso de que se haya solicitado eso.
El código 204 que significa que la respuesta ha venido sin contenido.
El código 400 que quiere decir que es una solicitud incorrecta.
El código 401 que significa que la solicitud no fue autorizada por el servidor al que se le está pidiendo.

200 Respuesta completada
201 Elemento creado
204 Respuesta vacía
400 Mal solicitado
401 No autorizado


Resumen:
Las prmesas y las solicitudes http on muy importantesen javaScript para poder manejar la asincronia y la comunicacion con servidores externos y con ellos se pueden crear aplicacioones dinamicas responsivasque puedan actualizarse y cambien en tiempo real sin bloquear la ejecucion del resto de las aplicaciones.


Catch: La funcionalidad catch es u metodo que se utiliza en promesas para manejar posibles errores, es una forma de atrapar a cualquier error que ocurra en el codigo dentro de una promesa y realizar una accion especifica en caso que ocurra dicho error. */

// letdatosJson:
// fetch('/Cap_4_JSON/ex_32/biblioteca.json')
//     .then(res => res.json())
//     .then((salida) => {
//          datosJson = salida;
//          let elementoTexto = document.getElementById('titulo');
//          elementoTexto.textContent = datosJson.biblioteca[10].titulo;
//      })

let datosJson;
fetch('/Cap_4_JSON/ex_32/biblioteca.json')
    .then(res => res.json())
    .then((salida) => {       
        const contenedor = document.getElementById('contenedor');
        salida.biblioteca.forEach((libro, index) => {
            const divlibro = document.createElement('div');
            divlibro.innerHTML = `
            <h3>Libro ${index + 1}</h3>
            <p><strong>Titulo:</strong> ${libro.titulo || 'No definido'}</p>
            <p><strong>Editorial:</strong> ${libro.editorial || 'No definido'}</p>
            <p><strong>Edicion:</strong> ${libro.edicion || 'No definido'}</p>
            <p><strong>ISBN:</strong> ${libro.isbn || 'No definido'}</p>
            <p><strong>Autor principal:</strong> ${libro.autores["autor principal"] || 'No definido'}</p>
            <p><strong>Codigo SENA:</strong> ${libro["codigo sena"].join(', ') || 'No definido'}</p>
            <p><strong>Descripcion:</strong> ${libro.descripcion || 'No definida'}</p>
            <hr>
            `;
            contenedor.appendChild(divlibro)
        });
    })
.catch(error => alert("Error: "+ error));