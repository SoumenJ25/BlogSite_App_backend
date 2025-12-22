const UserModel = require("../models/user.model")

const createUser = async (username, email, password) => {
    return UserModel.create({
        username,
        email,
        password
    })


}

const doesEmailExist = (email) => {
    return UserModel.findOne({ email })
}

module.exports = {
    createUser,
    doesEmailExist
}