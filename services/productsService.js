const {products} = require('../data/products')
const boom = require('@hapi/boom')
const pool = require('../libs/postgresPool')

const { models } = require('../libs/sequelize')


class ProductsService {

  // Crea un nuevo Producto y lo retorna
  async create(body) {
    const product = await models.Product.create(body);
    return product;
  }

    async getAll() {
        // Busca los productos
        const rta = await models.Product.findAll({
          attributes: ['id', 'name','description','image','price'],
          include: [
            {
              association: 'measure_unit',
              attributes: ['description',]
            },
            {
              association: 'category',
              attributes: ['description',]
            },
          ]
        })
        return rta;
    }

    async getOne(id) {
        // Busca un producto por us id
        const rta = await models.Product.findByPk(id, {
          attributes: ['id', 'name','description','image','price'],
          include: [
            {
              association: 'measure_unit',
              attributes: ['description',]
            },
            {
              association: 'category',
              attributes: ['description',]
            },
          ]
        })
        return rta;
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
