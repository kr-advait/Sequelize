const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../dbConnect");

const Customers = sequelize.define("customers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{

    indexes: [
        {
            unique: true,
            fields: ['name', 'email']
        }
    ]
})


module.exports = Customers