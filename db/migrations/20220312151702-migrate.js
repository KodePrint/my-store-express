'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/CategoryModel')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
