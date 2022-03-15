const { Model, DataTypes, Sequelize } = require('sequelize')

const {USER_TABLE} = require('./userModel')

const ORDER_TABLE = 'orders'

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER,
  },
  userId: {
    field: 'user_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  state: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
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
    this.belongsTo(models.User, {as: 'user'})
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
