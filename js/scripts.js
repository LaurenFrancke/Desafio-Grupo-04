
function item8(){
    let produto
    let estoqueMaisValioso = listaProdutos[0].preco * listaProdutos[0].qtdEstoque;
    for(i=1; i<listaProdutos.length; i++){
        let valorEstoque = listaProdutos[i].preco * listaProdutos[i].qtdEstoque;
        if (valorEstoque > estoqueMaisValioso){
            estoqueMaisValioso = valorEstoque;
            produto = listaProdutos[i];
        } 
    }
    return (`O produto de estoque mais valioso é ${produto.descricao} tendo o valor do estoque avaliado em R$ ${estoqueMaisValioso}`)
}

var resposta8 = document.querySelector('#resposta8');
resposta8.textContent = item8();

function item9(){
    let produto 
    let estoqueMenosValioso = listaProdutos[0].preco * listaProdutos[0].qtdEstoque;
    for(i=1; i<listaProdutos.length; i++){
        let valorEstoque = listaProdutos[i].preco * listaProdutos[i].qtdEstoque;
        if ((valorEstoque > 0)&&(valorEstoque < estoqueMenosValioso)){
            estoqueMenosValioso = valorEstoque;
            produto = listaProdutos[i];
        }
    }
    return (`O produto de estoque menos valioso é ${produto.descricao} tendo o valor do estoque avaliado em R$ ${estoqueMenosValioso}`)
}

var resposta9 = document.querySelector('#resposta9');
resposta9.textContent = item9();

function item10(){
    let numeroItens
    let totalInventario = 0;
    for(i=0; i < listaProdutos.length; i++){
        totalInventario = totalInventario + listaProdutos[i].preco
        numeroItens = i;
    }
    numeroItens += 1;
    return (`O ticket médio dos produtos na loja é de R$ ${(totalInventario / numeroItens).toFixed(2)} com ${numeroItens} itens.`)
}

var resposta10 = document.querySelector('#resposta10');
resposta10.textContent = item10();

function item11(){
    let departamentos = [];
    let numDepartamento = 0;
    for (i=0; i<listaProdutos.length; i++){
        if (listaProdutos[i].departamento.idDepto != numDepartamento){
            let departamento = {
                nomeDepartamento: listaProdutos[i].departamento.nomeDepto,
                idDepartamento: listaProdutos[i].departamento.idDepto,
                totalItens: 0
            }
            departamentos.push(departamento);
            numDepartamento = listaProdutos[i].departamento.idDepto;
        }
    }
    for(i=0; i < listaProdutos.length; i++){
        for(x=0; x < departamentos.length; x++){
            if(listaProdutos[i].departamento.idDepto == departamentos[x].idDepartamento){
                departamentos[x].totalItens += listaProdutos[i].qtdEstoque;
                break;
            }
        }
    }
    return(`Lista de Departamentos: ${JSON.stringify(departamentos)}`)    
}
var resposta11 = document.querySelector('#resposta11');
resposta11.textContent = item11();

function item12(){
    let departamentos = [];
    let numDepartamento = 0;
    for (i=0; i < listaProdutos.length; i++){
        if (listaProdutos[i].departamento.idDepto != numDepartamento){
            let departamento = {
                nomeDepartamento: listaProdutos[i].departamento.nomeDepto,
                idDepartamento: listaProdutos[i].departamento.idDepto,
                totalInventario: 0
            }
            departamentos.push(departamento);
            numDepartamento = listaProdutos[i].departamento.idDepto;
        }
    }
    for(i=0; i < listaProdutos.length; i++){
        for(x=0; x < departamentos.length; x++){
            if(listaProdutos[i].departamento.idDepto == departamentos[x].idDepartamento){
                departamentos[x].totalInventario += (listaProdutos[i].preco * listaProdutos[i].qtdEstoque);
                break;
            }
        }
    }
    return(`Lista de Departamentos: ${JSON.stringify(departamentos)}`)
}
var resposta12 = document.querySelector('#resposta12');
resposta12.textContent = item12();

