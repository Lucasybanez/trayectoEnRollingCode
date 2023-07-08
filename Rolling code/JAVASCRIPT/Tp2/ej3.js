//console.log(Math.floor(Math.random()*7));
let sumaDados=[];
let apariciones=[12];
for (let index = 0; index < 12; index++) {apariciones[index]=0;}

for (let i = 0; i < 50; i++) {
    num=(Math.floor(Math.random()*7))+(Math.floor(Math.random()*7));
    num==0||num==1? num=2 : num=num;
    sumaDados[i]=num;
    apariciones[(num-1)]=apariciones[(num-1)]+1;
}

for (let i = 1; i < apariciones.length; i++) {
    document.write(`Suma ${i+1} apareció ${apariciones[i]} veces <br>`);
}
