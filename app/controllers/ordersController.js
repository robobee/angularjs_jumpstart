'use strict';

(function() {

  var OrdersController = function($scope, $routeParams, customersFactory) {

    var customerId = $routeParams.customerId;

    $scope.customer = null;

    function init() {
      $scope.customer = customersFactory.getCustomer(customerId)
        .success(function(customer) {
          $scope.customer = customer;
        })
        .error(function(data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }

    init();
  };

  angular.module('customersApp')
    .controller('OrdersController', 
      ['$scope', '$routeParams', 'customersFactory', OrdersController]);

}());
