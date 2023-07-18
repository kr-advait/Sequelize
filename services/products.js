const { Products } = require("../models");

class products {


    static async getAllProducts() {
        return await Products.findAll()
    }

    static async getProductByName(name) {
        
        return await Products.findOne({
            where: {
                name: name
            }
        })
    }

    static async addProducts(name, quantity, price) {
        
        try {
            return await Products.upsert({
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
        
        return !![await Products.update({ name: newName }, {
            where: {
                name: name
            }
        })]
    }

   static async getProductTotalQuantity(name) {
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

        const total_quantity = await this.getProductTotalQuantity(name)

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

        return !![await Products.destroy({
            where: {
                name: name
            }
        })]
    }

}

module.exports = products