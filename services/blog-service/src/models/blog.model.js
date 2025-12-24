const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    blogName: {
        type: String,
        required: true,
        minlength: 20
    },
    category: {
        type: String,
        required: true,
        minlength: 20,
        index: true
    },
    article: {
        type: String,
        required: true,
        minlength: 1000
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', BlogSchema)