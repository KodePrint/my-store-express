const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CategoriesService {

  constructor() {
  }

  // Retorna todas las categorias
  async getAll() {
    const categories = await models.Category.findAll({
      attributes: ['id', 'description',],
    });
    return categories;
  }

  // Retorna una categoria por pk
  async getOne(id) {
    const category = await models.Category.findByPk(id, {
      attributes: ['id', 'description',],
      include: [{
        association: 'products',
        attributes: ['id', 'name','description','image','price']
      }]
    });
    if (!category) {
      throw boom.notFound(`Category with id:${id} not exits..!`)
    }
    return category;
  }

  // Retorna una categoria por descripcion
 async getByName(descripcion) {
  const category = await models.Category.findOne({where: {description: descripcion}}, {
    attributes: ['id', 'description',],
    include: [{
      association: 'products',
      attributes: ['id', 'name','description','image','price']
    }]
  });
  if (!category) {
    throw boom.notFound(`Category with id:${id} not exits..!`)
  }
  return category;
}

  // Crea una categoria y la retorna
  async create(body) {
    const newCategory = await models.Category.create(body)
    return newCategory;
  }

  // Actualiza una categoria y la retorna
  async update(id, changes) {
    const category = await this.getOne(id);
    const updateCategory = await category.update(changes);
    return updateCategory;
  }

  // Cambia el estado a falso para persistencia de informacion
  async partialDelete(id) {
    const category = await this.getOne(id);
    category.update({'state': false})
    let description = await category.getDataValue('description')
    return {
      message: `Category with description: ${description} has ben deleted of the app successfull..!`
    };
  }

  // Elimina una categoria de la base de datos
  async delete(id) {
    const category = await this.getOne(id);
    let description = await category.getDataValue('description')
    await category.destroy();
    return {
      message: `Category with description: ${description} has ben deleted successfull..!`
    };
  }
}

module.exports = CategoriesService;
