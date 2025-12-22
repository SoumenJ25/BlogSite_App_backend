const { validationResult } = require('express-validator')
const blogCommandService = require("../services/blog.command.service")

const createBlogController = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const blog = await blogCommandService.addBlog(req.user, req.body)
    res.status(201).json(blog)
}

module.exports = { createBlogController }