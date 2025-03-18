const {StatusCodes, ReasonPhrases} = require("http-status-codes")
const CategoryService = require("../services/category_service");
const CategoryRepository = require("../repositories/category_repository");
const errorResponse = require("../utils/error_response");
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
        console.log("Category Controller layer..", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}
async function getCategories(req, res) {

    try{
        const data = await categoryService.getCategories()

        res.sendStatus(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "All Categories are " + ReasonPhrases.OK,
            data: data,
        })
    }
    catch(error) {
        console.log("Category Controller layer..", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}
async function getCategory(req, res) {

    try{
        const data = await categoryService.getCategory(req.params.id)
        console.log("Category controller.. single category", data)

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Fetch Category " + ReasonPhrases.OK,
            data: data,
        })
    }
    catch(error) {
        console.log("Category Controller layer..", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}
async function deleteCategory(req, res) {

    try{
        const data = await categoryService.deleteCategory(req.params.id)

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Category Deleted.." + ReasonPhrases.OK,
            data: data,
        })
    }
    catch(error) {
        console.log("Category Controller layer..", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}
async function updateCategory(req, res) {

    try{
        const data = await categoryService.updateCategory(req.params.id, req.body)

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Category Updated.." + ReasonPhrases.OK,
            data: data,
        })
    }
    catch(error) {
        console.log("Category Controller layer..", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}


module.exports = {
    createCategory,
    getCategories,
    getCategory,
    deleteCategory,
    updateCategory,
}