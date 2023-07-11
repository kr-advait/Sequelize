const sequelize = require("./dbConnect");
const log = require("./utils");
const express = require("express");
const router = require("./router")
const app = express()

app.use(express.json())
app.use(router)

sequelize
    .sync({force : true})
    .then((result) => {
        log("Database Table created...!!")
    })
    .catch((error) => {
        console.log(error.message)
    })

app.listen(8080,'localhost',()=>{
    log("Server started on http://localhost:8080")
})

module.exports = app;