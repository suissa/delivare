app.controller('produtosController', function($scope, produto, $routeParams) {

$scope.produto = produto.data;
$scope.precos = produto.data[0].precos;
console.log("Dados: ", produto.data[0].precos);

});
