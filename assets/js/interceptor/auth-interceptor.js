angular.module("Delivare").factory("authInterceptor", function($q, $location){
  return{
    request: function(config){
      config.headers = config.headers || {};
      if(window.localStorage.getItem('token')){
        config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
      }

      return config;
    },
    responseError: function(rejection){
      if(rejection.status === 401 || rejection.status === 403){
        $location.path('/error/nao-autorizado');
      }
      return $q.reject(rejection);
    }
  };
})
