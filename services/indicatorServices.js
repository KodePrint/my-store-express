const boom = require('@hapi/boom')
const pool = require('../libs/postgresPool');
const sequelize = require('../libs/sequelize');
const { query } = require('express');

const { models } = require('../libs/sequelize')


class MeasureUnitService {
    constructor() {
    }

    // Retorna todas la unidades de medida
    async getAll() {
        const rta = await models.Indicator.findAll()
        return rta;
    }

    // Creacion de una unidad de medida
    async create(data) {
        let { description } = data
        const values = [description.toLowerCase()]
        const query = 'INSERT INTO measure_unit (description) VALUES ($1)'
        const measuer_unit = await this.pool.query(query, values)
        return measuer_unit.rows;
    }

    // Retora la unidad de medida solicitada por id
    async getOne(id) {
        const rta = await models.Indicator.findByPk(id)
        return rta;
    }

    // Cambia el estado a falso para persistencia de informacion
    async partialDelete(id) {
        let measuer_unit = await this.getOne(id)
        const query = `UPDATE measure_unit SET state = false WHERE id = ${id}`
        await this.pool.query(query)
        let updated_measuer_unit = await this.getOne(id)
        return [{message: `The measure unit ${measuer_unit[0].description} has ben partial deleted..!`}, updated_measuer_unit[0]]
    }

    // Borrar de base de datos una unidad de medida
    async delete(id) {
        let measuer_unit = await this.getOne(id)
        const query = 'DELETE FROM measure_unit WHERE id = $1';
        await this.pool.query(query, [measuer_unit[0].id])
        return {message: `Measure Unit ${measuer_unit[0].description} has ben succesfully deleted..!`}
    }
}

module.exports = MeasureUnitService
