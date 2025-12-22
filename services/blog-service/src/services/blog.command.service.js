const blogRepository = require("../repositories/blog.repository")

const addBlog = async (user, data) => {
    const blog = await blogRepository.createBlog({
        blogName: data.blogName,
        category: data.category,
        article: data.article,
        authorId: user.id,
        authorName: user.username,
        createdAt: new Date()
    })

    return {
        blog
    }
}

module.exports = { addBlog }