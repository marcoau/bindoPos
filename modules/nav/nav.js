angular.module('app.nav', [])
  .controller('NavCtrl', ['$scope', '$state', function($scope, $state){

    $scope.goToCart = function(){
      $state.go('cart');
    };

    // hack
    $scope.currentState = $state.current.name;
  }]);
