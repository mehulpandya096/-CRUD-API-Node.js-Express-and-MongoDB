const { CustomAPIError } = require('../error/coustom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'Somthing want wrong..! Try agin' })
}

module.exports = errorHandlerMiddleware