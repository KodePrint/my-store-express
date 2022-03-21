const {products} = require('../data/products')
const boom = require('@hapi/boom')
const pool = require('../libs/postgresPool')
const {Op} = require('sequelize')

const { models } = require('../libs/sequelize')


class ProductsService {

  // Crea un nuevo Producto y lo retorna
  async create(body) {
    const product = await models.Product.create(body);
    return product;
  }

  // Retorna los productos totales o bien por limite
  async getAll(query) {
    const options = {
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
      ],
      where: {}
    }
    // Obteniendo el limite de productos para paginar
    const {limit, offset} = query;
    if (limit && offset) {
      options.limit = parseInt(limit);
      options.offset = parseInt(offset);
    }
    // Obteniendo el rango de precios
    const {price_min, price_max} = query;
    console.log(typeof(limit))
    console.log(typeof(offset))
    if (limit && offset) {
      options.where.price = {[Op.gte]: price_min, [Op.lte]:price_max}
    }
    const products = await models.Product.findAll(options)
    return products;
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
