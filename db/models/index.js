const {UserSchema, User} = require('./userModel')
const {MeasureUnitSchema, MeasureUnit} = require('./measureUnitModel')
const {IndicatorSchema, Indicator} = require('./indicatorModel')
const {ProductSchema, Product} = require('./productModel')

function setUpModels (sequelize) {
    User.init(UserSchema, User.config(sequelize)),
    Product.init(ProductSchema, Product.config(sequelize)),
    Indicator.init(IndicatorSchema, Indicator.config(sequelize)),
    MeasureUnit.init(MeasureUnitSchema, MeasureUnit.config(sequelize))
}

module.exports = setUpModels;
