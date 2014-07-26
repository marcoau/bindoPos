angular.module('app.cart', [])
  .controller('CartCtrl', ['$rootScope', '$scope', '$firebase', function($rootScope, $scope, $firebase){
    $rootScope.cartRef.$bind($scope, 'cart');
  }]);
