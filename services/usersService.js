const bcrypt = require('bcryptjs')
const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class UsersService {

  // Crea un nuevo usuario y lo retorna
  async create(body) {
    let password_hashed = await bcrypt.hash(body.password, 8)
    // bcrypt.compare(body.password, password_hashed)
    //   .then((res) => {
    //     console.log(true)
    //   })
    body.password = password_hashed
    const rta = await models.User.create(body);
    return rta;
  }

  // Retorna el listado de todos los usuarios de la base de datos
  async getAll() {
    const rta = await models.User.findAll()
    return rta
  }

  // Retorna un usuario por su primaryKey
  async getOne(id) {
    const rta = await models.User.findByPk(id)
    if (!rta) {
      throw boom.notFound(`User with id:${id} not exits..!`)
    }
    return rta
  }

  // Obtiene un usuario por su primarykey, acutaliza sus campos y lo retorna
  async update(id, changes) {
    const user = await this.getOne(id);
    const rta = await user.update(changes);
    return rta;
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
