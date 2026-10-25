import User from "../users/user.model.js"
import Comment from "../comments/comment.model.js"
import Post from "./post.model.js"
import { sequelize } from "../../db/connection.js"

async function addPost(inputs) {
    const post = Post.build(inputs)
    await post.save()
    return post
}

async function deletePost(postId, userId) {
    const post = (await Post.findByPk(postId))?.toJSON()
    if (!post) {
        throw new Error("Post isn't found", { cause: { status: 404 } })
    }
    if (post.userId != userId) {
        throw new Error(`You aren't authorized to delete this post`, { cause: { status: 400 } })
    }
    await Post.destroy({ where: { id: postId } })
}

async function getAllPosts() {
    const posts = await Post.findAll({
        attributes: ['id', 'title'],
        include: [
            { model: User, attributes: ['id', 'name'] },
            { model: Comment, attributes: ['id', 'content'] },
        ]
    })
    return posts
}
//  Doing the comments count with JS
// async function getPostsCommentsNumber() {
//     const posts = await Post.findAll({
//         attributes: ['id', 'title'],
//         include: [
//             { model: Comment, attributes: ['id'] },
//         ]
//     })
//     const postComments = posts.map((post) => ({
//         id: post.id,
//         title: post.title,
//         commentsCount: post.Comments.length
//     }))
//     return postComments
// }



//  Doing the comments count with SQL
async function getPostsCommentsNumber() {
    return Post.findAll({
        attributes: [
            'id',
            'title',
            [sequelize.fn('COUNT', sequelize.col('Comments.id')), 'commentsCount'],
        ],
        include: [{ model: Comment, attributes: [] }],
        group: ['Post.id'],
    })
}

export {
    addPost,
    deletePost,
    getAllPosts,
    getPostsCommentsNumber
} 