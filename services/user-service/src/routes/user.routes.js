const express = require("express")
const {register} = require("../controllers/user.controller")
const {registerValidator} = require("../validators/user.validator")

const router = express.Router()

router.post("/register", registerValidator, register);

module.exports = router;
