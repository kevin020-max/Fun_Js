/*POO


Los paradigmas principalmente que dan pasoa la POO son con Estado, junto con el imperatvo y el Declarativo

Pilares ed la Programacion Orietada a Objetos

Abstraccion: Oculta detalles internos y muestra las caracteristicas relevantes.

Encapsulamiento: Protege los datos de un objeto para evitar accesoss indebidos, promoviendo el uso de metodos públicos para interactuar con ellos.

Herencia: Permite que una clase reutilice los atributos y métodos de otra, promoviendo la extension y la personalizacion

Polimorfidmo: Habilidad de un metodo o funcion para coportarse de diferentes maneras segun el objeto o los argumentos con los que interactua
*/ 

class Vehiculo {
    constructor(marca, modelo, color, año){
        this.marca = marca,
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.encendido = false;
    }
    encender (){
        this.encendido = true;
        console.log (`${this.marca} ${this.modelo} está encendido`);
    }
    apagar() {
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} está apagado`);
    } 
    tocarBocina() {
        this.encendido = false;
        console.log("¡Beep Beep!");
    } 
    mostrarInfo(){
        console.log(`vehiculo: ${this.marca} ${this.modelo} ${this.año}) - color: ${this.color}`)
    }
}    

//crear instancia 
const miAuto = new Vehiculo("Toyota", "Corolla", "Rojo", 2020)

//Probar los metodos 
miAuto.mostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

//clase Animal
class Animal{
    constructor(nombre, especie, sonido){
        this.nombre = nombre;
        this.especie = especie;
        this.sonido = sonido;
    }
    hacerSonido (){
        console.log(`${this.nombre} dice: ${this.sonido}`);
    }
    describir (){
        console.log(`${this.nombre} es un: ${this.especie}`);
    }
}

//crear instancia
const miPerro = new Animal("Bruno","perro","Guau Guau");
const miGato = new Animal("karin", "Gato", "Miauuwww");

//Probar los metodos
miPerro.describir();
miPerro.hacerSonido();

miGato.describir();
miGato.hacerSonido();

const auto = new Vehiculo("Ford", "Mustang", "Azul", 2024);
miAuto.mostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

const perro = new Animal("Rox", "Perro", "Guauu");
miPerro.describir();
miPerro.hacerSonido();

const gato = new Animal("Sáfiro", "Gato", "Miauu");
miGato.describir();
miGato.hacerSonido();