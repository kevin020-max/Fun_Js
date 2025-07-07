function pesta() {
    let pestan = open();
    pestan.document.writeln('Se abrio como nueva pestaña');
}

function ventana() {
    let ventana= open('','', 'width=400, heighth0250');
    ventana.document,writeln('Seabrio como una nueva pestaña')
}

function confirmar() {
    let respuesta = confirm('¿Desea salir del sitio?');
    if(respuesta == true){
        window.close();
    }
}

//Explicacion
/*let ventana= open('','', 'width=400, heighth0250');

En este caso las comillas vacias indican que no se carga una URL especifica, ademas,que debe declararse del navegador actual y crear una nueva con las dimesiones especificas.
*/

function redireccionar() {
    if(window.confirm('¿Desea salir de la pagina actual?')){
        window.location= 'https://github.com/'
    }
}

//Conteo y disponibilidad 

document.getElementById('texto').addEventListener('keyup', caracteres);

function caracteres(){
    let cant = document.getElementById('texto').value.length;
    let disponible = 20 - parseInt(cant);

    document.getElementById('cantidad').innerHTML = disponible;
    if(disponible==0){
        swal('¡Cantidad de caracteres agotados!');
    }
}