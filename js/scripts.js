
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