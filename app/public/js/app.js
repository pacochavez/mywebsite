(function () {

  var app = angular.module('biografia', [
    'ui.router',
    'ngAnimate',
    'biografia.controllers',
    'biografia.services',
    'biografia.filters'
    ]);

  app.config(function ($provide,$stateProvider,$urlRouterProvider,$locationProvider) {
     $provide.decorator('$uiViewScroll', function ($delegate) {
        return function (uiViewElement) {
       // var top = uiViewElement.getBoundingClientRect().top;
        window.scrollTo(0, (top - 30));
       // Or some other custom behaviour...
     }; 
   });
   $urlRouterProvider.otherwise('/sobre-paco-chavez')
    $stateProvider
        // .state('inicio', {
        //     url: '/',
        //     templateUrl: '/views/inicio.html'
        // })
        .state('sobre-mi', {
            url: '/sobre-paco-chavez',
            templateUrl: '/views/inicio.html',
        })
        .state('portafolio', {
            url: '/portafolio',
            templateUrl: '/views/portafolio.html'
        })
        .state('contacto', {
            url: '/contacto',
            templateUrl: '/views/contacto.html'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller:'SubmitController'
        })
      $locationProvider.html5Mode(true);
        
  });

})();
