import { Op } from "sequelize"
import Comment from "./comment.model.js"
import Post from '../posts/post.model.js'
import User from '../users/user.model.js'

async function createComments(inputs) {
    await Comment.bulkCreate(inputs)
}

async function updateComment({ commentId, userId, content }) {
    const comment = (await Comment.findByPk(commentId))?.toJSON()
    if (!comment) {
        throw new Error("comment isn't found", { cause: { status: 404 } })
    }
    if (comment.userId != userId) {
        throw new Error(`You aren't authorized to update this comment`, { cause: { status: 400 } })
    }
    await Comment.update(
        { content },
        { where: { id: commentId } }
    )
}

async function findOrCreateComment({ postId, userId, content, commentId: id }) {
    const [comment, created] = await Comment.findOrCreate({
        where: { id },
        defaults: { postId, userId, content },
    })
    return { comment, created }
}

async function searchForComment({ word }) {
    const { count, rows: comments } = await Comment.findAndCountAll({
        where: { content: { [Op.like]: `%${word}%` } }
    })
    if (count == 0) {
        throw new Error('no comments found', { cause: { status: 404 } })
    }
    return { count, comments }
}

async function getRecentComments({ limit, postId }) {
    const comments = await Comment.findAll({
        where: { postId },
        attributes: ['id', 'content', 'createdAt'],
        order: [['createdAt', 'DESC']],
        limit: Number(limit) || 3
    })
    return comments
}

async function getCommentDetails({ id }) {
    const comment = await Comment.findOne({
        where: { id },
        attributes: ['id', 'content'],
        include: [
            { model: Post, attributes: ['id', 'title', 'content'] },
            { model: User, attributes: ['id', 'email', 'name'] }
        ]
    })
    if (!comment) {
        throw new Error(`comment doesn't exist `, { cause: { status: 404 } })
    }
    return comment
}

export {
    createComments,
    updateComment,
    findOrCreateComment,
    searchForComment,
    getRecentComments,
    getCommentDetails
} 