angular.module('app.shop', [])
  .controller('ShopCtrl', ['$rootScope', '$scope', '$firebase', function($rootScope, $scope, $firebase){
    
    $scope.addToCart = function(product){
      $rootScope.cartRef.$add(_.extend(product, {quantity: 1}));
      console.log('add ' + product.name + ' to cart');
    };

    $scope.products = [
      {
        name: 'WindFall Secure Stand',
        category: 'iPad stand',
        price: 199.99,
        description: 'Swipe credit cards, connect hardware, and run your business with Square Register'
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

  }]);