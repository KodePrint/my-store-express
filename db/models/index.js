const {UserSchema, User} = require('./userModel');
const {MeasureUnitSchema, MeasureUnit} = require('./measureUnitModel');
const {IndicatorSchema, Indicator} = require('./indicatorModel');
const {ProductSchema, Product} = require('./productModel');
const { CategorySchema, Category } = require('./categoryModel');

function setUpModels (sequelize) {
    User.init(UserSchema, User.config(sequelize)),
    MeasureUnit.init(MeasureUnitSchema, MeasureUnit.config(sequelize)),
    Category.init(CategorySchema, Category.config(sequelize)),
    Indicator.init(IndicatorSchema, Indicator.config(sequelize)),
    Product.init(ProductSchema, Product.config(sequelize))
}

module.exports = setUpModels;
