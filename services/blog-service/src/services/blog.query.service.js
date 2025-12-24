const blogRepository = require("../repositories/blog.repository")

const getBlogsByAuthor = async (authorId) => {
    const blogs = await blogRepository.findBlogByAuthorId(authorId)

    if (!blogs || blogs.length === 0) {
        return {
            message: "No blogs found for this user",
            data: []
        }
    }

    return {
        message: "Blogs fetched successfully",
        data: blogs
    }
}

module.exports = { getBlogsByAuthor }