const { body } = require("express-validator")

const registerValidator = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username is required"),
  body('email')
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
  body('password')
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .isAlphanumeric().withMessage("Password must be alphanumeric")
]

const loginValidator = [
  body('email')
    .notEmpty().withMessage("Email is required"),
  body('password')
    .notEmpty().withMessage("Password is required")
]


module.exports = { registerValidator, loginValidator }