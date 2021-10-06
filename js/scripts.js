
//inicio da questão 01
function item01(){
        let totalEstoque = 0
        for (var i = 0; i < listaProdutos.length; i++) {
            totalEstoque = totalEstoque + listaProdutos[i].qtdEstoque
        }
        console.log(`a quantidade total de produtos em estoque é de ${totalEstoque}`)
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
    console.log(`A quantidade de itens em destaque é de ${itemDestaque}`)
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
    console.log(`A quantidade de itens disponiveis é de ${itemDisponivel}`)
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
    console.log("Total de produtos em estoque disponíveis e em destaque = "+total);
}

var resposta04 = document.querySelector('#resposta04');
resposta04.textContent = item04();
//final da questão 04