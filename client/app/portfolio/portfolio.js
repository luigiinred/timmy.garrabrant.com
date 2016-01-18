'use strict';

angular.module('timmyGarrabrantApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/portfolio', {
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioCtrl'
      });
  });
