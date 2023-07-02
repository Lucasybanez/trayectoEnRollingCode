/*
Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.
*/

let num1, num2;
num1= parseInt(prompt("Ingrese el 1er número"));
num2= parseInt(prompt("Ingrese el 2do número"));

if(num1>num2){
    document.write("El número " + num1 + " es mayor");
} else {
    document.write("El número " + num2 + " es mayor");
}
