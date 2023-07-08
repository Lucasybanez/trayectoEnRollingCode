let num1=parseInt(prompt("Introducza un número"));
let num2=parseInt(prompt("Introducza un número"));
document.write(perimetro(num1,num2));

function perimetro(ladoA, ladoB){
    return (ladoA*ladoB/2);
}