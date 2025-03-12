
function pingController(req, res) {
    // console.log("ping Controller hit...")
    res.send({message:"Ping request from V1.."})
}
function pingControllerv2(req, res) {
    res.send({message:"Ping request from V2.."})
}

module.exports = {
    pingController,
    pingControllerv2,
}