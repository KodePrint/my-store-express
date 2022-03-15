const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')


class OrderService {

  // Retorna todas las ordenes
  async getAll() {
    const orders = await models.Order.findAll();
    return orders;
  }

  // Retorna una categoria por pk
  async getOne(id) {
    const order = await models.Order.findByPk(id, {
      attributes: ['id', 'description',],
      include: [{
        association: 'products',
        attributes: ['id', 'name','description','image','price']
      }]
    });
    if (!order) {
      throw boom.notFound(`Order with id:${id} not exits..!`)
    }
    return order;
  }

  // Crea una categoria y la retorna
  async create(body) {
    const newOrder = await models.Order.create(body)
    return newOrder;
  }

  // Actualiza una categoria y la retorna
  async update(id, changes) {
    const order = await this.getOne(id);
    const updateOrder = await order.update(changes);
    return updateOrder;
  }

  // Cambia el estado a falso para persistencia de informacion
  async partialDelete(id) {
    const order = await this.getOne(id);
    order.update({'state': false})
    let id = await order.getDataValue('id')
    return {
      message: `Categori with Id: ${id} has ben deleted of the app successfull..!`
    };
  }

  // Elimina una categoria de la base de datos
  async delete(id) {
    const order = await this.getOne(id);
    let id = await order.getDataValue('id')
    await order.destroy();
    return {
      message: `Category with Id: ${id} has ben deleted successfull..!`
    };
  }

}

module.exports = OrderService
