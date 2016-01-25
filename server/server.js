var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }  
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(customers);
    // res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});

app.listen(3000);

console.log('Express listening on port 3000');

var customers = [
    {
        id: 1,
        joined: '2000-12-02',
        name: 'John',
        city: 'Melbourne',
        orderTotal: 9.9956,
        orders: [
            {
                id: 1,
                product: 'Shoes',
                total: 9.9956
            }
        ]
    }, 
    {
        id: 2,
        joined: '2016-01-04',
        name: 'Biondi',
        city: 'Surabaya',
        orderTotal: 14.321,
        orders: [
            {
                id: 2,
                product: 'Gaming mouse',
                total: 10.321
            },
            {
                id: 3,
                product: 'Timmy',
                total: 4
            }
        ]
    }, 
    {
        id: 3,
        joined: '2002-07-21',
        name: 'Arvin',
        city: 'Alaska',
        orderTotal: 1.52,
        orders: [
            {
                id: 4,
                product: 'Egg',
                total: 1.52
            }
        ]
    }, 
    {
        id: 4,
        joined: '2012-03-09',
        name: 'Yoga',
        city: 'Sydney',
        orderTotal: 200.22,
        orders: [
            {
                id: 5,
                product: 'Shampoo',
                total: 20   
            },
            {
                id: 6,
                product: 'Chives',
                total: 5    
            },
            {
                id: 7,
                product: 'Chicken karage',
                total: 50.22    
            },
            {
                id: 8,
                product: 'Trampoline',
                total: 124.78   
            }
        ]
    }
];