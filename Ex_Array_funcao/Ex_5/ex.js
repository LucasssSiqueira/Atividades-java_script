var verify = 0 ;
        var m = 0;
        var num = 0;
        var variavel = true;
        var retorno = 0;

        while(variavel){
            var num = parseInt(prompt("Digite um número: "));
            if((num == 0)){
                variavel = false;
            }

            function verify(num){
                if((num % 3 == 0)  && (num % 5 == 0)){
                    m = alert("Divisivel por 3 e 5")
                } else{
                 m = alert(" Não divisivel por 3 e 5")
                }
                return;
                
               
        }  
        var retorno = verify(num);
         alert("Result "+ retorno);
        
       
            
        }