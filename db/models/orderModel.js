const { Model, DataTypes, Sequelize } = require('sequelize')

const ORDER_TABLE = 'orders'

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'customer_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
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

class Order extends Model {
  static associate(models) {
    // associate
  }

  static config(sequelize) {
      return {
          sequelize,
          tableName: ORDER_TABLE,
          modelName: 'Order',
          timestamps: false
      }
  }
}

module.exports = { ORDER_TABLE, OrderSchema, Order }
