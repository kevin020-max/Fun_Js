//Ejercicio de analisis; Pedir a un usuario que digite algun tipo de valor
let a= 1;
let suma =0;
let valor;

while(a <= 2){
    valor = parseInt(prompt('ingrese dos valores númericos para sumarlos'));
    suma = suma + valor;
    a++;
}
document.writeln('La suma es: ',suma, '<br>');

//rifa
let numero;
do{
    numero = parseInt(prompt('¡Rifa!: Dame numeros entre el 1 y el 15'));

    if(numero !=5){
        document.writeln('usted dio el numero ', numero,'.', '<br>');
    }else{
        document.writeln('¡Genial! has ganado, el numero correcto era el: ',numero,'.',' Reclama tu premio');
    }
}while (numero !=5);
