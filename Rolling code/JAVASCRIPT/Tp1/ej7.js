/*
Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.
*/

let num1, num2, num3;
num1= parseInt(prompt("Ingrese el 1er número"));
num2= parseInt(prompt("Ingrese el 2do número"));
num3= parseInt(prompt("Ingrese el 3er número"));

if(num1>num2){
    document.write("El número " + num1 + " es mayor");
} else {
    if(num2>num3){
        document.write("El número " + num2 + " es mayor");
    } else {
        document.write("El número " + num3 + " es mayor");
    }
}
