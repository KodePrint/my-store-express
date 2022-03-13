const {Model, DataTypes, Sequelize} = require('sequelize')

const MEASURE_UNIT_TABLE = 'measure_units'; // Nombre de la tabla

const MeasureUnitSchema = {
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

class MeasureUnit extends Model {
    static associate(models) {
      // associate

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: MEASURE_UNIT_TABLE,
            modelName: 'MeasureUnit',
            timestamps: false
        }
    }
}

module.exports = { MEASURE_UNIT_TABLE, MeasureUnitSchema, MeasureUnit}
