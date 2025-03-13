function errorResponse(message, errorObj) {
    return {
        success:false,
        data:{},
        message:message,
        error: errorObj,
    }
}

module.exports = errorResponse;