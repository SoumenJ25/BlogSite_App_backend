const express = require('express')
const { createBlogController, getUserBlogs, deleteUserBlogById } = require("../controllers/blog.controller")
const { authMiddleware } = require("../middlewares/auth.middleware")
const { createBlogValidator, deleteBlogValidator } = require("../validators/blog.validator")

const router = express.Router()

// Add new Blog for a user
router.post('/blogs/add', authMiddleware, createBlogValidator, createBlogController)

// Get all the blogs of a user
router.get('/blogs/getall', authMiddleware, getUserBlogs)

// Delete a blog of a user
router.delete('/blogs/delete', authMiddleware, deleteBlogValidator, deleteUserBlogById)

module.exports = router