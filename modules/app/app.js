var app = angular.module('app', [
  'firebase',
  'ui.router',
  'app.nav',
  'app.shop',
  'app.cart'
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

  }])
  .controller('AppCtrl', ['$rootScope', '$firebase', function($rootScope, $firebase){
    var cart = new Firebase('https://bindopos.firebaseio.com/cart');
    $rootScope.cartRef = $firebase(cart);
  }])
