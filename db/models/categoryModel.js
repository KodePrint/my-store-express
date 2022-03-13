const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  description: {
      allowNull:false,
      type: DataTypes.STRING,
      unique: true,
      max: 255
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
  }
}

class Category extends Model {
  static associate(models) {
    // associate
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}

module.exports = {CATEGORY_TABLE, CategorySchema, Category}
