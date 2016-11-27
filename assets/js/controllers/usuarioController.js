app.controller("UsuarioController", function($http, usuariosAPI, $scope, carrinhoDeCompras, $location, $localStorage, $rootScope, $window){
/* Parte de controller que cuida da parte de login e registros de usuário! */
$scope.logado = window.localStorage.logado;
$rootScope.nomeMercado = 'Alo vc';

$scope.cadastrar = function(Cadastro){

    usuariosAPI.postInserirUsuario(Cadastro)
      .success(function(data, status, headers, config){
        console.log("Dados: ", data);
        console.log("Status: ", status);
        console.log("headers: ", headers);
        console.log("config: ", config);

    }).error(function(data, status, header, config){
    })
  };

$scope.entrar = function(Login){
    usuariosAPI.postLogarUsuario(Login).success(function(data){

      $window.localStorage.setItem('logado', true);
      $window.localStorage.perfilUsuario =  JSON.stringify(data);
      $scope.perfilUsuario = JSON.parse($window.localStorage.perfilUsuario);

      console.log("Dados obtidos depois do login: ", data);
      console.log("Dados obtidos depois do login/usuario: ", data.cliente);
      console.log("Dados obtidos do localStorage: ", $scope.perfilUsuario);

    }).error(function(data, status, header, config){

    })
  }

  $scope.deslogar = function(){
    window.localStorage.clear();
    $scope.logado = window.localStorage;
    window.location.replace("http://localhost:8080/delivare/#/");
    document.location.reload();
  }

/* Parte de controller que cuida da parte de carrinho de compras! */
  // $scope.produtoAdicionado = {}
  $scope.updateQnt = function(produto){
    console.log('produto', produto)
    // console.log('produto.estabelecimento.nome', produto.estabelecimento.nome)
    $rootScope.produtoAdicionado = produto;
    $rootScope.nomeMercado = produto.precos[0].estabelecimento.nome
    $rootScope.valorMercado = produto.preco
    $rootScope.listaDeProdutosSelecionados = carrinhoDeCompras.adicionarProdutoNoCarrinho(produto);
    console.log('$rootScope.listaDeProdutosSelecionados', $rootScope.listaDeProdutosSelecionados)
    // $rootScope.produtoAdicionado = produto;
    // $scope.nomeMercado = 'MUDEIIII';
    // $scope.$apply(function() {
    //   $scope.nomeMercado = 'FOOOIII'
    // } )
    // console.log('UPDATEEE', produto)
    // console.log('carrinhoDeCompras', carrinhoDeCompras)
  }

  // $scope.$watch('produtoAdicionado', function(newV, oldV) {
  //   // $scope.$apply($scope.produtoAdicionado)
  //   // $scope.$apply($scope.nomeMercado)
  //   console.log('newV', newV)
  //   console.log('oldV', oldV)
  // })

/*Cadastrar Usuario*/
$scope.cadastrarPerfil = function(dados){
  console.log(dados);
}
});
