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

const deleteBlog = async (userId, blogId) => {
    const blog = await blogRepository.findBlogById(blogId)

    if (!blog) {
        const error = new Error("Blog not found")
        error.statusCode = 404
        throw error
    }

    if(blog.authorId.toString() !== userId) {
        const error = new Error("You are not allowed to delete this blog")
        error.statusCode = 403
        throw error
    }

    await blogRepository.deleteBlogById(blogId)
}

module.exports = { addBlog, deleteBlog }