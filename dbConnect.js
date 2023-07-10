const dotenv = require("dotenv")
dotenv.config()
const log = require("./utils");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host : "localhost",
    dialect : "mysql",
    logging : true
});

try {
    sequelize.authenticate()
    .then(()=>{
        log("Database Connection established successfully...!!")
    });
}
catch (error){
    console.log("Error encountered while connecting to db", error.message)
}

module.exports = sequelize;