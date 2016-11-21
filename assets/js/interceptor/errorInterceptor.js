angular.module("Delivare").factory("errorInterceptor", function($q, $location){
  return{
    responseError: function(rejection){
      if(rejection.status === 404){
        $location.path("/");
      }
      return $q.reject(rejection);
    }
  }
})
