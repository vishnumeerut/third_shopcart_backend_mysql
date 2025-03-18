const {StatusCodes, ReasonPhrases} = require("http-status-codes")
const CategoryService = require("../services/category_service");
const CategoryRepository = require("../repositories/category_repository")
const categoryService = new CategoryService(new CategoryRepository())
async function createCategory(req, res) {

    try{

        const newCategory = await categoryService.createCategory(req.body)

        res.status(StatusCodes.CREATED).send({
            success:true,
            error:{},
            message: "Category " + ReasonPhrases.CREATED,
            data: newCategory,
        })
    }
    catch(error) {
        console.log("Error caught during product creation..", error)
    }
}


module.exports = {
    createCategory
}