const { Customers } = require("../models");

// const customers = {};

class customers {
    static async getAllCustomers() {
        const response = await Customers.findAll()
        return response
    }

    static async getCustomerById(id) {
        // const id = req.params.id
        return await Customers.findByPk(id)
    }

    static async addCustomer(name, email) {
        // const { name, email } = req.body
        try {
            return await Customers.findOrCreate({
                where : {
                    name: name,
                    email: email
                }
            })
        } catch (error) {
            throw new Error("(name, email) is Unique Key. Please enter unique values.")
        }
    }

    static async updateCustomerById(id, name, email) {

        // const {id, name, email} = req.body

        if (!name) {
            throw new Error("Name can't be empty")
        }
        else if (!email) {
            throw new Error("Email can't be empty")
        }

        return {
            success: !![await Customers.update({ name: name, email: email }, {
                where: {
                    id: id
                }
            })]
        }

    }

    static async deleteCustomerById(id) {
        // const { id } = req.body;
        return {
            success: !![await Customers.destroy({
                where: {
                    id: id
                }
            })]
        }
    }

}

module.exports = customers