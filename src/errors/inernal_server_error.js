class InternalServerError extends Error {
    constructor(){
        const errorMessage = `Something went wrong! Please try again later...`
        super(errorMessage);
        this.statusCode = 500;
        this.errorMessage = errorMessage;
    }
}

module.exports = InternalServerError;