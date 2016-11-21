app.controller('mainController', function($scope, $http, produtosAPI, categoriesAPI, $timeout) {

    var carregarCategorias = function(){
        categoriesAPI.getCategories().success(function (data){
            $scope.categories = data;

        }).catch(function (error){
            console.log("Algo deu errado: ", error);
        })
    }

    $scope.carregarProdutoPorCep = function(cep){

      carregarProdutos(cep);
    }

    carregarProdutos = function(cep){
      if(cep != undefined){

        jQuery(".modal, .modal-backdrop.in").hide();
        jQuery("#carregando").show();

          produtosAPI.getProdutoCep(cep).success(function (data){
            $timeout(function () {
              $scope.produtos = data;
              jQuery("#carregando").hide();
            }, 1000);

          }).catch(function(error){

              console.log("Algo deu errado", error);

          });
      }
    }


    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    // $timeout(function () {
    //   carregarCategorias();
    // }, 5000);

    carregarCategorias();
    carregarProdutos();

});
