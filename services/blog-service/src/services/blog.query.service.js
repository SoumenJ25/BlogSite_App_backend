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

const getAllUserBlogs = async (filters) => {

    const blogs = await blogRepository.findAllBlogs(filters)

    if (!blogs || blogs.length === 0) {
        return {
            message: "No blogs available",
            data: []
        }
    }

    return {
        count: blogs.length,
        data: blogs
    }
}

module.exports = { getBlogsByAuthor, getAllUserBlogs }