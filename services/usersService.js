const bcrypt = require('bcryptjs')
const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class UsersService {

  // Crea un nuevo usuario y lo retorna
  async create(body) {
    let password_hashed = await bcrypt.hash(body.password, 10)
    body.password = password_hashed
    const newUser = await models.User.create(body);
    if (body.profile) {
      const profile = await models.Profile.create({...body.profile, userId: newUser.id})
    }
    if (body.address) {
      const address = await models.Address.create({...body.address, userId: newUser.id})
    }
    return await this.getOne(newUser.id);
  }

  // Retorna el listado de todos los usuarios de la base de datos
  async getAll() {
    const users = await models.User.findAll({
      attributes: ['id', 'email', 'role', 'isActive', 'isAdmin', 'isStaff'],
      include: [
        {
          association: 'profile',
          attributes: ['name', 'lastName', 'image', 'phone']
        },
        {
          association: 'address',
          attributes: ["postalCode", "country", "city", "description", "reference"]
        }
      ],
    })
    return users
  }

  // Retorna un usuario por su primaryKey
  async getOne(id) {
    const user = await models.User.findByPk(id, {
      attributes: ['id', 'email', 'role', 'isActive', 'isAdmin', 'isStaff'],
      include: [
        {
          association: 'profile',
          attributes: ['name', 'lastName', 'image', 'phone']
        },
        {
          association: 'address',
          attributes: ["postalCode", "country", "city", "description", "reference"]
        }
      ],
    })
    if (!user) {
      throw boom.notFound(`User with id:${id} not exits..!`)
    }
    return user
  }

  // Obtiene un usuario por su primarykey, acutaliza sus campos y lo retorna
  async update(id, changes) {
    if (changes.password) {
      console.log(changes.password)
      let password_hashed = await bcrypt.hash(changes.password, 10)
      changes.password = password_hashed
    }
    const odlUser = await this.getOne(id);
    const newUser = await odlUser.update(changes);
    return newUser;
  }

  // Obtiene un usuario por primaryKey y lo elimina de la base de datos
  async partialDelete(id) {
    const user = await this.getOne(id);
    let email = await user.getDataValue('email')
    await user.update({'state':false});
    return {
      message: `User with email: ${email} has ben deactivated successfull..!`
    };
  }

  // Obtiene un usuario por primaryKey y lo elimina de la base de datos
  async delete(id) {
    const user = await this.getOne(id);
    let email = await user.getDataValue('email')
    await user.destroy();
    return {
      message: `User with email: ${email} has ben deleted successfull..!`
    };
  }
}

module.exports = UsersService;
