angular.module("Delivare").controller("produtosCepController", function(produtosAPI, $scope){
$scope.logado = window.localStorage.logado;
  $scope.carregarProdutoPorCep = function(cep){

    if(cep != ""){
        produtosAPI.getProdutoCep(cep).success(function (data, status){

          $scope.produto = data[1].produto;
          console.log($scope.produto);

        }).catch(function(error){

            console.log("Algo deu errado", error);

        });
    }
  }
})
