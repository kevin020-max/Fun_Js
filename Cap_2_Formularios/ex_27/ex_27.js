function comenzar() {
    setTimeout(cumplido, 5000);
}

function cumplido() {
    swal('¡Se agotó el tiempo');
}

function iniciar() {
    let elegirSegundos = document.getElementById('tiempoElegido').value;
    setTimeout(finalizado, 1000 * elegirSegundos);
}

function finalizado() {
    swal ('¡Se ha agotado el tiempo!')
}

//cuenta regresiva
function cuentaRegresiva(){
    let elegirSegundos= document.getElementById("tiempoCronometro").value;
    let contador= document.getElementById("contador");
    let textoTiempo= document.getElementById("txtTiempo");
    textoTiempo.style.color = "blueviolet";


    textoTiempo.style.display = "none"; //No mostrar el texto de inicio

    if(!elegirSegundos || elegirSegundos <= 0){
        swal("Por favor ingrese un tiempo valido.");
        return
    }
    //Cambiar texto indicando que el temporizador ha iiciado
    textoTiempo.style.display= "block"; //Mostrar el texto
    textoTiempo.textContent= "¡Tiempo inicializado";
    textoTiempo.style.clor = "green";

    //Inica la cuenta regresiva
    function actualizarContador(segundosRestantes) {
        contador.textContent= segundosRestantes;

        if(segundosRestantes > 0) {
            setTimeout(() => actualizarContador(segundosRestantes-1),1000);
        }else {
            textoTiempo.textContent= "¡Tiempo Finalizado!";
            textoTiempo.style.color= "blueviolet";
            swal("se ha agotado el tiempo!");

            //vaciar el campo de entrada
            document.getElementById("tiempoCronometro").value ="";
        }
}
actualizarContador(elegirSegundos);
}