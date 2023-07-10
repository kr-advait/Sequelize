const Orders = require("../services/orders");

// const Orders = new orders()

class OrderController {

    static async getAllOrders(req, res) {
        return res.status(200).json(
            await Orders.getAllOrders()
        )
    }

    static async getOrderById(req, res) {
        const id = Number(req.params.id);
        return res.status(200).json(
            await Orders.getOrderById(id)
        )
    }

    static async placeOrder(req, res) {
        const { product, quantity, status, customerId, productId } = req.body;
        return res.status(200).json(
            await Orders.placeOrder(product, quantity, status, customerId, productId)
        )
    }

    static async completeOrder(req, res) {
        const { customerId, productId } = req.body;
        return res.status(200).json({
            success : await Orders.completeOrder(customerId, productId)
        })
    }

    static async getOrderRawDetailsById(req, res) {
        const orderId = req.body.orderId;
        return res.status(200).json(
            await Orders.getOrderRawDetailsById(orderId)
        )
    }
    
    static async getOrderDetailsById(req, res) {
        const orderId = req.body.orderId;
        return res.status(200).json(
            await Orders.getOrderDetailsById(orderId)
        )
    }

}

module.exports = OrderController