const {Model, DataTypes, Sequelize} = require('sequelize')

const USER_TABLE = 'users'; // Nombre de la tabla

const UserSchema = {
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
    set(value) {
      this.setDataValue('email', value.toLowerCase())
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    min: 6
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  isActive: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active',
  },
  isAdmin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_admin',
  },
  isStaff: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_staff',
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
  }
}

class User extends Model {
  static associate(models) {
    // associate
    this.hasOne(models.Profile, {
      as: 'profile',
      foreignKey: 'userId'
    });
    this.hasMany(models.Address, {
      as: 'address',
      foreignKey: 'userId'
    });
    this.hasMany(models.Order, {
      as: 'order',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
      return {
          sequelize,
          tableName: USER_TABLE,
          modelName: 'User',
          timestamps: false
      }
  }
}

module.exports = { USER_TABLE, UserSchema, User}
