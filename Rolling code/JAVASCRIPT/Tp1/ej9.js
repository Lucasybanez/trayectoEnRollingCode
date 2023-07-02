/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/

let mensaje=prompt("Ingrese un mensaje");
let msjVocales="";

let j = mensaje.length;
for(let i=0; i<mensaje.length ; i++){
    let msjParical= mensaje.substring(i,i+1)
    console.log(msjParical);

    if (msjParical=="a" || msjParical=="e" || msjParical=="i" || msjParical=="o" || msjParical=="u"){
        msjVocales= msjVocales+msjParical;
    }
}

document.write("Las vocales del mensaje son: " + msjVocales);