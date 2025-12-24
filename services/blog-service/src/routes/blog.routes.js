const express = require('express')
const { createBlogController, getUserBlogs, deleteUserBlogById, getAllBlogs } = require("../controllers/blog.controller")
const { authMiddleware } = require("../middlewares/auth.middleware")
const { createBlogValidator, deleteBlogValidator } = require("../validators/blog.validator")

const router = express.Router()

// Add new Blog for a user
router.post('/user/blogs/add', authMiddleware, createBlogValidator, createBlogController)

// Get all the blogs of a user
router.get('/user/blogs/getall', authMiddleware, getUserBlogs)

// Delete a blog of a user
router.delete('/user/blogs/delete', authMiddleware, deleteBlogValidator, deleteUserBlogById)

// Get all the blogs from DB
router.get('/blogs/getall', getAllBlogs)

module.exports = router