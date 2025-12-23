const express = require('express')
const { createBlogController } = require("../controllers/blog.controller")
const { authMiddleware } = require("../middlewares/auth.middleware")
const { createBlogValidator } = require("../validators/blog.validator")

const router = express.Router()

router.post('/blogs/add', authMiddleware, createBlogValidator, createBlogController)

module.exports = router