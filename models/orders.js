const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../dbConnect");

const Orders = sequelize.define("orders", {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    productName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    status : {
        type : DataTypes.STRING,
        allowNull : false
    }
},
{
    indexes : [
        {
            unique : true,
            fields : ["productName", "customerId"]
        }
    ]
})

module.exports = Orders