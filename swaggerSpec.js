const { dir } = require('console');
const path = require('path')

const routes = path.resolve(__dirname, './routes/*.js')

const swaggerSpec = {
    definition:  {
	openapi:"3.0.0",
	info: {
	    title: "My Store API",
	    version: "1.0.0",
	},
	servers: [
	    {url: "https://my-store-kodeprint.herokuapp.com/"},
	],
    },
    apis: [path.resolve(__dirname, './routes/*.js')]
}

console.log(routes)

module.exports = swaggerSpec;