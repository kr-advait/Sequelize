const { Customers, Products, Orders } = require("../models");
const sequelize = require("../dbConnect");
const { QueryTypes, Op, or } = require("sequelize");

// const orders = {}
class orders {


    static async getAllOrders() {
        return await Orders.findAll()
    }

    static async getOrderById(id) {
        // const id = req.params.id;
        const query = `SELECT * FROM orders WHERE id = ?`;
        const response = await sequelize.query(query, {
            replacements: [id],
            type: QueryTypes.SELECT
        })
        return response[0]
    }

    static async placeOrder(product, quantity, status, customerId, productId) {
        // const { product, quantity, status, customerId, productId } = req.body;

        return await Orders.create({
            productName: product,
            quantity: quantity,
            status: status,
            customerId: customerId,
            productId: productId
        })
    }

    static async completeOrder(customerId, productId) {
        return !![await Orders.update({ status: "completed" }, {
            where: {
                [Op.and]: {
                    customerId: customerId,
                    productId: productId
                }
            }
        })]
    }

    static async getOrderRawDetailsById(orderId) {
        try {

            const query = `
            SELECT 
            orders.id as orderId,
            orders.productId,
            orders.customerId,
            customers.name,
            orders.productName,
            orders.quantity,
            products.price,
            orders.status,
            customers.email,
            orders.createdAt,
            orders.updatedAt
            FROM
            orders
            RIGHT OUTER JOIN
            products
            ON
            orders.productId = products.id
            LEFT OUTER JOIN
            customers
            ON
            customers.id = orders.customerId
        WHERE
            orders.id = ?
        `

            const result = await sequelize.query(query, {
                replacements: [orderId],
                type: QueryTypes.SELECT
            })

            return result
        } catch (error) {
            console.log(error.message)
        }
    }

    static async getOrderDetailsById(orderId) {
        const result = await Orders.findAll({
            include: [
                { model : Products },
                { model : Customers }
            ],
            where: {
                id: orderId
            }
        })
        return result
    }

}

module.exports = orders;