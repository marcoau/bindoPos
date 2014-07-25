var app = angular.module('app', [
  'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('shop', {
        url: '/shop',
        views: {
          'header': {
            templateUrl: '/modules/header/header.html'
          },
          'nav': {
            templateUrl: '/modules/nav/nav.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/shop');
    // $locationProvider.html5Mode(true);

  }]);
