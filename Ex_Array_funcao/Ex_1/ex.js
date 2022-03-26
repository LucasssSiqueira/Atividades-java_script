var vetNum = [], vetPositivo = [], x = 0, retorno = 0;
while (x < 10){
    vetNum[x] = parseInt(prompt("Digite vários números"));
    x++;
} 
function Positivo(vetNum){
    for (i = 0; i < 10; i++){
        if((vetNum[i] > 0)){
            vetPositivo[i] = vetNum[i];
        }
    }
    return (vetPositivo);
}

retorno = Positivo(vetNum);

for (i = 0; i < 10; i++){
    console.log("Resultado: " + retorno[i]);
}