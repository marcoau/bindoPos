angular.module('app.checkout', [])
  .controller('CheckoutCtrl', ['$state', '$scope', function($state, $scope){
    $scope.shippingContinue = function(){
      $state.go('checkout.billing');
    };

    $state.go('checkout.shipping');

  }]);
