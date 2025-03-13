const express = require("express");
var responseTime = require('response-time')

const  app = express();
const bodyParser = require("body-parser");
const {PORT} = require("./config/server_config")
const apiRouter = require("./routes/api_router");



app.use(responseTime())


app.use(bodyParser.json()) // for validating the json data 
app.use(bodyParser.text()) // for validating the text data
app.use(bodyParser.urlencoded({extended:true})) // for validating the data incoming through body

app.use("/api", apiRouter);

app.listen(PORT, (req, res) => {
    console.log(`App is listening on port no:-> ${PORT}`)
})