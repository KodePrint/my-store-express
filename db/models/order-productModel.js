const {Model, DataTypes, Sequelize} = require('sequelize')
const {ORDER_TABLE} = require('./orderModel')
const {PRODUCT_TABLE} = require('./productModel')

const ORDER_PRODUCT_TABLE = 'orders_products'; // Nombre de la tabla

const OrderProductSchema = {
  id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  productId: {
    field: 'poduct_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
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
  subtotal: {
    type: DataTypes.DECIMAL(15, 2),
    set(value) {
      this.setDataValue(this.amount * this.productId.price )
    }
  }
}

class OrderProduct extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Order, {as:'order'})
    this.belongsTo(models.Product, {as:'product'})
  }

  static config(sequelize) {
      return {
          sequelize,
          tableName: ORDER_PRODUCT_TABLE,
          modelName: 'OrderProduct',
          timestamps: false
      }
  }
}

module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct}
