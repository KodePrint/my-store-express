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

// class CategoriesService {
//     constructor() {
//         this.categories = [];
//         this.generate();
//     }

//     async generateId() {
//         // Genera in nuevo id para el producto segun el largo del arreglo
//         return this.categories.length + 1
//     }
//     generate() {
//         // Genera el arreglo de productos dentro de servicios trayendo del arreglo productos en data
//         this.categories = this.categories.concat(categories)
//     }

//     // Retorna todas la unidades de medida
//     async getAll() {
//       console.log(await models.Category.getAttributes())
//         // const rta = await models.Category.findAll()
//         // return rta;
//     }

//     // Retora la unidad de medida solicitada por id
//     async getOne(id) {
//         const rta = await models.Category.findByPk(id)
//         return rta;
//     }

//     // Creacion de una unidad de medida
//     async create(body) {
//       console.log(body)
//       let { description } = body
//       const rta = await models.Category.create(body)
//       return body;
//   }

//     async update(id, changes) {
//         // Actualiza una categoria
//         const index = this.categories.findIndex(item => item.id==id)
//         if (index === -1) {
//             throw boom.notFound('Category not found..!')
//         }
//         const category = this.categories[index]
//         this.categories[index] = {
//             ...category,
//             ...changes
//         };
//         return this.categories[index];
//     }

//     async delete(id) {
//         // Elimina una categoria
//         const index = this.categories.findIndex(item => item.id==id)
//         if (index === -1) {
//             throw boom.notFound('Category not found..!')
//         }
//         const category = this.categories[index]
//         this.categories.splice(index, 1)
//         return {message: `Category ${category.name} has been succesfully deleted..!`}
//     }

// }

module.exports = CategoriesService;
