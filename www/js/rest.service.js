(function () {

  function RestService($http, $q) {

    this.getPosts = function getPosts(categoryId) {
        var defer = $q.defer();
        $http.get(this.postUrl)
          .then(function successCallback(response){
            defer.resolve(response);
        }, function errCallback(reason){
              defer.reject(reason);
        });
        return defer.promise;
    };
  }

  angular.module('starter.services')
       .service('RestService', ['$http', '$q', RestService]);
})();