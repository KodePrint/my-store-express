const docProfileScheme = {
    type: "object",
        required: ["name", "lastName", "image", "phone"],
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
            user: {
                type: "object",
                xml: {
                  name: "user",
                  wrapped: true
                },
                required: ["email", "password"],
                properties: {
                  email: {
                    type: "string",
                  },
                  password: {
                    type: "string",
                  },
                  role: {
                    type: "string",
                    default: "customer"
                  },
                },
                example: {
                  "id": 1,
                  "email": "supermariobross@gmail.com",
                  "role": "customer",
                },
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
          "id": 1,
          "name": "Mario",
          "lastName": "Mario",
          "image": "https://sm.ign.com/t/ign_latam/news/n/nintendo-o/nintendo-officially-partnering-with-illumination-on-mario-mo_pwkn.1200.png",
          "phone": "+3001 458 127 25",
          "userId": 1,
          "user": {
            "id": 1,
            "email": "supermariobross@gmail.com",
            "role": "customer"
          }
        }
}

module.exports = { docProfileScheme }
