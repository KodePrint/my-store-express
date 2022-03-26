const docUserScheme = {
    type: "object",
        required: ["email", "password"],
        properties: {
            id: {
                type: "number",
                description: "auto-increment"
            },
            email: {
                type: "string"
            },
            password: {
                type: "string"
            },
            role: {
                type: "string",
                default: "customer"
            },
            isActive: {
                type: "boolean",
                default: "true"
            },
            isAdmin: {
                type: "boolean",
                default: "false"
            },
            isStaff: {
                type: "boolean",
                default: "false"
            },
            created: {
                type: "date",
                default: "timestamp"
            },
            updated: {
                type: "date",
                default: "timestamp"
            },
            profile: {
                type: "object",
                xml: {
                  name: "profile",
                  wrapped: true
                },
                $ref: "#/components/schemas/profile"
            },
            address: {
                type: "array",
                xml: {
                  name: "address",
                  wrapped: true
                },
                $ref: "#/components/schemas/address"
            },
        },
        example: {
            "id": 1,
            "email": "supermariobross@gmail.com",
            "role": "customer",
            "isActive": true,
            "isAdmin": false,
            "isStaff": false,
            "profile": {
                "name": "Mario",
                "lastName": "Mario",
                "image": "https://sm.ign.com/t/ign_latam/news/n/nintendo-o/nintendo-officially-partnering-with-illumination-on-mario-mo_pwkn.1200.png",
                "phone": "+3001 458 127 25"
            },
            "address": [
                {
                    "postalCode": "300125",
                    "country": "Mushroom kingdom",
                    "city": "Toad Town",
                    "description": "Mario Bros.' House",
                    "reference": "Chocolat Mountains"
                },
            ]
        }
}

module.exports = { docUserScheme }
