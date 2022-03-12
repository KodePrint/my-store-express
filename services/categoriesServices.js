const {categories} = require('../data/categories')
const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class CategoriesService {
  async getAll() {
    return 'Search all categories'
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
