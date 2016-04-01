(function () {

  angular.module('intranet.directives', [])
    .directive('intranetOptions',[function(){
      return{
        restrict: 'E',
        templateUrl: MainDir + 'partials/intranet-options.html'
      }
    }])
    .directive('intranetSubmenu',[function(){
      return{
        restrict: 'E',
        templateUrl: MainDir + 'partials/intranet-submenu.html'
      }
    }])
    .directive('intranetHeader',[function(){
      return{
        restrict: 'E',
        templateUrl: MainDir + 'partials/intranet-header.html'
      }
    }])
    .directive('paneLeft',[function(){
      return{
        restrict: 'E',
        templateUrl: MainDir + 'partials/pane-left.html'
      }
    }]);
})();