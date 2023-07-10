const express = require("express");
const customerController = require("./controllers/customers");
const productController = require("./controllers/products");
const orderController = require("./controllers/orders");

// const customerController = new CustomerController();
// const productController = new ProductController();
// const orderController = new OrderController();

const router = express.Router();

// Customers
router.get("/getAllCustomers", customerController.getAllCustomers)
router.get("/getCustomer/:id", customerController.getCustomerById)
router.post("/getOrCreateCustomer", customerController.addCustomer)
router.put("/updateCustomer", customerController.updateCustomerById)
router.delete("/deleteCustomer", customerController.deleteCustomerById)

// Products
router.get("/getAllProducts", productController.getAllProducts)
router.get("/getProduct/:name", productController.getProductByName)
router.post("/addProduct", productController.addProducts)
router.put("/updateProductName", productController.updateProductName)
router.put("/updateProductQuantityLeft", productController.updateProductLeftQuantityByName)
router.put("/updateProductTotalQuantity", productController.updateProductTotalQuantityByName)
router.delete("/deleteProduct", productController.deleteProductByName)

// Orders
router.get("/getAllOrders", orderController.getAllOrders)
router.get("/getOrderById/:id", orderController.getOrderById)
router.post("/placeOrder", orderController.placeOrder)
router.post("/completeOrder", orderController.completeOrder)
router.post("/getOrderRawDetailsById", orderController.getOrderRawDetailsById)
router.post("/getOrderDetailsById", orderController.getOrderDetailsById)

module.exports = router;