app.controller("UsuarioController", function($http, usuariosAPI, $scope, carrinhoDeCompras, $location, $localStorage, $rootScope){
/* Parte de controller que cuida da parte de login e registros de usuário! */
$scope.logado = window.localStorage.logado;
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
          const dados = $localStorage.$default({
             nome: data.nome,
             email: data.email,
             celular: data.celular
           });

          window.localStorage.setItem("logado", true);
          console.log(data);
          $scope.logado = window.localStorage.logado;
          $rootScope.usuario = dados;

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

  $scope.updateQnt = function(produto){
      //carrinhoDeCompras.adicionarProdutoNoCarrinho(produto);
  }

/*Buscar o Endereço na pagina de cadastro do perfil*/
$scope.buscarEndereco = function(cep){
  $scope.mostrarAguarde = true;
  usuariosAPI.getEnderecoCep(cep).success(function(data){
    $scope.endereco = data;
  });
}
});
