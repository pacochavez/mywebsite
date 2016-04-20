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
   
    $stateProvider
        // .state('inicio', {
        //     url: '/',
        //     templateUrl: '/views/x|inicio.html',
        //     controller:'AboutmeController'  
        // }) 
        .state('about-me', {
            url: '/about-me',
            templateUrl: '/views/inicio.html',
            controller:'AboutmeController'
        })

        .state('portfolio', {
            url: '/portfolio',
            templateUrl: '/views/portafolio.html',
            controller:'PortfolioController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/views/contacto.html'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller:'SubmitController'
        })
   $urlRouterProvider.otherwise('/about-me')
      $locationProvider.html5Mode(true);
        
  });
  // function footerTop(){
  //   var container = document.getElementsByClassName("container")[0];
  //   var rec = container.getBoundingClientRect()
  //   if(rec.height < window.outerHeight){
  //       container.style.minHeight = (window.outerHeight-296) + "px"
  //   }
  // }
  // footerTop();
  // window.onresize = footerTop;

})();
