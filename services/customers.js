const { Customers } = require("../models");

class customers {
    static async getAllCustomers() {
        const response = await Customers.findAll()
        return response
    }

    static async getCustomerById(id) {
        
        return await Customers.findByPk(id)
    }

    static async addCustomer(name, email) {
        
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