// <!-- 2- O Carnaval do Cotemig celebrado hoje terá um concurso onde serão julgadas vários quesitos para determinar a fantasia campeã do Carnaval. Cada fantasia 
// é avaliada em vários quesitos; em cada quesito, cada aluno recebe cinco notas que variam de 5,0 a 10,0. 
// A nota final do aluno em um dado quesito é a soma das três notas centrais recebidas pelo aluno, excluindo a maior e a menor das cinco notas. 
// Como existem muitos alunos e muitos quesitos, você vai escrever um programa que, dadas as 5 notas, calcula a sua nota final num dado quesito. 
// Quesitos: criatividade, originalidade, elegância, acabamento e conservação. -->

let cont = 0, sum = 0, num;
        var concorrente = {
            nome: prompt('Digite o nome do aluno concorrente: '),
            notas: [],
            categoriaNotas: ['criatividade', 'originalidade', 'elegância', 'acabamento', 'conservação']
        }

        // nome = prompt('Digite o nome do aluno concorrente: ');

        while (cont < 5) {
            num = parseFloat(prompt(`Qual nota você daria para o aluno(a) ${concorrente.nome} no quesito de ${concorrente.categoriaNotas[cont]}?`));
            concorrente.notas.push(num);
            cont++;
        }

        concorrente.notas.sort(function(a, b){return a - b});
        concorrente.notas.pop();
        concorrente.notas.shift();
        sum = concorrente.notas[0] + concorrente.notas[1] + concorrente.notas[2];
        console.log(concorrente.notas);
        console.log(`A soma das notas do aluno ${concorrente.nome} foram: ${sum}`);
