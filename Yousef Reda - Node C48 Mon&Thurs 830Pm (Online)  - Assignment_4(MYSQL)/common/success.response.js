export function successResponse({ res, message = "done", data = undefined, status = 200 }) {
    res.status(status).json({ message, status, data })
}