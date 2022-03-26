const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class AddressService {

  // Crea una nuea direccion y lo retorna
  async create(body) {
    const address = await models.Address.create(body);
    return address
  }

  // Retorna el listado de todas las direcciones de la base de datos
  async getAll() {
    const address = await models.Address.findAll({
      attributes: ['id', 'postalCode', 'country', 'city', 'description', 'reference', 'userId']
    });
    return address
  }

  // Retorna una direccion por su primaryKey
  async getOne(id) {
    const address = await models.Address.findByPk(id);
    if (!address) {
      throw boom.notFound(`Address with id:${id} not exits..!`);
    };
    return address
  }

  // Obtiene una direccion por su primarykey, acutaliza sus campos y lo retorna
  async update(id, changes) {
    const oldAddress = await this.getOne(id);
    const newAddress = await oldAddress.update(changes);
    return newAddress;
  }

  // Obtiene una direccion por primaryKey y le cambia el state a falso para descativarlo
  async partialDelete(id) {
    const address = await this.getOne(id);
    let description = await address.getDataValue('description')
    await address.update({'state': false})
    return {
      message: `Address with description: ${description} has ben deactivated successfull..!`
    };
  }

  // Obtiene una direccion por primaryKey y lo elimina de la base de datos
  async delete(id) {
    const address = await this.getOne(id);
    let description = await address.getDataValue('description')
    await address.destroy();
    return {
      message: `Address with description: ${description} has ben deleted successfull..!`
    };
  }
}

module.exports = AddressService;
