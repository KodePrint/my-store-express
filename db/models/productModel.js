const {Model, DataTypes, Sequelize} = require('sequelize')

const PRODUCT_TABLE = 'product'; // Nombre de la tabla

const ProductSchema = {
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
        max: 125
    },
    description: {
        allowNull:false,
        type: DataTypes.STRING,
        unique: true,
        max: 255
    },
    image: {
      allowNull:false,
      type: DataTypes.STRING
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

class Product extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product}
