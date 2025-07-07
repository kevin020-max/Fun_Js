let elementoSegundos = document.getElementById('tiempoElegido');
let elementotextoAlarma = document.getElementById('textoAlarma');
let elementoSonidoAlarma = document.getElementById('audioAlarma');

function comenzarTiempo() {

    let tiempoEnSegundos = elementoSegundos.value;
    if (tiempoEnSegundos <= 0){
        alert("Por faor ingrese un tiempo valido");
        return;
    
    }

    setTimeout(tiempoCumplido, 1000 * tiempoEnSegundos);
}

function tiempoCumplido() {
    elementotextoAlarma.style.color = "green";
    elementoSonidoAlarma.play();
    elementoSegundos.value = '';
}

function comenzarReloj() {
    setInterval(tictac, 1000);
}

function tictac() {
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = String(tiempoActual.getMinutes()).padStart(2,'0');
    let segundos = String(tiempoActual.getSeconds()).padStart(2,'0');

    let formato12 = hora % 12 || 12;
    let ampm = hora >= 12 ? 'PM' : 'AM';

    let textoHora = formato12 + ':' + minutos + ':' + segundos + ' ' + ampm;
    
    elementotextoAlarma.textContent = textoHora;
}