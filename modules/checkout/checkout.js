angular.module('app.checkout', [])
  .controller('CheckoutCtrl', ['$state', '$scope', function($state, $scope){
    $scope.goToShipping = function(){
      $state.go('checkout.shipping');
      $scope.checkoutState = 'shipping';
      // $scope.updateCheckoutState();
    }
    $scope.goToBilling = function(){
      $state.go('checkout.billing');
      $scope.checkoutState = 'billing';
      $scope.updateCheckoutState();
    };
    $scope.goToConfirm = function(){
      $state.go('checkout.confirm');
      $scope.checkoutState = 'confirm';
      $scope.updateCheckoutState();
    };
    $scope.goToThankyou = function(){
      $state.go('checkout.thankyou');
    };

    $scope.progressBarState = {
      'shipping': 'bar-shipping',
      'billing': 'bar-billing',
      'confirm': 'bar-confirm'
    };

    $scope.goToShipping();

    $scope.shippingInfo = {
      name: 'Irene Chan',
      streetAddress: '386 Park Ave',
      apt: 'Fl10',
      city: 'New York',
      state: 'NY',
      zip: '10016-8804'
    };

    $scope.paymentInfo = {
      name: 'Irene Chan',
      cardNumber: '1234572020230202',
      expire: '01/17',
      cvc: '222'
    };

    $scope.billingInfo = $scope.shippingInfo;

  }]);
