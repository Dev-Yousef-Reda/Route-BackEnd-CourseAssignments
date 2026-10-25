import successResponse from '../../common/successResponse.js';
import * as CommentsService from './comments.service.js'

async function createComments(req, res) {
    const comments = req.body
    await CommentsService.createComments(comments)
    successResponse({ res, status: 201, message: "comments created" })
}

async function updateComment(req, res) {
    const { id: commentId } = req.params;
    const { userId, content } = req.body;
    await CommentsService.updateComment({ commentId, userId, content })
    successResponse({ res, data: undefined, status: 200, message: 'Comment is updated' })
}

async function findOrCreateComment(req, res) {
    const { postId, userId, content } = req.body;
    const { id: commentId } = req.params
    const { comment, created } = await CommentsService.findOrCreateComment({ postId, userId, content, commentId })
    successResponse({ res, data: { comment, created }, status: created ? 201 : 200 })
}

async function searchForComment(req, res) {
    const { word } = req.query;
    const { count, comments } = await CommentsService.searchForComment({ word })

    successResponse({ res, data: { count, comments } })
}

async function getRecentComments(req, res) {
    const { limit } = req.body;
    const { postId } = req.params;
    const comments = await CommentsService.getRecentComments({ limit, postId })
    successResponse({ res, data: comments })
}

async function getCommentDetails(req, res) {
    const { id } = req.params;
    const comment = await CommentsService.getCommentDetails({ id })
    successResponse({ res, data: comment })
}

export {
    createComments,
    updateComment,
    findOrCreateComment,
    searchForComment,
    getRecentComments,
    getCommentDetails
}
