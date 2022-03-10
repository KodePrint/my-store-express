const {products} = require('../data/products')
const boom = require('@hapi/boom')

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generateId() {
        // Genera in nuevo id para el producto segun el largo del arreglo
        return this.products.length + 1
    }
    generate() {
        // Genera el arreglo de productos dentro de servicios trayendo del arreglo productos en data
        this.products = this.products.concat(products)
    }

    async create(body) {
        // Crea un nuevo producto
        if (JSON.stringify(body) === '{}') {
            throw boom.badRequest('Error the Product could not be created..!')
            // throw new Error('Error the Product could not be created..!')
        }
        const newProduct = {
            id: this.generateId(),
            name: body.name,
            price: body.price,
            image: body.image
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        // Busca los productos
        return new Promise((resolve, rejecet) => {
            setTimeout(() => {
                resolve(this.products);
            }, 5000)
        })
        // return this.products;
    }

    async findOne(id) {
        // Busca un producto por us id
        const product = this.products.find(item => item.id == id);
        console.log(product)
        if (!product) {
            throw boom.notFound('Product not found..!')
        }
        return product;
    }

    async update(id, changes) {
        // Actualiza un producto por su id
        id = parseInt(id)
        const index = this.products.findIndex(products => products.id === id);
        if (index === -1){
            throw boom.notFound('Product not found..!')
            // throw new Error('Product not foud')
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        // Borra un producto de la lista
        id = parseInt(id)
        const index = this.products.findIndex(products => products.id === id);
        if (index === -1){
            throw boom.notFound('Product not foud')
        }
        const product = this.products[index];
        this.products.splice(index, 1);
        return {message: `Producto: ${product.name} eliminado correctamente`}
    }

}

module.exports = ProductsService;