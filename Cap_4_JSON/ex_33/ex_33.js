/*ACceder a archivos JSON con fetch*/

let datosJson;

fetch('/Cap_4_JSON/ex_32/biblioteca.json')/*Ruta donde se encuentra ubicadoel archivo*/
    .then(res => res.json())/*La funcion then son promesas que se van a ejecutar automaticamente una vez que la promesa se haya resuelto exitosamente (200). Es decir, que se ejecutará cuando reciba la respuesta*/
    .then((salida) => {
        /*Esta funcion se va a ejecutar una vez que la primera promesa se haya resuelto.*/
        datosJson = salida;
        /*Se almacena en la variable el propio JSON Parseado para mostrarlo.*/
        let elementoTexto = document.getElementById('titulo');/*se    obtiene el ID para mostrarlo.*/
        elementoTexto.textContent = datosJson.biblioteca[10].titulo;/*se muestra lo que se necesita del objeto JSON.*/
})