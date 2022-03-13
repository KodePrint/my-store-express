'use strict';

const {CATEGORY_TABLE, CategorySchema}  = require('../models/categoryModel');
const {PRODUCT_TABLE, ProductSchema}  = require('../models/productModel');
const {MEASURE_UNIT_TABLE, MeasureUnitSchema}  = require('../models/measureUnitModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(MEASURE_UNIT_TABLE, MeasureUnitSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(MEASURE_UNIT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
