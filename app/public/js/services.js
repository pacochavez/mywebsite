(function () {
    angular.module('biografia.services', [])
    .factory('addServices', ['$http','$q',function ($http, $q) {
        function post(data) {
            var url ='/modulos/'
            var deferred = $q.defer();
            $http   
            .post(url,data)
            .then(function(response){
                deferred.resolve(response);
            },function(response){
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        function put(data) {
            var url = '/modulos/'+data.url;
            var deferred = $q.defer();
            $http   
            .put(url,data)
            .then(function(response){
                deferred.resolve(response);
            },function(response){
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        function get(data) {
            var url = '/data/'+data;
            var deferred = $q.defer();
            $http   
            .get(url)
            .then(function(response){
                deferred.resolve(response);
            },function(response){
                deferred.resolve(response);
            });
            return deferred.promise;
        }

        return {
            post: post,
            put: put,
            get: get
        };
    }]);
})(); 