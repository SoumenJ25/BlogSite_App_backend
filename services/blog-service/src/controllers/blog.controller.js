const { validationResult } = require('express-validator')
const blogCommandService = require("../services/blog.command.service")
const blogQueryService = require("../services/blog.query.service")

const createBlogController = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const blog = await blogCommandService.addBlog(req.user, req.body)
    res.status(201).json(blog)
}

const getUserBlogs = async (req, res) => {
    try {
        const userId = req.user.id
        const blogs = await blogQueryService.getBlogsByAuthor(userId)
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUserBlogById = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: errors.array().map((err) => {
                    return {
                        field: err.param,
                        message: err.msg
                    }
                })
            })
        }

        const { blogId } = req.body

        await blogCommandService.deleteBlog(req.user.id, blogId)

        res.status(200).json({
            message: "Blog is deleted successfully"
        })

    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || "Internal Server Error"
        })
    }
}

module.exports = {
    createBlogController,
    getUserBlogs,
    deleteUserBlogById
}