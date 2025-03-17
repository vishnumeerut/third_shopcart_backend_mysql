const express = require("express");
var responseTime = require('response-time')

const  app = express();
const mysql = require("mysql2")
const bodyParser = require("body-parser");
const {PORT, DB_NAME, DB_PASS, DB_URL, DB_USER} = require("./config/server_config")
const apiRouter = require("./routes/api_router");

const db = mysql.createConnection({
    host     : DB_URL,
    user     : DB_USER,
    password : DB_PASS,
    database : DB_NAME
  })


app.use(responseTime())


app.use(bodyParser.json()) // for validating the json data 
app.use(bodyParser.text()) // for validating the text data
app.use(bodyParser.urlencoded({extended:true})) // for validating the data incoming through body

app.use("/api", apiRouter);

app.listen(PORT, (req, res) => {
    console.log(`App is listening on port no:-> ${PORT}`)
    db.connect((err) => {
        if(err) {
            console.log("DB Not Connect..")
            console.log("Error is:", err)
            throw err;
        }
        console.log("Db connected Successfully..")
    })
    db.query("select * from actor", (err, result) => {
        if(err) {
            console.log("error is:-", err)
            throw err;
        }
        console.log(result)
    })
})