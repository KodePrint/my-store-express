const bcrypt = require('bcryptjs')
const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class CustomersService {

  // Crea un nuevo usuario y lo retorna
  async create(body) {
    const customer = await models.Customer.create(body);
    return customer;
  }

  // Retorna el listado de todos los usuarios de la base de datos
  async getAll() {
    const customers = await models.Customer.findAll({
      include: ['user']
    })
    return customers
  }

  // Retorna un usuario por su primaryKey
  async getOne(id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['user']
    })
    if (!customer) {
      throw boom.notFound(`Customer with id:${id} not exits..!`)
    }
    return customer
  }

  // Actualiza una categoria y la retorna
  async update(id, changes) {
    const customer = await this.getOne(id);
    const updateCustomer = await customer.update(changes);
    return updateCustomer;
  }

  // Cambia el estado a falso para persistencia de informacion
  async partialDelete(id) {
    const customer = await this.getOne(id);
    customer.update({'state': false})
    let name = await customer.getDataValue('name')
    return {
      message: `customer with name: ${name} has ben deleted of the app successfull..!`
    };
  }

  // Elimina una categoria de la base de datos
  async delete(id) {
    const customer = await this.getOne(id);
    let name = await customer.getDataValue('name')
    await customer.destroy();
    return {
      message: `customer with name: ${name} has ben deleted successfull..!`
    };
  }
}

module.exports = CustomersService;
