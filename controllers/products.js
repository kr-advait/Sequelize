const Products = require("../services/products");

class ProductController {


    static async getAllProducts(req, res) {
        try {
            return res.status(200).json(
                await Products.getAllProducts()
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }
    }

    static async getProductByName(req, res) {
        try {
            const name = req.params.name
            return res.status(200).json(
                await Products.getProductByName(name)
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }
    }

    static async addProducts(req, res) {
        const { name, quantity, price } = req.body
        try {
            return res.status(200).json(
                await Products.addProducts(name, quantity, price)
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: "Name already exists. It must be unique" })
        }
    }

    static async updateProductName(req, res) {
        try {
            const { name, newName } = req.body;
            return res.status(200).json({
                success: await Products.updateProductName(name, newName)
            })
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }
    }

    
    static async updateProductLeftQuantityByName(req, res) {
        try {
            const { name, quantity } = req.body

            return res.status(200).json({
                success: await Products.updateProductLeftQuantityByName(name, quantity)
            })
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }

    }

    static async updateProductTotalQuantityByName(req, res) {
        try {
            const { name, quantity } = req.body

            if (!name) {
                return res.status(400).json({ success: false, message: "Name can't be empty" })
            }
            else if (!quantity) {
                return res.status(400).send({ success: false, message: "Quantity can't be empty" })
            }

            return res.status(200).json({
                success: await Products.updateProductTotalQuantityByName(name, quantity)
            })
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }

    }

    static async deleteProductByName(req, res) {
        try {
            const { name } = req.body;
            return res.status(200).json({
                success: await Products.deleteProductByName(name)
            })
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }

    }
}

module.exports = ProductController