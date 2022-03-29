const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')

const {  } =require('./usersService')

const { models } = require('../libs/sequelize')

class ProfileService {

  // Crea un nuevo perfil y lo retorna
  async create(body) {
    if (body.user) {
      let password_hashed = await bcrypt.hash(body.user.password, 10)
      body.user.password = password_hashed
    }
    const newProfile = await models.Profile.create(body, {
      attributes: ['id', 'name', 'lastName', 'image', 'phone', 'userId'],
      include: ['user']
    });
    return await this.getOne(newProfile.id);
  }

  // Retorna el listado de todos los perfiles de la base de datos
  async getAll() {
    const profiles = await models.Profile.findAll();
    return profiles
  }

  // Retorna un perfil por su primaryKey
  async getOne(id) {
    const profile = await models.Profile.findByPk(id, {
      attributes: ['id', 'name', 'lastName', 'image', 'phone', 'userId'],
      include: {
        association: 'user',
        attributes: ['id', 'email', 'role']
      }
    });
    if (!profile) {
      throw boom.notFound(`Profile with id:${id} not exits..!`);
    };
    return profile
  }

  // Obtiene un perfil por su primarykey, acutaliza sus campos y lo retorna
  async update(id, changes) {
    if (changes.user) {
      let password_hashed = await bcrypt.hash(changes.user.password, 10)
      changes.user.password = password_hashed
    }
    const oldProfile = await this.getOne(id);
    await oldProfile.update(changes);
    const updateProfile = await this.getOne(id);
    console.log(updateProfile)
    return {
      message: `Profile with email: ${updateProfile.user.email} has ben updated successfull..!`,
      updateProfile
    };
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
