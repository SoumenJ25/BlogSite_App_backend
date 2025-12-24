const Blog = require("../models/blog.model")

const createBlog = async (blogData) => {
    return Blog.create(blogData)
}

const findBlogByAuthorId = async (authorId) => {
    return Blog.find({ authorId }).sort({ createdAt: -1 })
}

const deleteBlogById = async (blogId) => {
    return Blog.findByIdAndDelete(blogId)
}

const findBlogById = async (blogId) => {
    return Blog.findById(blogId)
}

module.exports = {
    createBlog,
    findBlogByAuthorId,
    deleteBlogById,
    findBlogById
}