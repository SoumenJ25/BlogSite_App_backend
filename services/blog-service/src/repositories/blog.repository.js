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

const findAllBlogs = async ({ category, startDate, endDate }) => {
    const query = {}

    if(category) {
        query.category = {
            $regex: category,
            $options: 'i'
        }
    }

    if(startDate || endDate) {
        query.createdAt = {}
        if(startDate){
            query.createdAt.$gte = new Date(startDate)
        }
        if(endDate){
            query.createdAt.$lte = new Date(endDate)
        }
    }

    return Blog.find(query).sort({ createdAt: -1 })
}

module.exports = {
    createBlog,
    findBlogByAuthorId,
    deleteBlogById,
    findBlogById,
    findAllBlogs
}