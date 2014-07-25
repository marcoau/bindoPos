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
          },
          'body': {
            templateUrl: '/modules/shop/shop.html'
          }
        }
      })
      .state('cart', {
        url: '/cart',
        views: {
          'header': {
            templateUrl: '/modules/header/header.html'
          },
          'nav': {
            templateUrl: '/modules/nav/nav.html'
          },
          'body': {
            templateUrl: '/modules/cart/cart.html'
          }
        }
      })
      .state('checkout', {
        url: '/checkout',
        views: {
          'header': {
            templateUrl: '/modules/checkout/checkout-header.html'
          },
          'body': {
            templateUrl: '/modules/checkout/checkout.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/shop');
    // $locationProvider.html5Mode(true);

  }]);
