var app = angular.module('app', [
  'firebase',
  'ui.router',
  'app.nav',
  'app.shop',
  'app.cart',
  'app.checkout'
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
            templateUrl: '/modules/nav/nav.html',
            controller: 'NavCtrl'
          },
          'body': {
            templateUrl: '/modules/shop/shop.html',
            controller: 'ShopCtrl'
          },
          'bottom-banner': {
            templateUrl: '/modules/bottom-banner/bottom-banner.html'
          },
          'footer': {
            templateUrl: '/modules/footer/footer.html'
          }
        }
      })
      // .state('shop.home', {
      //   views: {
      //     'content': {
      //       templateUrl: '/modules/shop/content/home.html'
      //     }
      //   }
      // })
      // .state('shop.product', {
      //   views: {
      //     'content': {
      //       templateUrl: '/modules/shop/content/product.html'
      //     }
      //   }
      // })
      .state('cart', {
        url: '/cart',
        views: {
          'header': {
            templateUrl: '/modules/header/header.html'
          },
          'nav': {
            templateUrl: '/modules/nav/nav.html',
            controller: 'NavCtrl'
          },
          'body': {
            templateUrl: '/modules/cart/cart.html',
            controller: 'CartCtrl'
          },
          'footer': {
            templateUrl: '/modules/footer/footer.html'
          }
        }
      })
      .state('checkout', {
        url: '/checkout',
        views: {
          'nav': {
            template: '<div></div>'
          },
          'body': {
            templateUrl: '/modules/checkout/checkout.html',
            controller: 'CheckoutCtrl'
          }
        }
      })
      .state('checkout.shipping', {
        url: '/checkout/shipping',

        views: {
          'order': {
            templateUrl: '/modules/checkout/order/editable.html'
          },
          'information': {
            templateUrl: '/modules/checkout/information/shipping.html'
          }
        }
      })
      .state('checkout.billing', {
        url: '/checkout/billing',

        views: {
          'order': {
            templateUrl: '/modules/checkout/order/editable.html'
          },
          'information': {
            templateUrl: '/modules/checkout/information/billing.html'
          }
        }
      })
      .state('checkout.confirm', {
        url: '/checkout/confirm',

        views: {
          'order': {
            templateUrl: '/modules/checkout/order/editable.html'
          },
          'information': {
            templateUrl: '/modules/checkout/information/confirm.html'
          }
        }
      })
      .state('checkout.thankyou', {
        url: '/checkout/thankyou',

        views: {
          'order': {
            templateUrl: '/modules/checkout/order/final.html'
          },
          'information': {
            templateUrl: '/modules/checkout/information/thankyou.html'
          }
        }
      });


    $urlRouterProvider.otherwise('/shop');
    // $locationProvider.html5Mode(true);

  }])
  .controller('AppCtrl', ['$rootScope', '$scope', '$firebase', function($rootScope, $scope, $firebase){
    var cart = new Firebase('https://bindopos.firebaseio.com/cart');
    $rootScope.cartRef = $firebase(cart);
    // bind firebase to $rootScope.cart
    $rootScope.cartRef.$bind($rootScope, 'cart');

    $scope.updateTotal = function(){
      var keys = $rootScope.cartRef.$getIndex();
      $rootScope.cartLength = keys.length;
      var total = 0;
      angular.forEach(keys, function(key){
        total += $rootScope.cart[key].price * $rootScope.cart[key].quantity;        
      })
      $rootScope.total = total;
    };

    $rootScope.cartRef.$on('value', $scope.updateTotal);

  }])
