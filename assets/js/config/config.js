angular.module("Delivare").config(function($routeProvider, $locationProvider) {

    $routeProvider.when("/", {
        templateUrl : "./views/home.html",
        controller: "mainController"
    });

    $routeProvider.when("/produtos/:id", {
        templateUrl : "./views/produtos.html",
        controller: "produtosController",
        resolve: {
        	produto: function(produtosAPI, $route){
        		return produtosAPI.getProduto($route.current.params.id);
        	}
        }
    });

    $routeProvider.when("/perfil", {
        templateUrl : "./views/perfil.html",
        controller: "UsuarioController"
    });

    $routeProvider.when("/perfil#cadastro", {
        templateUrl : "./views/perfil.html",
        controller: "UsuarioController"
    });
});
