const {Model, DataTypes, Sequelize} = require('sequelize')
const {CATEGORY_TABLE} = require('./categoryModel')
const {MEASURE_UNIT_TABLE} = require('./measureUnitModel')
const {INDICATOR_TABLE} = require('./indicatorModel')

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
      max: 125,
      set(value) {
        this.setDataValue('name', value.toLowerCase())
      }
  },
  description: {
      allowNull:false,
      type: DataTypes.STRING,
      unique: true,
      max: 255,
      set(value) {
        this.setDataValue('description', value.toLowerCase())
      }
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
  measureUnitId: {
    field: 'measure_unit_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: MEASURE_UNIT_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  categoryId: {
    field: 'category_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  indicatorId: {
    field: 'indicator_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: INDICATOR_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
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
        this.belongsTo(models.Category, {as: 'category'});
        this.belongsTo(models.MeasureUnit, {as: 'measure_unit'});
        this.hasOne(models.Indicator)
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
