var lista = [];
        var pares = 0;
        var impares = 0;
        var soma_pares = 0;
        var multiplicao_impares = 1;
        var cont = 1;
        let num = 0;

        for(cont = 1; cont<= 10; cont++){
            num = parseInt(prompt("Digite o  um número: "));
            lista.push(num);

            if((num % 2 == 0)){
                var soma_pares = parseInt(soma_pares += num);     
            }else{
                var multiplicao_impares = parseInt(multiplicao_impares = multiplicao_impares * num );
            }
        }   alert("A soma dos números pares é: "+ (soma_pares)); 
            alert("A multiplicação dos números ímpares é: "+ (multiplicao_impares));
