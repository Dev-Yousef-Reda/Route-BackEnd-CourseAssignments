import * as CommentsController from './comments.controller.js'

import { Router } from 'express'

const router = Router()

router.get('/search', CommentsController.searchForComment)
router.get('/newest/:postId', CommentsController.getRecentComments)
router.get('/details/:id', CommentsController.getCommentDetails)
router.post('', CommentsController.createComments)
router.post('/:id', CommentsController.findOrCreateComment)
router.patch('/:id', CommentsController.updateComment)


export default router