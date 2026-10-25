export default function successResponse({ res, status = 200, message = 'done', data = undefined }) {
    res.status(status).json({ message, data })
}