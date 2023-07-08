detectarMoM(prompt("Ingrese algo"));

function detectarMoM(cadena){
    if(cadena==cadena.toLowerCase()){
        document.write("Es una cadena en minúscula");
    } else if (cadena==cadena.toUpperCase()){
        document.write("Es una cadena en mayúscula");
    } else {
        document.write("Es una cadena con mezcla de Mayúsculas y minúsculas");
    }
}