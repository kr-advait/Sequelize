const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require("../dbConnect");

class products extends Model {}

products.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    total_quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    quantity_left : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
},
{
    sequelize,
    modelName : "products"
})

module.exports = products