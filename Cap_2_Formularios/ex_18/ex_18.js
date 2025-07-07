let control = 0;
let contraseña ='santo_seña';

function verificar(){
    let clave = document.getElementById('clave').value;

if(clave !=contraseña || clave ==''){
    alert('Contraseña incorrecta o vacia, intentalo de nuevo');
        control++;

            if (control>=3){
            alert('Agoto el numero de intentos permitidos, acceso bloqueado... conectate a soporte tecnico');
            }
        }else {
        window.open('https://www.google.com');
    }
}
