app.service("carrinhoDeCompras", function(){
  var listaDeProdutosSelecionados = [];

  var verficarSeProdutoJaEstaNoCarrinho = function(produto){
    return listaDeProdutosSelecionados.filter(function(produto){
      return produto.nome == listaDeProdutosSelecionados.nome;
    }).length > 0
  }

  function adicionarProdutoNoCarrinho(produtoSelecionado){
      var vetorDeProdutosExistentes = verficarSeProdutoJaEstaNoCarrinho(produto.nome);

      if(vetorDeProdutosExistentes.length > 0){
          vetorDeProdutosExistentes[0].quantidade++;
      }else {
        listaDeProdutosSelecionados.push({
            quantidade: 1,
            nome: produtoSelecionado.nome,
            preco:produtoSelecionado.preco
        })
      }
   }

})
