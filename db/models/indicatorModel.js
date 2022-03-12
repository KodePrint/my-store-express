const {Model, DataTypes, Sequelize} = require('sequelize')

const INDICATOR_TABLE = 'indicators'; // Nombre de la tabla

const IndicatorSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    descount: {
        allowNull:false,
        type: DataTypes.INTEGER,
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
