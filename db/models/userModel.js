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
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        min: 6
    },
    createdAt: {
        allowNull:false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull:false,
        type: DataTypes.DATE,
        field: 'update_at',
    }
}

class User extends Model {
    static associate() {
        // associate
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