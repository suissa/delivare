angular.module("Delivare").factory('usuariosAPI', function($http, config){

	var _postInserirUsuario = function(usuario){
			var data = {
						nome: usuario.nome,
						login: usuario.email,
						senha: usuario.senha,
						cliente: {
							nome: usuario.nome,
							cpf: 99999999999,
							email: usuario.email,
							telefone: usuario.telefone,
							celular: usuario.telefone,
							endereços:[]
						}
			}

			var config = {
				headers:{
					'Content-Type': 'application/json'
				}
			}
			return $http.post('http://backend.apps.delivare.com.br/api/usuarios/inserirUsuario', data, config);
}

	var _postLogarUsuario = function(Login){
			var data = Login;

			var config = {
				headers:{
					'Content-Type': 'application/json'
				}
			}
			return $http.post('http://backend.apps.delivare.com.br/api/usuarios/efetuarLogin', data, config);
	};




	return {
		postInserirUsuario: _postInserirUsuario,
		postLogarUsuario: _postLogarUsuario
	}
});
