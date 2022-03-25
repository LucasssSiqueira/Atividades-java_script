salario = parseFloat(prompt("Digite seu salário atual: "));
newSalario = 0;
reajuste = 0;
ValorAumento = 0;

if((salario <= 1080)){
     alert("Salário Atual: "+ salario);
    alert("Percentual de aumento: 20%");
    ValorAumento = salario*0.20;
    alert("Valor do aumento: " + ValorAumento);
    newSalario = salario + ValorAumento;
    alert("Novo Salário: R$" + newSalario.toFixed(2))

} else if((salario> 1080) && (salario<= 1700)){
    alert("Salário Atual: R$"+ salario.toFixed(2));
    alert("Percentual de aumento: 15%");
    ValorAumento = salario*0.15;
    alert("Valor do aumento: " + ValorAumento);
    newSalario = salario + ValorAumento;
    alert("Novo Salário: R$" + newSalario.toFixed(2))

} else if ((salario>1700) && (salario<=2500)){
    alert("Salário Atual: R$"+ salario.toFixed(2));
    alert("Percentual de aumento: 10%");
    ValorAumento = salario*0.10;
    alert("Valor do aumento: " + ValorAumento);
    newSalario = salario + ValorAumento;
    alert("Novo Salário: R$" + newSalario.toFixed(2))
    
} else{
    alert("Salário Atual: R$"+ salario.toFixed(2));
    alert("Percentual de aumento: 5%");
    ValorAumento = salario*0.05;
    alert("Valor do aumento: " + ValorAumento);
    newSalario = salario + ValorAumento;
    alert("Novo Salário: R$" + newSalario.toFixed(2))
}
