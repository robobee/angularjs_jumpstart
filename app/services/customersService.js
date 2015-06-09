'use strict';

(function() {

  var customersService = function() {
    var customers = [
      { id: 1, name: 'Igor', orderTotal: 0.0, joined: '2003-02-22', city: 'Melbourne',
        orders: [
          {
            id: 1,
            product: 'Shoes',
            total: 9.9956
          }
        ] 
      },
      { id: 2, name: 'Dima', orderTotal: 1253.52, joined: '2012-01-12', city: 'Hacapetivka',
        orders: [
          {
            id: 2,
            product: 'Ski',
            total: 224.12
          },
          {
            id: 3,
            product: 'Shovel',
            total: 150
          }
        ]
      },
      { id: 3, name: 'Ksyusha', orderTotal: 250.0, joined: '2000-12-02', city: 'Kyiv', 
        orders: [] },
      { id: 4, name: 'Khry', orderTotal: 1500.0, joined: '1985-11-05', city: 'Melbourne',
        orders: [] }
    ];

    this.getCustomers = function() {
      return customers;
    };

    this.getCustomer = function(customerId) {
      for (var i = 0; i < customers.length; i++) {
        if (customers[i].id === parseInt(customerId)) {
          return customers[i];
        }
      }
      return {};
    }

  };

  angular.module('customersApp').service('customersService', customersService);

}());
