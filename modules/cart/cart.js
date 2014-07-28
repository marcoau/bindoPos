angular.module('app.cart', [])
  .controller('CartCtrl', ['$rootScope', '$scope', '$firebase', function($rootScope, $scope, $firebase){

    $scope.removeFromCart = function(id){
      // hack
      var item = new Firebase('https://bindopos.firebaseio.com/cart/' + id);
      $firebase(item).$remove();
    };
    $scope.updateTotal = function(){
      var keys = $rootScope.cartRef.$getIndex();
      var total = 0;
      angular.forEach(keys, function(key){
        total += $rootScope.cart[key].price * $rootScope.cart[key].quantity;        
      })
      $scope.total = total;
    };

    $rootScope.cartRef.$on('value', $scope.updateTotal);



    // $scope.$watch('cart', function(){
    //   $scope.updateTotal();
    // });

  }]);
