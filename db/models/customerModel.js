const {Model, DataTypes, Sequelize} = require('sequelize')

const CUSTOMER_TABLE = 'custmoers'; // Nombre de la tabla

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true,
  },
  name: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true,
    max: 75
  },
  lastName: {
    allowNull:true,
    type: DataTypes.STRING,
    unique: true,
    field: 'last_name',
    max: 75
  },
  image: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true,
    max: 255
  },
  phone: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true,
    max: 255
  },
  address1: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true,
    max: 255
  },
  address2: {
    allowNull:true,
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

class Customer extends Model {
  static associate(models) {
      // associate
      this.belongsTo(models.User, {as: 'user', foreignKey: 'userId'})
  }

  static config(sequelize) {
    return {
        sequelize,
        tableName: CUSTOMER_TABLE,
        modelName: 'Customer',
        timestamps: false
    }
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer }
