const {Model, DataTypes, Sequelize} = require('sequelize')
const { USER_TABLE }  = require('./userModel.js')

const PROFILE_TABLE = 'profiles'; // Nombre de la tabla

const ProfileSchema = {
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
    max: 15
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
        model: USER_TABLE,
        key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
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

class Profile extends Model {
  static associate(models) {
      // associate
      this.belongsTo(models.User, {as: 'user'})
      // this.hasMany(models.Address, {
      //     as: 'address',
      //     foreignKey: 'profileId'
      // })
  }

  static config(sequelize) {
    return {
        sequelize,
        tableName: PROFILE_TABLE,
        modelName: 'Profile',
        timestamps: false
    }
  }
}

module.exports = { PROFILE_TABLE, ProfileSchema, Profile }