const Blog = require("../models/blog.model")

const createBlog = async (blogData) => {
    return Blog.create(blogData)
}

module.exports = { createBlog }