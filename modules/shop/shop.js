angular.module('app.shop', [])
  .controller('ShopCtrl', ['$rootScope', '$scope', '$state', '$firebase', function($rootScope, $scope, $state, $firebase){
    
    $scope.addToCart = function(product){
      $rootScope.cartRef.$add(_.extend(product, {quantity: 1}));
      console.log('add ' + product.name + ' to cart');
    };

    $scope.viewProduct = function(product){
      $scope.currentProduct = product;
      $state.go('shop.product');
    };


    $scope.products = [
      {
        name: 'Business Pro Bundle',
        category: 'POS solution',
        price: 1499.99,
        description: 'THE point-of-sales solution for your booming retail store',
        tagline: 'Everything you need in a one box.',
        features: [
          {
            type: 'iPad stand',
            detail: 'WindFall Secure, Red'
          },
          {
            type: 'Credit card reader',
            detail: 'UniMag MagStripe'
          },
          {
            type: 'Cash Drawer',
            detail: 'APG Vasario 1416'
          },
          {
            type: 'Receipt printer',
            detail: 'Star Micronics TSP143'
          }
        ]
      },
      {
        name: 'WindFall Secure Stand',
        category: 'iPad stand',
        price: 199.99,
        description: 'Swipe credit cards, connect hardware, and run your business with Square Register',
        tagline: 'The most secure stand ever.'
      },
      {
        name: 'APG Vasario 1616 USB',
        category: 'Cash drawer',
        price: 199.99,
        description: 'Keep cash secure with a durable, locking cash drawer. Open with the touch of a button'
      },
      {
        name: 'Symbol LS2208 USB',
        category: 'Barcode scanner',
        price: 99.99,
        description: 'Speed up your checkout with a fast and lightweight barcode scaneer'
      }
    ];
    $scope.currentProduct = $scope.products[0];

    $state.go('shop.home');

  }]);