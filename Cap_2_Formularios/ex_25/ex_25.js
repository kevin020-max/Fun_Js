function focalizar(){
    document.getElementById('nombre').value='';
    document.getElementById('nombre').style.border='';
    document.getElementById('nombre').style.borderRadius='8px';
}

function ValidarVacios(){
    if (document.getElementById('nombre').value == ''){
        document.getElementById('nombre').style.border='2px solid red';
        document.getElementById('nombre').style.borderRadius = '8xp';
    swal('Debe ingresar el nombre')
    }
}