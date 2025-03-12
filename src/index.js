const express = require("express");

const  app = express();
const {PORT} = require("./config/serverConfig")
const {pingController} = require("./controllers/pingController")

// app.get("/api/v1/ping", (req, res) => {
//     res.send({message:"Welcome to the new Backend!"})
// })

app.get("/api/v1/ping", pingController)


app.listen(PORT, (req, res) => {
    console.log(`App is listening on port no:-> ${PORT}`)
})