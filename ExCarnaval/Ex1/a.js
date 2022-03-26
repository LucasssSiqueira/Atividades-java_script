var packs = parseInt(prompt("Qantos packs de bebidas foram consumidos? "));
    
function executaOperacao(packs){
 var litros = ((packs * 12) * 350)/1000;
 return litros;
}
var litros = executaOperacao(packs);
alert("Quantidade de litros de bebidas consumidas "+ litros +"L");

function Gastos(packs){
    var gastos = (packs * 38);
    return gastos;
}

var gastos = Gastos(packs);
alert ("Os gasto total foi de: R$"+ gastos.toFixed(2));
