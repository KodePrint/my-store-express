import swaggerJSDoc, {OAS3Definition, OAS3Options} "from swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
	title: "My Store DOcumentation API",
	version: "1.0.0",
    },
    servers: [
	{
	    url: "https://my-store-kodeprint.herokuapp.com/",
	},
    ],
    components: {
	securitySchemes: {
	    beareAuth: {
		type:"http",
		scheme:"bearer",
	    },
	},
	schemas: {
	    products: {
		type: "object",
		required: ["name", "price", "image"],
		properties: {
		    name: {
			type: "string",
		    },
		    price: {type: "decimal"},
		    image: {type: "string"},
		},
	    },
	},
    }
};


const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./routes/*.js"],
};

export default swaggerJSDoc(swaggerOptions);
