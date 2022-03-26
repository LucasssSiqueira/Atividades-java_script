var vetNum = [], vetPositivo = [], x = 0, retorno = 0, maior = 0, retornoMaior = 0;
while (x < 10){
    vetNum.push(parseInt(prompt("Digite vários números")));
    x++;
} 

function Positivo(vetNum){
    casasPositivo=0
    for (i = 0; i < vetNum.length; i++){
        if((vetNum[i] > 0)){
            vetPositivo[casasPositivo] = vetNum[i];
            casasPositivo++
        }
    }
    return (vetPositivo);
}
function maiorNum(vetNum){
    for (i = 0; i < vetPositivo.length; i++ ){
        if((vetPositivo[i]>maior)){
           maior = vetPositivo[i];
        }
    }
    return (maior)
}
positivo = Positivo(vetNum)
retornoMaior = maiorNum(positivo)
console.log(positivo);
console.log(retornoMaior)
