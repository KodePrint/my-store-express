const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')


class OrderService {

  // Retorna todas las Ordenes
  async getAll() {
    const orders = await models.Order.findAll();
    return orders;
  }

  // Busca por usuario
  async finbyUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        user_id: userId
      },
      attributes: ['id', 'created', 'state', 'total'],
      include: [

        // User Data
        {
          attributes: ['email'],
          association: 'user',
          include: [
            {
              attributes: ['name', 'last_name', 'image', 'phone'],
              association: 'profile'
            },
            {
              attributes: ['postalCode', 'country', 'city', 'description', 'reference'],
              association: 'address'
            },
          ]
        },
        // Items List
        {
          attributes: ['name', 'description', 'price'],
          association: 'items',
        }
      ]
    })
    return orders
  }

  // Retorna una Order por pk
  async getOne(id) {
    const order = await models.Order.findByPk(id, {
      attributes: ['id', 'created', 'state', 'total'],
      include: [

        // User Data
        {
          attributes: ['email'],
          association: 'user',
          include: [
            {
              attributes: ['name', 'last_name', 'image', 'phone'],
              association: 'profile'
            },
            {
              attributes: ['postalCode', 'country', 'city', 'description', 'reference'],
              association: 'address'
            },
          ]
        },
        // Items List
        {
          attributes: ['name', 'description', 'price'],
          association: 'items',
        }
      ]
    });
    if (!order) {
      throw boom.notFound(`Order with id:${id} not exits..!`)
    }
    return order;
  }

  // Crea una Order y la retorna
  async create(user) {
    const body = {userId: user};
    if (await this.getOrderUserActive(user) !== 0) {
      throw boom.conflict('This user have a order pending..!')
    }
    console.log(body)
    const newOrder = await models.Order.create(body)
    return await this.getOne(newOrder.id);
  }

  // Verifica que el usuario no tenga ordenes activas
  async getOrderUserActive(user){
    const order = await models.Order.findAndCountAll({
      where: {
        user_id: user,
        state: 0
      }
    })
    return order.count
  }

  // Crea un nuevo Item para la orden y la retorna
  async addItem(body) {
    const newItem = await models.OrderProduct.create(body)
    return await this.getOne(newItem.id);
  }

  // Actualiza una Order y la retorna
  async update(id, changes) {
    const order = await this.getOne(id);
    const updateOrder = await order.update(changes);
    return updateOrder;
  }

  // Cambia el estado a falso para persistencia de informacion
  async partialDelete(id) {
    const order = await this.getOne(id);
    order.update({'state': false});
    return {
      message: `Order with Id: ${id} has ben deleted of the app successfull..!`
    };
  }

  // Elimina una Order de la base de datos
  async delete(id) {
    const order = await this.getOne(id, {
      include: ['user']
    });
    await order.destroy();
    return {
      message: `Order with Id: ${id} has ben deleted successfull..!`
    };
  }

}

module.exports = OrderService
