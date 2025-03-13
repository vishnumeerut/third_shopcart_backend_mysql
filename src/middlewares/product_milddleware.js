
function createProductValidator(req, res, next) {

    if(!req.body.title) {
        res.send({
            success:false,
            data:{},
            message:"Title is not present in the incoming request..",
            error:{
                message:"Request body is received without title."
            }
        })
    }

    // if everything is good 
    next()
}

module.exports = {
    createProductValidator
}