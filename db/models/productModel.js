const {Model, DataTypes, Sequelize} = require('sequelize')
const {CATEGORY_TABLE} = require('./categoryModel')
const {MEASURE_UNIT_TABLE} = require('./measureUnitModel')

const PRODUCT_TABLE = 'products'; // Nombre de la tabla

const ProductSchema = {
  id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER
  },
  name: {
      allowNull:false,
      type: DataTypes.STRING,
      unique: true,
      max: 125
  },
  description: {
      allowNull:false,
      type: DataTypes.STRING,
      unique: true,
      max: 255
  },
  price: {
      allowNull:false,
      type: DataTypes.DECIMAL(15, 2),
  },
  image: {
    allowNull:false,
    type: DataTypes.STRING
  },
  state: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'state',
  },
  created: {
      allowNull:true,
      type: DataTypes.DATE,
      field: 'created',
      defaultValue: Sequelize.NOW
  },
  updated: {
      allowNull:true,
      type: DataTypes.DATE,
      field: 'updated',
      defaultValue: Sequelize.NOW
  },
}

class Product extends Model {
    static associate(models) {
        // associate
        // this.belongsTo(models.Category, {as: 'category'});
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product}
