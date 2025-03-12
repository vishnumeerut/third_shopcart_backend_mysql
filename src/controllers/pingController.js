
function pingController(req, res) {
    console.log("ping Request Accepted!");
    res.send({message:"Ping Request Via Routes Accepted!"})
}

module.exports = {
    pingController,
}