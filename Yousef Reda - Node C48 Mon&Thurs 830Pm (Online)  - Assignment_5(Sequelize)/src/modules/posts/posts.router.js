
import * as PostsController from './posts.controller.js'

import { Router } from 'express'

const router = Router()

router.get('/details', PostsController.getAllPosts)
router.get('/comments-count', PostsController.getPostsCommentsNumber)
router.post('/', PostsController.addPost)
router.delete('/:id', PostsController.deletePost)


export default router