const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')
// DocSchemes
const {docUserScheme} = require('./userSwaggerScheme')
const {docProfileScheme} = require('./profileSwaggerScheme')
const {docAddressScheme} = require('./addressSwaggerScheme')


const documents = path.resolve(__dirname, '../routes/docs/*.js')

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentation My-Sotre API",
        version: "1.0.0",
        description: "In this documentation can you know the use of the API My-Store, the consume and use of the all endpoints"
    },
    servers: [
        {url: "https://my-store-kodeprint.herokuapp.com/api/v1/"},
        {url: "http://localhost:3000/api/v1/"},
    ],
    tags: [
        {
            name: "User",
            description: "Endpoints for all operation with user"
        },
        {
            name: "Profile",
            description: "Endpoints for all operation with profile user"
        },
        {
            name: "Address",
            description: "Endpoints for all operation with address user"
        },
        {
            name: "Measuer Unit",
            description: "Endpoints for all operation with measure unit of products"
        },
        {
            name: "Product",
            description: "Endpoints for all operation with product"
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            user: docUserScheme,
            profile: docProfileScheme,
            address: docAddressScheme,
            category: {
                type: "object",
                required: ["description"],
                properties: {
                    description: {
                        type: "string"
                    },
                    state: {
                        type: "boolean",
                        default: "true"
                    },
                },
                example: {
                    description: "smartphones"
                }
            },
            product: {
                type: "object",
                required: ["name", "description", "image", "price"],
                properties: {
                    name: {type: "srting"},
                    description: {type: "srting"},
                    image: {type: "srting"},
                    price: {type: "number"},
                    state: {type: "boolean", default: "true"},
                },
                example: {
                    name: "Kingston Data Travel 3.0 64GB",
                    description: "Flashdrive USB 3.0 64GB Kingston white/red model rtx95-64",
                    image: "https://static.kemikcdn.com/2017/06/image_39_.png",
                    price: 85.00,
                    state: true
                }
            },
        },
    }
};
const swaggerOptions = {
    swaggerDefinition,
    apis: [documents],
};

module.exports = swaggerJSDoc(swaggerOptions)
