const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')


class MeasureUnitService {

  // Retorna todas la unidades de medida
  async getAll() {
      const orders = await models.Order.findAll();
      return orders;
  }

  // Creacion de una unidad de medida y la retorna
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  // // Retora la unidad de medida solicitada por id
  // async getOne(id) {
  //     const measure = await models.MeasureUnit.findByPk(id)
  //     if (!measure) {
  //       throw boom.notFound(`Measure Unit with id:${id} not exits..!`)
  //     }
  //     return measure;
  // }

  // // Actualiza y retora la unidad de medida solicitada por id
  // async update(id, changes) {
  //   const measure = await this.getOne(id);
  //   const updateMeasure = await measure.update(changes);
  //   return updateMeasure;
  // }

  // // Cambia el estado a falso para persistencia de informacion
  // async partialDelete(id) {
  //   const measure = await this.getOne(id);
  //   measure.setAttributes('state', false)
  //   let description = await measure.getDataValue('description')
  //   return {
  //     message: `Measure Unit with description: ${description} has ben deleted of the app successfull..!`
  //   };
  // }

  // // Elimina una Unidad de Medida de la base de datos
  // async delete(id) {
  //   const measure = await this.getOne(id);
  //   let description = await measure.getDataValue('description')
  //   await measure.destroy();
  //   return {
  //     message: `Measure Unit with description: ${description} has ben deleted successfull..!`
  //   };
  // }
}

module.exports = OrderService
