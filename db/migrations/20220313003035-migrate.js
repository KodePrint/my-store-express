'use strict';

const {USER_TABLE, UserSchema}  = require('../models/userModel');
const {PROFILE_TABLE, ProfileSchema}  = require('../models/profileModel');
const {ADDRESS_TABLE, AddressSchema}  = require('../models/addressModel');
const {CATEGORY_TABLE, CategorySchema}  = require('../models/categoryModel');
const {PRODUCT_TABLE, ProductSchema}  = require('../models/productModel');
const {MEASURE_UNIT_TABLE, MeasureUnitSchema}  = require('../models/measureUnitModel');
const {INDICATOR_TABLE, IndicatorSchema}  = require('../models/indicatorModel');
const {ORDER_TABLE, OrderSchema}  = require('../models/orderModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PROFILE_TABLE, ProfileSchema);
    await queryInterface.createTable(ADDRESS_TABLE, AddressSchema);
    await queryInterface.createTable(MEASURE_UNIT_TABLE, MeasureUnitSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(INDICATOR_TABLE, IndicatorSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
    await queryInterface.dropTable(ADDRESS_TABLE);
    await queryInterface.dropTable(MEASURE_UNIT_TABLE);
    await queryInterface.dropTable(INDICATOR_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
