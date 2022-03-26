var vetNum = [];
var i = 0;
var vetpares = [];
var vetimpares = [];
var x = 0;
var retornoPar = 0;
var numerosPares = 0;
var buscarNumerosPares;

while(x < 3){
    vetNum.push = parseInt(prompt("Tap some numbers: "));
    x++;
}

function buscarNumerosPares (vetNum) {
    if (vetNum % 2 == 0) 
    return vetNum;
}
var numerosPares = vetNum.filter(buscarNumerosPares);
    console.log(numerosPares);