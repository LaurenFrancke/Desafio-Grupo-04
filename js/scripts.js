
//inicio da questão 01
function item01(){
        let totalEstoque = 0
        for (var i = 0; i < listaProdutos.length; i++) {
            totalEstoque = totalEstoque + listaProdutos[i].qtdEstoque
        }
        return (`a quantidade total de produtos em estoque é de ${totalEstoque}`)
    }

var resposta01 = document.querySelector('#resposta01');
resposta01.textContent = item01();
//final da questão 01

//inicio da questão 02
function item02(){
    let itemDestaque = 0
    for (var i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].emDestaque === 'sim') {
            itemDestaque = itemDestaque + listaProdutos[i].qtdEstoque
        } else {
        }
    }
    return (`A quantidade de itens em destaque é de ${itemDestaque}`)
}

var resposta02 = document.querySelector('#resposta02');
resposta02.textContent = item02();
//final da questão 02

//inicio da questão 03
function item03(){
    let itemDisponivel = 0
    for (var i = 0; i < listaProdutos.length; i++) {
        if (listaProdutos[i].disponivel === 'sim') {
            itemDisponivel = itemDisponivel + listaProdutos[i].qtdEstoque
        } 
    }
    return (`A quantidade de itens disponiveis é de ${itemDisponivel}`)
}

var resposta03 = document.querySelector('#resposta03');
resposta03.textContent = item03();
//final da questão 03

//inicio da questão 04
function item04(){
    var total = 0;
    for (i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.emDestaque == "sim" && produto.disponivel == "sim"){
            total += produto.qtdEstoque;
        }
    }
    return ("Total de produtos em estoque disponíveis e em destaque = "+total);
}

var resposta04 = document.querySelector('#resposta04');
resposta04.textContent = item04();
//final da questão 04

//inicio da questão 05
function item5(){
    var totalInventario=0;
    for(i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        totalInventario = totalInventario + produto.qtdEstoque * produto.preco;
    }
    return ("Valor total do inventário da empresa é R$ "+totalInventario);
}

var resposta5 = document.querySelector('#resposta05');
resposta5.textContent = item5();
//final da questão 05

//inicio da questão 06
function item6(){
    let produtoMaisCaro = listaProdutos[0];
    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.preco > produtoMaisCaro.preco){
            produtoMaisCaro = produto;
        }
    }
    return ("Produto mais caro da empresa é o "+produtoMaisCaro.descricao+ " cujo preço é R$ "+produtoMaisCaro.preco);
}

var resposta6 = document.querySelector('#resposta06');
resposta6.textContent = item6();
//final da questão 06

//inicio da questão 07
function item7(){
    let produtoMaisBarato = listaProdutos[0];
    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        if (produto.preco < produtoMaisBarato.preco){
            produtoMaisBarato = produto;
        }
    }
    return ("Produto mais barato da empresa é o "+produtoMaisBarato.descricao+ " cujo preço é R$ "+produtoMaisBarato.preco);
}

var resposta7 = document.querySelector('#resposta07');
resposta7.textContent = item7();
//final da questão 07

