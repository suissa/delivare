app.controller("UsuarioController", function($http, usuariosAPI, $scope, carrinhoDeCompras, $location, $localStorage){
/* Parte de controller que cuida da parte de login e registros de usuário! */
  $scope.cadastrar = function(Cadastro){

    usuariosAPI.postInserirUsuario(Cadastro)
        .success(function(data, status, headers, config){
          console.log("Dados: ", data);
          console.log("Status: ", status);
          console.log("headers: ", headers);
          console.log("config: ", config);

    }).error(function(data, status, header, config){
          console.log("Dados: ", data);
          console.log("Status: ", status);
          console.log("headers: ", header);
          console.log("config: ", config);
    })
  };

$scope.entrar = function(Login){
    usuariosAPI.postLogarUsuario(Login)
        .success(function(data, status, headers, config){
          var dados = $localStorage.$default({
            login: data.login,
            senha: data.senha,
            logado: true,
            nome: data.nome,
            celular: data.cliente.celular,
            cpf: data.cliente.cpf,
            email: data.cliente.email
          });

          $scope.usuario = true;
          $scope.usuario = dados;
          $location.path('/perfil');
          console.log("Dados vindos de data: ", $scope.usuario);
          console.log("Dados vindos de $localStorage: ", $localStorage);
          console.log("Dados vindos de $localStorage: ", $localStorage.logado);

    }).error(function(data, status, header, config){

          console.log("Dados: ", data);
          console.log("Status: ", status);
          console.log("headers: ", header);
          console.log("config: ", config);
    })
  }

  $scope.deslogar = function(){

    $scope.logado = false;
    $location.path('/');
  }

/* Parte de controller que cuida da parte de carrinho de compras! */

  $scope.updateQnt = function(produto){
      //carrinhoDeCompras.adicionarProdutoNoCarrinho(produto);
  }

});
