(function () {

  angular.module('biografia.filters', [])
    .filter('capitalize', function () {
      return function (input) {
          if (!input) return "";
          return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      };
    })
    .filter('url', function () {
      return function (input) {
          if (!input) return "";
          input = input.replace(/ /g, "-");
          return input.toLowerCase();
      };
    })
})();