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
.controller('PortfolioController',['$scope','$http',function($scope,$http){
   $http.get('/data/portfolio')
      .then(function(data){
          $scope.portfolio =  data.data;
      }, function(data){});
    $http.get('/data/used_skills')
      .then(function(data){
          $scope.used_skills =  data.data;
      }, function(data){});
      
      $scope.fSkill ={}

      $scope.selectSkill = function(skill){
      $scope.skillSelected = skill;
      $scope.fSkill ={used_skills :[]}
        for(var us in $scope.used_skills ){
          $scope.fSkill.used_skills[us] = {icon : skill};  
        }
      }
      //$scope.selectSkill("");      
      $scope.img_source = function(name){
        if(name == "")
          return 'data:image/gif;base64,R0lGODlhkgTQAtUAACZZeSxefVB5k0FuijdmhEp0jzJigCdaejxqh0ZyjU54kipcfC5ffj5riFF6lDRkgkRwi0t2kDpohS9gfihaekhzjj9siFF6kyhcekx2kS5gfkBtiTRjgUJuikp0kTZlgzBggUh0jzpoh0RwjThnhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAACSBNACAAb/QIBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fP/59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26P/hhyCGKOKIJJZo4okopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPbo449ABinkkEQWaeSRSCap5JJMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBZq6KGIJqrooow26uijkEYq6aSUVmrppZhmqummnHbq6aeg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%3D%3D'
        return name
      }
}])

  
})();