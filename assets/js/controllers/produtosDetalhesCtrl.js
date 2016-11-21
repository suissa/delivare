app.controller('produtosController', function($scope, produto, $routeParams) {
$scope.logado = window.localStorage.logado;
$scope.produto = produto.data;
$scope.precos = produto.data[0].precos;
console.log("Produtos: ", produto.data);
console.log("Precos: ", $scope.precos);

});
