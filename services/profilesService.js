const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class ProfileService {

  // Crea un nuevo perfil y lo retorna
  async create(body) {
    const profile = await models.Profile.create(body);
    return profile
  }

  // Retorna el listado de todos los perfiles de la base de datos
  async getAll() {
    const profiles = await models.Profile.findAll();
    return profiles
  }

  // Retorna un perfil por su primaryKey
  async getOne(id) {
    const profile = await models.Profile.findByPk(id);
    if (!profile) {
      throw boom.notFound(`Profile with id:${id} not exits..!`);
    };
    return profile
  }

  // Obtiene un perfil por su primarykey, acutaliza sus campos y lo retorna
  async update(id, changes) {
    const oldProfile = await this.getOne(id);
    const newProfile = await oldProfile.update(changes);
    return newProfile;
  }

  // Obtiene un perfil por primaryKey y le cambia el state a falso para descativarlo
  async partialDelete(id) {
    const profile = await this.getOne(id);
    let name = await profile.getDataValue('name')
    await profile.update({'state': false})
    return {
      message: `Profile with name: ${name} has ben deactivated successfull..!`
    };
  }

  // Obtiene un usuario por primaryKey y lo elimina de la base de datos
  async delete(id) {
    const profile = await this.getOne(id);
    let name = await profile.getDataValue('name')
    await profile.destroy();
    return {
      message: `Profile with name: ${name} has ben deleted successfull..!`
    };
  }
}

module.exports = ProfileService;