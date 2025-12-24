const Blog = require("../models/blog.model")

const createBlog = async (blogData) => {
    return Blog.create(blogData)
}

const findBlogByAuthorId = async (authorId) => {
    return Blog.find({ authorId }).sort({ createdAt: -1 })
}

module.exports = { createBlog, findBlogByAuthorId }