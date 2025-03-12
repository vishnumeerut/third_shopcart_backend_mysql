const express = require("express");

const  app = express();
const {PORT} = require("./config/serverConfig")
const pingRoute = require("./routes/pingRoute")


app.use("/api/v1/ping", pingRoute);

app.listen(PORT, (req, res) => {
    console.log(`App is listening on port no:-> ${PORT}`)
})