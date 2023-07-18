const Customers = require("../services/customers");

class CustomerController {

    static async getAllCustomers(req, res) {
        try {
            return res.status(200).json(
                await Customers.getAllCustomers()
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }
    }

    static async getCustomerById(req, res) {
        const id = req.params.id
        try {
            return res.status(200).json(
                await Customers.getCustomerById(id)
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }
    }

    static async addCustomer(req, res) {
        const { name, email } = req.body
        try {
            return res.status(200).json(
                await Customers.addCustomer(name, email)
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }
    }

    static async updateCustomerById(req, res) {

        const { id, name, email } = req.body

        try {
            if (!name) {
                return res.status(400).json({ success: false, message: "Name can't be empty" })
            }
            else if (!email) {
                return res.status(400).send({ success: false, message: "Email can't be empty" })
            }

            return res.status(200).json(
                await Customers.updateCustomerById(id, name, email)
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }

    }

    static async deleteCustomerById(req, res) {
        const { id } = req.body;
        try {
            return res.status(200).json(
                await Customers.deleteCustomerById(id)
            )
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message })
        }
    }

}

module.exports = CustomerController