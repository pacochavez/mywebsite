(function (){
  angular.module('biografia.controllers', [])
    .controller('MainController', ['$http', '$scope','$location','$stateParams', function ($http,$scope,$location,$stateParams) {
   // if($scope.result == undefined){
       
        $http.get('/data/modulos').then(
          function(data){
            $scope.modules = data.data;
            console.log(data)
          },
          function(data){})
          
        
     // }
    
     

    }])
    .controller('SubmitController',['$http','$scope','addServices',function($http,$scope,addServices){
           $http.get('/data/year').then(
          function(data){
            $scope.years = data.data;
            console.log(data)
          },
          function(data){})
          $http.get('/data/icons').then(
          function(data){
            $scope.icons = data.data;
            console.log(data)
          },
          function(data){})
          $http.get('/data/networks').then(
          function(data){
            $scope.networks = data.data;
            console.log(data)
          },
          function(data){})

            $scope.H={year:'',url:'',form:'T',id:{year:''}};
            $scope.M ={send:{name:"",link:""}}
            $scope.$watch('M.send.name', function() {
                $scope.M.send.link = $scope.M.send.name.toLowerCase().replace(/\s+/g,'-');
            });

        $scope.selectYear=function(y,id){
            $scope.H.url = id;
            $scope.H.year = y;
            $scope.H.id.year =y;
        }
        $scope.postmodulo =function(M){
          
          M.send.published_time = new Date();
          M.send.modified_time = new Date();
          M.send.updated_time = new Date();
          $scope.submit(M,1);
        }        
         
      $scope.submit = function(data,action){
        switch(action){
          case 1:
            addServices.post(data)
            .then(function (response) {
             console.log(response);
            // $scope.response  = data.data.result;
            });
            break;
          case 2:
            addServices.put(data)
            .then(function (response) {
             console.log(response);
            // $scope.response  = data.data.result;
            });
            break;
          case 3:
            break;
          case 4:
            break;
      }
    }  
}])
.controller('AboutmeController',['$http','$scope',function($http,$scope){
  if($scope.All_timeline == undefined){

    $scope.LEFT = true;
   $http.get('/data/time-line')
      .then(function(data){
           
          $scope.All_timeline =  data.data;
      }, function(data){});
     $http.get('/js/data.json').then(
         function(data){
          console.log(data)
         $scope.skills = data.data.skills;
         },      function(data){})
  }
      
    $scope.leftClass = function(x){
        $scope.LEFT = !x
        return $scope.LEFT;
    }
          
}])
.controller('ContactController',['$scope',function($scope){

}])
.controller('BlogController',['$scope',function($scope){

}])
.controller('PortfolioController',['$scope',function($scope){

}])

  
})();