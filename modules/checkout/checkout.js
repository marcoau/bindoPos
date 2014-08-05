angular.module('app.checkout', [])
  .controller('CheckoutCtrl', ['$state', '$scope', function($state, $scope){
    $scope.goToShipping = function(){
      $state.go('checkout.shipping');
      $scope.checkoutState = 'shipping';
    }
    $scope.goToBilling = function(){
      if($scope.shippingCheck()){
        $state.go('checkout.billing');
        $scope.checkoutState = 'billing';
      }
    };
    $scope.goToConfirm = function(){
      if($scope.billingCheck()){
        $state.go('checkout.confirm');
        $scope.checkoutState = 'confirm';        
      }
    };
    $scope.goToThankyou = function(){
      $state.go('checkout.thankyou');
      $scope.checkoutState = 'thankyou';
    };

    $scope.progressBarState = {
      'shipping': 'bar-shipping',
      'billing': 'bar-billing',
      'confirm': 'bar-confirm'
    };

    $scope.shippingCheck = function(){
      if($scope.shippingInfo.name && $scope.shippingInfo.streetAddress && $scope.shippingInfo.apt
        && $scope.shippingInfo.city && $scope.shippingInfo.state && $scope.shippingInfo.zip
        && $scope.shippingInfo.email && $scope.shippingInfo.phone){
        return true;
      }else{
        $scope.highlightEmptyShipping = true;
        return false;
      }
    };

    $scope.goToShipping();

    $scope.sameAsShipping = false;

    $scope.billingSameAsShipping = function(){
      $scope.sameAsShipping = !$scope.sameAsShipping;
      $scope.billingInfo = {};

      if($scope.sameAsShipping){
        $scope.billingInfo.streetAddress = $scope.shippingInfo.streetAddress;
        $scope.billingInfo.apt = $scope.shippingInfo.apt;
        $scope.billingInfo.city = $scope.shippingInfo.city;
        $scope.billingInfo.state = $scope.shippingInfo.state;
        $scope.billingInfo.zip = $scope.shippingInfo.zip;
      }
    };

    $scope.billingCheck = function(){
      if($scope.billingInfo
        && $scope.billingInfo.streetAddress && $scope.billingInfo.apt && $scope.billingInfo.city
        && $scope.billingInfo.state && $scope.billingInfo.zip
        && $scope.paymentInfo.name && $scope.paymentInfo.cardNumber
        && $scope.paymentInfo.expire && $scope.paymentInfo.cvc){
        return true;
      }else{
        $scope.highlightEmptyBilling = true;
        return false;
      }
    };

    // SAMPLE DATA FILLED IN
    $scope.shippingInfo = {
      name: 'Irene Chan',
      streetAddress: '386 Park Ave',
      apt: 'Fl10',
      city: 'New York',
      state: 'NY',
      zip: '10016-8804',
      email: 'yoyo@hey.com',
      phone: '+1 123 443 2311'
    };

    $scope.paymentInfo = {
      name: 'Irene Chan',
      cardNumber: '1234572020230202',
      expire: '01/17',
      cvc: '222'
    };

  }]);
