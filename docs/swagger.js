const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')

const documents = path.resolve(__dirname, '../routes/docs/*.js')
console.log('this route swagger: ' + documents)
console.log(typeof(documents))

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentation My-Sotre API",
        version: "1.0.0",
        description: "In this documentation can you know the use of the API My-Store, the consume and use of the all endpoints"
    },
    servers: [
        {url: "https://my-store-kodeprint.herokuapp.com/api/v1/"},
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
            beareAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            user: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                    state: {
                        type: "boolean",
                        default: "true"
                    },
                },
                example: {
                    email: "admin@my-store.com",
                    passwod: "admin123*%"   
                }
            },
            profile: {
                type: "object",
                required: ["name", "lastName", 'image', 'phone', 'userId'],
                properties: {
                    name: {
                        type: "string"
                    },
                    lastName: {
                        type: "string"
                    },
                    image: {
                        type: "string"
                    },
                    phone: {
                        type: "string"
                    },
                    userId: {
                        type: "number",
                        description: "This field is a relation on user"
                    },
                    state: {
                        type: "boolean",
                        default: "true"
                    },
                },
                example: {
                    name: "Admin",
                    lastName: "User",
                    image: "https://www.flaticon.com/free-icon/admin_324125",
                    phone: "+001 789 214 85",
                    userId: 1,
                }
            },
            address: {
                type: "object",
                required: ["postalCode", "country", "city", "description", "userId"],
                properties: {
                    postalCode: {
                        type: "string"
                    },
                    country: {
                        type: "string"
                    },
                    city: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    },
                    reference: {
                        type: "string"
                    },
                    userId: {
                        type: "number",
                        description: "This field is a relation on user"
                    },
                    state: {
                        type: "boolean",
                        default: "true"
                    },
                },
                example: {
                    postalCode: "5001678",
                    country: "New Haven York",
                    city: "Gotham",
                    description: "The Arkan reclusory",
                    reference: "In the corner of city",
                    userId: 1,   
                }
            },
            category: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string"
                    },
                    passwod: {
                        type: "string"
                    },
                    state: {
                        type: "boolean",
                        default: "true"
                    },
                },
                example: {
                    email: "admin@my-store.com",
                    passwod: "admin123*%"   
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