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
    allowNull: true,
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
  },
  total: {
    type: DataTypes.DECIMAL(15,2),
    get() {
      if(this.items){
        if(this.items.length > 0) {
          return this.items.reduce((total, item) => {
            return total + (item.price * item.OrderProduct.amount)
          }, 0);
        }
      }
      return 0;
    }
  }
}

class Order extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.User, {as: 'user'});
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId'
    });
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
