angular.module("Delivare").service("categoriesAPI", function($http, config){
	this.getCategories = function(){
		return $http.get(config.baseUrl + "/api/generos/consultarGenerosPai/");
	}
});
