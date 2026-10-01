
export function globalErrorHandling(err, req, res, next) {
    if (err.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(404).json({
            message: 'product not found',
        })
    }
    return res.status(err.cause?.status || 500).json({
        message: err.message || 'server error',
    })
}