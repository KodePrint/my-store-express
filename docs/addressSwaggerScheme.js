const docAddressScheme = {
    type: "object",
        required: ["postalCode", "country", "city", "description", "userId"],
        properties: {
            id: {
                type: "number",
                description: "auto-increment"
            },
            postalCode: {
                type: "string"
            },
            country: {
                type: "string"
            },
            city: {
                type: "string",
            },
            description: {
                type: "string",
            },
            reference: {
              type: "string",
            },
            userId: {
                type: "number",
                description: "this is a foreign key with user"
            },
            state: {
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
        },
        example: {
          "id": 1,
          "postalCode": "300125",
          "country": "Mushroom kingdom",
          "city": "Toad Town",
          "description": "Mario Bros.' House",
          "reference": "Chocolat Mountains",
          "userId": 1
        }
}

module.exports = { docAddressScheme }
