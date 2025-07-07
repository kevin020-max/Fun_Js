function tiempoFinalizado() {
    alert('!Se ha agotado el tiempo¡')
}

function cuentaRegresiva() {
    let elegirSegundos = document.getElementById('tiempoCronometro').value;

    let contador = document.getElementById('contador');
    let textoTiempo = document.getElementById('txtTiempo');
    let sonidoAlarma = document.getElementById('audioAlarma');
    textoTiempo.style.display = "blueviolet";
    textoTiempo.style.display = "none";

    if(!elegirSegundos || elegirSegundos <= 0){
        alert('Ingrese un tiempo valido');
        return;
    }

    textoTiempo.style.display = "block";
    textoTiempo.textContent = "Tiempo Inicializado";
    textoTiempo.style.display = "green";

    function actualizarContador(segundosRestantes) {
        contador.textContent = segundosRestantes ;
    
        if(segundosRestantes > 0){
            setTimeout(() => actualizarContador(segundosRestantes -1), 1000);
        } else {
            document.getElementById('tiempoCronometro').value = '';
            sonidoAlarma.play()

            textoTiempo.textContent = '¡Tiempo Finalizado!';
            textoTiempo.style.color = 'blueviolet';

            setTimeout(()=> alert('¡Se ha agotado el tiempo!'), 1000);
        }
    }
actualizarContador(elegirSegundos);
}