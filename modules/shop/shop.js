angular.module('app.shop', [])
  .controller('ShopCtrl', ['$rootScope', '$scope', '$firebase', function($rootScope, $scope, $firebase){
    
    $scope.addToCart = function(product){
      $rootScope.cartRef.$add(product);
      console.log('add ' + product.name + ' to cart');
    };

    $scope.products = [
      {name: 'Business Pro Bundle', price: 1499.99},
      {name: 'Business Bundle', price: 999.99}
    ];

  }]);