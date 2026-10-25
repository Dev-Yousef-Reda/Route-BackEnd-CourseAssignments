export default function globalErrorHandling(err, req, res, next) {

    if (err.message.includes("Validation error")) {
        if (err.name == 'SequelizeUniqueConstraintError') {
            return res.status(409).json({
                message: err.errors[0].message,
            })
        }
        return res.status(400).json({
            message: err.errors[0].message,
        })
    }

    return res.status(err.cause?.status ?? 500).json({
        message: err.message ?? 'internal server error',
    })
}