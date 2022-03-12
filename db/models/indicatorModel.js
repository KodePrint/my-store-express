const {Model, DataTypes, Sequelize} = require('sequelize')

const INDICATOR_TABLE = 'indicator'; // Nombre de la tabla

const IndicatorSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    descount: {
        allowNull:false,
        type: DataTypes.DECIMAL(15, 2),
    },
    // idCategory: {
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     field: 'Id_category',
    // },
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

class Indicator extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: INDICATOR_TABLE,
            modelName: 'Indicator',
            timestamps: false
        }
    }
}

module.exports = { INDICATOR_TABLE, IndicatorSchema, Indicator }
