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

class MeasureUnit extends Model {
    static associate() {
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