function item13(){
    let departamentos = [];
    let numDepartamento = 0;
    for (i=0; i < listaProdutos.length; i++){
        if (listaProdutos[i].departamento.idDepto != numDepartamento){
            let departamento = {
                nomeDepartamento: listaProdutos[i].departamento.nomeDepto,
                idDepartamento: listaProdutos[i].departamento.idDepto,
                totalInventario: 0,
                totalItens: 0,
                ticketMedio: 0
            }
            departamentos.push(departamento);
            numDepartamento = listaProdutos[i].departamento.idDepto;
        }
    }
    for(i=0; i < listaProdutos.length; i++){
        for(x=0; x < departamentos.length; x++){
            if(listaProdutos[i].departamento.idDepto == departamentos[x].idDepartamento){
                departamentos[x].totalItens += listaProdutos[i].qtdEstoque;
                departamentos[x].totalInventario += (listaProdutos[i].preco * listaProdutos[i].qtdEstoque);
                break;
            }
        }
    }
    for(i=0; i<departamentos.length;i++){
        departamentos[i].ticketMedio = departamentos[i].totalInventario / departamentos[i].totalItens;
    }
    return(`Lista de Departamentos: ${JSON.stringify(departamentos)}`)
}
var resposta13 = document.querySelector('#resposta13');
resposta13.textContent = item13();

function item14(){
    let departamentos = [];
    let numDepartamento = 0;
    for (i=0; i < listaProdutos.length; i++){
        if (listaProdutos[i].departamento.idDepto != numDepartamento){
            let departamento = {
                nomeDepartamento: listaProdutos[i].departamento.nomeDepto,
                idDepartamento: listaProdutos[i].departamento.idDepto,
                totalInventario: 0
            }
            departamentos.push(departamento);
            numDepartamento = listaProdutos[i].departamento.idDepto;
        }
    }
    for(i=0; i < listaProdutos.length; i++){
        for(x=0; x < departamentos.length; x++){
            if(listaProdutos[i].departamento.idDepto == departamentos[x].idDepartamento){
                departamentos[x].totalInventario += (listaProdutos[i].preco * listaProdutos[i].qtdEstoque);
                break;
            }
        }
    }
    const maisValioso = departamentos.sort((a,b) => b.totalInventario - a.totalInventario) 
    return(`Departamento mais valioso: ${maisValioso[0].nomeDepartamento} avaliado em R$ ${maisValioso[0].totalInventario}`) 
}
var resposta14 = document.querySelector('#resposta14');
resposta14.textContent = item14();

function item15(){
    let departamentos = [];
    let numDepartamento = 0;
    for (i=0; i < listaProdutos.length; i++){
        if (listaProdutos[i].departamento.idDepto != numDepartamento){
            let departamento = {
                nomeDepartamento: listaProdutos[i].departamento.nomeDepto,
                idDepartamento: listaProdutos[i].departamento.idDepto,
                totalInventario: 0
            }
            departamentos.push(departamento);
            numDepartamento = listaProdutos[i].departamento.idDepto;
        }
    }
    for(i=0; i < listaProdutos.length; i++){
        for(x=0; x < departamentos.length; x++){
            if(listaProdutos[i].departamento.idDepto == departamentos[x].idDepartamento){
                departamentos[x].totalInventario += (listaProdutos[i].preco * listaProdutos[i].qtdEstoque);
                break;
            }
        }
    }
    const menosValioso = departamentos.sort((a,b) => a.totalInventario - b.totalInventario) 
    return(`Departamento menos valioso: ${menosValioso[0].nomeDepartamento} avaliado em R$ ${menosValioso[0].totalInventario}`) 
}
var resposta15 = document.querySelector('#resposta15');
resposta15.textContent = item15();