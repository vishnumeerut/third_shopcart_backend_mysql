const { ReasonPhrases, StatusCodes } = require("http-status-codes");

class ConflictError extends Error {
    constructor(message, invalid=null){
        const finalMessage = (invalid) ? `${message} is invalid in the request`  : `${message} is missing from request Body.`
        super(message);
        this.statusCode = StatusCodes.CONFLICT;
        this.name = "ConflictError";
        this.reason = ReasonPhrases.CONFLICT;
        this.errorMessage = finalMessage;
    }
}

module.exports = ConflictError;