const express = require("express");
const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");
const { userService } = require("../config/services")

const router = express.Router();

router.use(
    "/v1/blogSite/user",
    createProxyMiddleware({
        target: userService.baseUrl,
        changeOrigin: true,
        pathRewrite: (path, req) => {
            return `/api/v1/blogsite/user${path}`;
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
);

module.exports = router;