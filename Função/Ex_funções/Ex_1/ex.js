let vetIdade =[]; x = 0;
        var somaI=0;
        var media = 0, contI=0, contR=0, contB=0;
        let vetNota = []; y = 0; z=0;
        
        
        while(x <= 10){
            vetIdade[x] = parseInt(prompt("Digite sua idade:"));
            vetNota[x] = parseInt(prompt("Oque você achou do filme, digite 1 para regular, 2 para bom, 3 para otimo: "));
        
            if(vetNota[x]==3){
        
                       somaI=somaI+vetIdade[x];
                       contI++;
            } else if(vetNota[x]==1){
                contR++;
            } else{
                contB++;
            }
            x++;
        }
        media=somaI/contI;
        
        perc=((contB*100)/10)
        console.log("O valor da media da idade " + media + " anos");
        console.log("A quantidade de pessoas que responderam regular é:" + contR);
        console.log("A porcentagem de pessoas que responderam bom é:" + contB);
    