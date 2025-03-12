const express = require("express");

const  app = express();
const {PORT} = require("./config/serverConfig")
const apiRouter = require("./routes/apiRoute");


app.use("/api", apiRouter);

app.listen(PORT, (req, res) => {
    console.log(`App is listening on port no:-> ${PORT}`)
})