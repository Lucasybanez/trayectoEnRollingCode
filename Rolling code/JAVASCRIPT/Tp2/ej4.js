document.write(`<h2>${parOno(parseInt(prompt("Ingrese un número")))}</h2>`);

function parOno(num){
    let resultado="";
    num%2==0 ? resultado="par" : resultado="impar";
    return resultado;
}