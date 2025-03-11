const express = require("express");

const  app = express();
const {PORT} = require("./config/serverConfig")




app.listen(PORT, (req, res) => {
    console.log(`App is listening on port no:-> ${PORT}`)
})