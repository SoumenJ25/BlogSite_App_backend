const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'Blog Site API',
        version: '1.0.0',
        description: 'API Documentation for Blog Site Application'
    },
    servers: [
        {
            url: 'http://localhost:4000',
            description: 'Local Server'
        }
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        }
    },
    security: [
        {
            BearerAuth: []
        }
    ]
}

const options = {
    swaggerDefinition: swaggerDef,
    apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec