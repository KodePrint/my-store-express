const {Model, DataTypes, Sequelize} = require('sequelize')
const { USER_TABLE } = require('./userModel')

const ADDRESS_TABLE = 'address'; // Nombre de la tabla

const AddressSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  postalCode: {
    field: 'postal_code',
    allowNull:false,
    type: DataTypes.STRING,
    max: 20
  },
  country: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 75
  },
  city: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 75
  },
  description: {
    allowNull:false,
    type: DataTypes.STRING,
    max: 255
  },
  reference: {
    allowNull:true,
    type: DataTypes.STRING,
    max: 255
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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

class Address extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.User, {as: 'user'})
  }

  static config(sequelize) {
    return {
        sequelize,
        tableName: ADDRESS_TABLE,
        modelName: 'Address',
        timestamps: false
    }
  }
}

module.exports = { ADDRESS_TABLE, AddressSchema, Address }