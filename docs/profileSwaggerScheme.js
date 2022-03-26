const docProfileScheme = {
    type: "object",
        required: ["name", "lastName", "image", "phone", "userId"],
        properties: {
            id: {
                type: "number",
                description: "auto-increment"
            },
            name: {
                type: "string"
            },
            lastName: {
                type: "string"
            },
            image: {
                type: "string",
            },
            phone: {
                type: "string",
            },
            state: {
                type: "boolean",
                default: "false"
            },
            userId: {
                type: "number",
                description: "this is a foreign key with user"
            },
            created: {
                type: "date",
                default: "timestamp"
            },
            updated: {
                type: "date",
                default: "timestamp"
            },
        },
        example: {
            email: "admin@my-store.com",
            password: "admin123*%"   
        }
}

module.exports = { docProfileScheme }