const {Model, DataTypes, Sequelize} = require('sequelize')

const CATEGORY_TABLE = 'categories'; // Nombre de la tabla

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
        field: 'is_active',

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

class Category extends Model {
    static associate() {
        // associate
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

module.exports = { CATEGORY_TABLE, CategorySchema, Category}
