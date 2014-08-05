angular.module('app.cart', [])
  .controller('CartCtrl', ['$rootScope', '$scope', '$state', '$firebase', function($rootScope, $scope, $state, $firebase){

    $scope.removeFromCart = function(id){
      // hack
      var item = new Firebase('https://bindopos.firebaseio.com/cart/' + $rootScope.userID + '/' + id);
      $firebase(item).$remove();
    };

    $scope.checkout = function(){
      $state.go('checkout');
    };

  }]);
