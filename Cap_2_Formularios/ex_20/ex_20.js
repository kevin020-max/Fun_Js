function saludo(){
    swal('¡Hola Mundo!')
}

function saludopersonalizado(){
    swal({
        title: 'Que tal mundo',
        text: 'Bienvenidos al curso de fundamentos javascript',
        icon: 'success',
        button: '!Engine¡'
    })
}