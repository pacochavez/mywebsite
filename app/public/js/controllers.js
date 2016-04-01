(function (){
  angular.module('biografia.controllers', [])
    .controller('MainController', ['$http', '$scope','$location','$stateParams', function ($http,$scope,$location,$stateParams) {
      if($scope.result== undefined){
        $http.get('/js/data.json').then(
          function(data){
            $scope.result = data.data;
            console.log(data)
          },
          function(data){})
         $http.get('/data/year').then(
          function(data){
            $scope.years = data.data;
            console.log(data)
          },
          function(data){})
          
        
      }
    $scope.M ={name:"",link:""}
    $scope.$watch('M.name', function() {
        $scope.M.link = $scope.M.name.toLowerCase().replace(/\s+/g,'-');
    }); 
    $scope.X = 1;
    $scope.check =function(x){
      if(x == 1){x=0;}else{x=1;}
      $scope.X = x;
      return x;
    }
     

    }])
    .controller('SubmitController',['$scope','addServices',function($scope,addServices){
            $scope.H={year:'',url:'',form:'T',id:{year:''}};
        $scope.selectYear=function(y,id){
            $scope.H.url = id;
            $scope.H.year = y;
            $scope.H._id.year =y;

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
  
})();