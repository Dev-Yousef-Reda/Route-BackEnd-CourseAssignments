import successResponse from '../../common/successResponse.js';
import * as PostsService from './posts.service.js'

async function addPost(req, res) {
    const inputs = req.body;
    const post = await PostsService.addPost(inputs)
    successResponse({ res, data: post, status: 201, message: 'post is created successfully' })
}

async function getAllPosts(req, res) {
    const posts = await PostsService.getAllPosts()
    successResponse({ res, data: posts, status: 200 })
}

async function getPostsCommentsNumber(req, res) {
    const posts = await PostsService.getPostsCommentsNumber()
    const data = posts
    successResponse({ res, data, status: 200 })
}

async function deletePost(req, res) {
    const { id: postId } = req.params;
    const { userId } = req.body;
    await PostsService.deletePost(postId, userId)
    successResponse({ res, data: undefined, status: 200, message: 'post is deleted' })
}

export {
    addPost,
    deletePost,
    getAllPosts,
    getPostsCommentsNumber
}
