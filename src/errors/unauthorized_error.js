const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class UnauthorizedError extends Error {
    constructor(message){
        const errorMessage = (message) ? message : `Invalid credentais passed Try Again...`
        super(errorMessage);
        this.statusCode = StatusCodes.CONFLICT;
        this.name = "UnauthorizedError";
        this.reason = ReasonPhrases.CONFLICT;
        this.errorMessage = errorMessage;
    }
}

module.exports = UnauthorizedError;