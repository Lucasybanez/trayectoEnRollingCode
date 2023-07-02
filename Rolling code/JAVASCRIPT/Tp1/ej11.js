/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
que decir todos por los que es divisible)
*/

let num= prompt("Ingrese un número");

if(num%2==0){
    document.write("El número es divisible en 2");
    verDivisivilidad(num,3);
    verDivisivilidad(num,5);
    verDivisivilidad(num,7);
} else if(num%3==0){
    document.write("El número es divisible en 3");
    verDivisivilidad(num,5);
    verDivisivilidad(num,7);
} else if(num%5==0){
    document.write("El número es divisible en 5");
    verDivisivilidad(num,3);
    verDivisivilidad(num,7);
} else if(num%7==0){
    document.write("El número es divisible en 7");
    verDivisivilidad(num,3);
    verDivisivilidad(num,5);
}

function verDivisivilidad(numero , div){
    if(numero%div==0){
        document.write(" y también divisible por " + div)
    }
}