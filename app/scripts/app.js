'use strict';

angular.module('d3jsExamplesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/force-directed-graph', {
        templateUrl: 'views/force-directed-graph.html',
        controller: 'MainCtrl'
      })
      .when('/force-layout-node-selection', {
        templateUrl: 'views/force-layout-node-selection.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
