
const Customers = require("./models/customers");
const Products = require("./models/products");
const Orders = require("./models/orders");


// Relations    (Customers, Products, Orders)
Customers.hasMany(Orders);         //  ( 1:many -  foreign key customerId will be created in orders table )
Orders.belongsTo(Customers);       //  ( many:1 - foreign key customerId will be created in orders table )

Orders.belongsTo(Products);        // ( many:1 - foreign key productId will be created in orders table )


module.exports = { Customers, Products, Orders }