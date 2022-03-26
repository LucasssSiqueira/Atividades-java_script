var x = 0, x = 0, vetNum = [];

        while(x < 5){
             vetNum.push(parseInt(prompt("tap some numbers: ")))
             x++; 
        }

         vetNum.sort (function Ordenação(a,b){
             if(a>b)
                 return 1;
              if(a < b)
                 return -1;
            return 0;
        });

        console.log(vetNum)
