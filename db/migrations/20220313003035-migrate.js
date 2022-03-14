'use strict';

const {USER_TABLE, UserSchema}  = require('../models/userModel');
const {PROFILE_TABLE, ProfileSchema}  = require('../models/profileModel');
const {ADDRESS_TABLE, AddressSchema}  = require('../models/addressModel');
const {CATEGORY_TABLE, CategorySchema}  = require('../models/categoryModel');
const {PRODUCT_TABLE, ProductSchema}  = require('../models/productModel');
const {MEASURE_UNIT_TABLE, MeasureUnitSchema}  = require('../models/measureUnitModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PROFILE_TABLE, ProfileSchema);
    await queryInterface.createTable(ADDRESS_TABLE, AddressSchema);
    await queryInterface.createTable(MEASURE_UNIT_TABLE, MeasureUnitSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
    await queryInterface.dropTable(ADDRESS_TABLE);
    await queryInterface.dropTable(MEASURE_UNIT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
