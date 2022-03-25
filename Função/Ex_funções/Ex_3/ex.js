anoLetivo();
function anoLetivo(){
var nota = [];
var SomaTotal = 0;
var cont = 0;
var recuperacao = 0;

for (cont = 0; cont <= 3; cont++){
 nota = parseFloat(prompt("Nota "+ (cont+1)));
 var SomaTotal = SomaTotal + nota;
}if(( SomaTotal < 60 )){
 alert("Aluno em Recuperação!!!!")
     recuperacao = parseFloat(prompt("Nota Recuperacao: "))
 }else{
     alert("Nota Final: " + SomaTotal)
 }}
