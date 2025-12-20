const express = require("express");
const gatewayRoutes = require("./routes/gateway.routes");

const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        service: "api-gateway",
        status: "UP"
    });
});

// Gateway routes
app.use("/api", gatewayRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "API Gateway: Route not found",
        path: req.originalUrl
    });
});

module.exports = app;