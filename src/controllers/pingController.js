
function pingController(req, res) {
    console.log("ping Request Accepted!");
    res.send({message:"Ping Request Accepted!"})
}

module.exports = {
    pingController,
}