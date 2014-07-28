angular.module('app.shop', [])
  .controller('ShopCtrl', ['$rootScope', '$scope', '$firebase', function($rootScope, $scope, $firebase){
    
    $scope.addToCart = function(product){
      $rootScope.cartRef.$add({
        name: product.name,
        price: product.price,
        quantity: 2
      });
      console.log('add ' + product.name + ' to cart');
    };

    $scope.products = [
      {name: 'Business Pro Bundle', price: 1499.01},
      {name: 'Business Bundle', price: 999.01}
    ];

  }]);