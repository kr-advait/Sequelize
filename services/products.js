const { Products } = require("../models");

// const products = {};

class products {


    static async getAllProducts() {
        return await Products.findAll()
    }

    static async getProductByName(name) {
        // const name = req.params.name
        return await Products.findOne({
            where: {
                name: name
            }
        })
    }

    static async addProducts(name, quantity, price) {
        // const { name, quantity, price } = req.body
        try {
            return await Products.create({
                name: name,
                total_quantity: quantity,
                quantity_left: quantity,
                price: price
            })
        } catch (error) {
            throw new Error("Name already exists. It must be unique")
        }
    }

    static async updateProductName(name, newName) {
        // const { name, newName } = req.body;
        return !![await Products.update({ name: newName }, {
            where: {
                name: name
            }
        })]
    }

    async getProductTotalQuantity(name) {
        const response = await Products.findOne({
            attributes: ['total_quantity']
        },
            {
                where: {
                    name: name
                }
            })
        return response.dataValues.total_quantity
    }

    static async updateProductLeftQuantityByName(name, quantity) {

        // const { name, quantity } = req.body
        const total_quantity = await getProductTotalQuantity(name)

        if (quantity > total_quantity) {
            throw new Error("Quantity must be less than Total Quantity")
        }

        if (!name) {
            throw new Error("Name can't be empty")
        }
        else if (!quantity) {
            throw new Error("Quantity can't be empty")
        }

        return !![await Products.update({ quantity_left: quantity }, {
            where: {
                name: name
            }
        })]
    }

    static async updateProductTotalQuantityByName(name, quantity) {

        // const { name, quantity } = req.body

        if (!name) {
            throw new Error("Name can't be empty")
        }
        else if (!quantity) {
            throw new Error("Quantity can't be empty")
        }

        return !![await Products.update({ total_quantity: quantity, quantity_left: quantity }, {
            where: {
                name: name
            }
        })]

    }

    static async deleteProductByName(name) {
        // const { name } = req.body;
        return !![await Products.destroy({
            where: {
                name: name
            }
        })]
    }

}

module.exports = products