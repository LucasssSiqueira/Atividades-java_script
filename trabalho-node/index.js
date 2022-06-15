import { promises as init } from "fs";

async function criarFuncao() {
    let data = await init.readFile("./Estados.json");
    const estados = JSON.parse(data)


    data = await init.readFile("./Cidades.json")
    const Cidades = JSON.parse(data);


    for (var estado of estados) {
        const UFcreate = Cidades.filter(cidade => cidade.Estado == estado.ID)
        await init.writeFile(`./Estados/${estado.Sigla}.json`, JSON.stringify(UFcreate))
    }

}

async function ContarUF(uf) {
    let data = await init.readFile(`./Estados/${uf}.json`);
    const Cidades = await JSON.parse(data);
    console.log(Cidades.length);
}


//função que conta a quantidade de estados
async function MoreAndLess() {
    const estados = JSON.parse(await init.readFile("./Estados.json"));
    var listaUf = [];

    for (var estado of estados) {
        var contar = await init.readFile(`./Estados/${estado.Sigla}.json`);
        contar = JSON.parse(contar)
        listaUf.push({ uf: estado.Sigla, count: contar.length });
    }

    listaUf.sort((a, b) => {
        if (a.count < b.count) return 1;
        else if (a.count > b.count) return -1;
        else return 0
    })
    listaUf = listaUf.splice(0, 5)
    console.log(listaUf)
}

//função para mostrar cada estado e cidades em suas regiões especificas
async function Regiao() {
    let info = await init.readFile("./Estados.json");
    const estados = JSON.parse(info);
    info = await init.readFile("./Cidades.json");
    const cidades = JSON.parse(info);
    info = await init.readFile(`./capitais.json`)
    const capitais = JSON.parse(info)

    estados.forEach(element => {
        var regiaoAtual = null;
        var vetor = [];
        capitais.forEach(elemento => {
            if (element.Nome === elemento.Estado) {
                regiaoAtual = elemento.Região
            }
        })
        cidades.forEach(elemento => {
            if (elemento.Estado == element.ID) {
                vetor.push(elemento)
            }

        });
        init.writeFile(`./Regioes/${regiaoAtual}/${element.Sigla}.json`, JSON.stringify(vetor, null, 2))
    })


}

criarFuncao()
ContarUF('MG')
//MoreAndLess()
Regiao()