class BadRequest extends Error {
    constructor(message){
        const finalMessage = `${message} is missing from request Body.`
        super(message);
        this.statusCode = 400;
        this.errorMessage = finalMessage;
    }
}

module.exports = BadRequest;