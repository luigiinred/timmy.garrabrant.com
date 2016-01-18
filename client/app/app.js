'use strict';

angular.module('timmyGarrabrantApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })

.run(['$rootScope', '$location', function($rootScope, $location) {


  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$routeChangeStart', function(event, next) {

    $rootScope.go = function(path) {
      console.log(path);
      $location.path(path);
    };


  });
}])
