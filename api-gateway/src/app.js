const express = require("express");
const gatewayRoutes = require("./routes/gateway.routes");
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swagger/swagger")

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

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