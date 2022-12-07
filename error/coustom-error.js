class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
const createCoustomAPIError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode);
}
module.exports = { createCoustomAPIError, CustomAPIError }