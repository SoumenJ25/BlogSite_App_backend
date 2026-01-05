const express = require("express")
const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware")
const { userService, blogService } = require("../config/services")

const router = express.Router()
/**!SECTION
 * Always define your routes from most specific to least specific.
 */
router.use(
    "/v1/blogSite/user/blogs",
    createProxyMiddleware({
        target: blogService.baseUrl,
        changeOrigin: true,
        pathRewrite: (path, req) => {
            return `/api/v1/blogSite/user/blogs${path}`
        },

        on: {
            proxyReq(proxyReq, req, res) {
                console.log("gateway achieved for blog:", proxyReq.path)
                fixRequestBody(proxyReq, req)
            },
            proxyRes(proxyRes) {
                console.log("response status code for blog", proxyRes.statusCode)
            },
            error(error, req, res) {
                console.error("error present for blog", error?.message)

            }
        }
    })
)

router.use(
    "/v1/blogSite/blogs",
    createProxyMiddleware({
        target: blogService.baseUrl,
        changeOrigin: true,
        pathRewrite: (path, req) => {
            return `/api/v1/blogSite/blogs${path}`;
        },

        on: {
            proxyReq(proxyReq, req, res) {
                console.log("gateway achieved for all user blogs:", proxyReq.path)
                fixRequestBody(proxyReq, req)
            },
            proxyRes(proxyRes) {
                console.log("response status code for all user blogs", proxyRes.statusCode)
            },
            error(error, req, res) {
                console.error("error present for all user blogs", error?.message)

            }
        }
    })
)

router.use(
    "/v1/blogSite/user",
    createProxyMiddleware({
        target: userService.baseUrl,
        changeOrigin: true,
        pathRewrite: (path, req) => {
            return `/api/v1/blogSite/user${path}`;
        },

        on: {
            proxyReq(proxyReq, req, res) {
                console.log("gateway achieved:", proxyReq.path)
                fixRequestBody(proxyReq, req)
            },
            proxyRes(proxyRes) {
                console.log("response status code", proxyRes.statusCode)
            },
            error(error, req, res) {
                console.error("error present", error?.message)

            }
        }
    })
)

module.exports = router