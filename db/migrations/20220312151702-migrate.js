'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/categoryModel')
const { IndicatorSchema, INDICATOR_TABLE } = require('../models/indicatorModel')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(INDICATOR_TABLE, IndicatorSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(INDICATOR_TABLE);
  }
};
