angular.module("Delivare").factory('produtosAPI', function($http, config){

	var _getProduto = function(id){
		return $http.get(config.baseUrl + "/api/produtos/consultarPrecos/" + id);
	};

	var _getProdutoCep = function(cep){
		return $http.get(config.baseUrl + "/api/produtos/buscarOfertas/" + cep);
	}

	return {
		getProduto: _getProduto,
		getProdutoCep : _getProdutoCep
	}
});
