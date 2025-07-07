let area = document.getElementById('comentarios')
area.style.resize='none';
function comentar(){
const comentario = document.getElementById('comentarios').value.trim();

    if(comentario.length === 0){
        swal('Usted no ha digitado ninguna letra, por favor escriba antes de enviar')
    }
    else if (comentario.length > 100){
        swal('el comentario es muy lasrgo, sintetice la idea y vueñva a escribir')
    }else {
        swal('!Gracias por sus comentarios')
    }
}
