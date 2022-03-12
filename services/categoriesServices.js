const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CategoriesService {

  constructor() {
  }

  // Retorna todas las categorias
  async getAll() {
    const rta = await models.Category.findAll();
    return rta;
  }

  // Retorna una categoria por pk
  async getOne(id) {
    const rta = await models.Category.findByPk(id);
    if (!rta) {
      throw boom.notFound(`Category with id:${id} not exits..!`)
    }
    return rta;
  }

  // Crea una categoria y la retorna
  async create(body) {
    const rta = await models.Category.create(body)
    return rta;
  }

  // Actualiza una categoria y la retorna
  async update(id, changes) {
    const category = await this.getOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  // Elimina una categoria de la base de datos
  async delete(id) {
    const category = await this.getOne(id);
    const rta = category
    await category.destroy();
    return {message: `Category ${category.description} has ben delete successful..!`}
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
