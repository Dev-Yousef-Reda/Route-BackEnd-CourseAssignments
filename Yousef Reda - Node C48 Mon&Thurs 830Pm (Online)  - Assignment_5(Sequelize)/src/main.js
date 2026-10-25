import express from 'express'
import { connectDB } from './db/connection.js'
import './db/index.js'
import globalErrorHandling from './middleware/error.middleware.js'
import usersRouter from './modules/users/users.router.js'
import postsRouter from './modules/posts/posts.router.js'
import commentsRouter from './modules/comments/comments.router.js'

const app = express()

app.use(express.json())

app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/comments', commentsRouter)

app.all('/*dummy', (req, res) => {
    res.status(400).json({ message: "invalid routing" })
})

app.use(globalErrorHandling)

try {
    await connectDB()
    app.listen(3000, () => {
        console.log(`server has started`);
    })
} catch (error) {
    console.log(`failed to connect to DB`, error.message);
    process.exit(1)
}
