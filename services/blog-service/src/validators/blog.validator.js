const { body } = require("express-validator")

const createBlogValidator = [
    body('blogName')
        .notEmpty().withMessage('blogName cannot be empty')
        .isLength({ min: 20 })
        .withMessage('Blog name must be at least 20 characters'),

    body('category')
        .notEmpty().withMessage('category cannot be empty')
        .isLength({ min: 20 })
        .withMessage('Category must be at least 20 characters'),

    body('article')
        .notEmpty().withMessage('article cannot be empty')
        .isLength({ min: 1000 })
        .withMessage('Article must be at least 1000 characters')
]

const deleteBlogValidator = [
    body('blogId')
        .notEmpty().withMessage('blogId is required')
        .isMongoId().withMessage('Invalid blogId format')
]

module.exports = { createBlogValidator, deleteBlogValidator }