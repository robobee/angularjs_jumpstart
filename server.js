var express = require('express');
var app = express();

app.use(express.static(__dirname, '/'));

app.get('/customers/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = {};
  for (var i = 0; i < customers.length; i++) {
    if (customers[i].id === customerId) {
      data = customers[i];
      break;
    }
  }
  res.json(data);
});

app.get('/customers', function(req, res) {
  res.json(customers);
});

app.get('/orders', function(req, res) {
  var orders = [];
  for (var i = 0; i < customers.length; i++) {
    for (var j = 0; j < customers[i].orders.length; j++) {
      orders.push(customers[i].orders[j]);
    }
  }
  res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = { status: false };
  for (var i = 0; i < customers.length; i++) {
    if (customers[i].id === customerId) {
      customers.splice(i, 1);
      data = { status: true };
      break;
    }
  }
  res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

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
