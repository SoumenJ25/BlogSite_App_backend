const express = require('express')
const { createBlogController, getUserBlogs } = require("../controllers/blog.controller")
const { authMiddleware } = require("../middlewares/auth.middleware")
const { createBlogValidator } = require("../validators/blog.validator")

const router = express.Router()

router.post('/blogs/add', authMiddleware, createBlogValidator, createBlogController)
router.get('/blogs/getall', authMiddleware, getUserBlogs)

module.exports = router