angular.module("Delivare").factory("loadingInterceptor", function($q, $rootScope, $timeout){
  return{
    request: function(config){
      $rootScope.loading = true;
      return config;
    },
    requestError: function(rejection){
      $rootScope.loading = false;
      return $q.reject(rejection);
    },
    requestError: function(response){
      $setTimeout(function () {
        $rootScope.loading = false;
      }, 10);
      return response;
    },
    requestError: function(rejection){
      $rootScope.loading = false;
      return $q.reject(rejection);
    }
  }
});
