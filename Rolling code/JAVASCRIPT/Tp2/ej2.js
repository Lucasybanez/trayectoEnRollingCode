let ciudades=[];
let valor="";
let longitud=0;

while (valor!=null){
    valor=prompt("Ingrese una ciudad");
    if(valor!=null){
        ciudades[longitud]=valor;
    } else {
        ciudades[longitud]="París";
        break;
    }
    longitud++;
}

document.write("La longitud del arreglo es: " + (longitud+1));
document.write(`<br> El elemento en la primera posición es:  ${ciudades[0]} <br>`);
document.write(`El elemento en la tercera posición es:  ${ciudades[2]} <br>`);
document.write(`El elemento en la última posición es:  ${ciudades[longitud]} <br>`);

document.write(`<h2>Arreglo de ciudades</h2>`)
ciudades[1]="Barcelona";

for(i=0; i<longitud+1; i++){
    document.write(`Elemento: ${ciudades[i]} <br>`)
}


