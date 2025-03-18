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
async function getCategories(req, res) {

    try{
        console.log("conroller called.")
        const data = await categoryService.getCategories()
        console.log(" data from conroller .", data)

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "All Categories are " + ReasonPhrases.OK,
            data: data,
        })
    }
    catch(error) {
        console.log("Error caught during product creation..", error)
    }
}
async function getCategory(req, res) {

    try{
        const data = await categoryService.getCategory(req.params.id)

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "All Categories are " + ReasonPhrases.OK,
            data: data,
        })
    }
    catch(error) {
        console.log("Error caught during product creation..", error)
    }
}


module.exports = {
    createCategory,
    getCategories,
    getCategory,
}