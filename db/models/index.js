const {CustomerSchema, Customer} = require('./customerModel');
const {UserSchema, User} = require('./userModel');
const {MeasureUnitSchema, MeasureUnit} = require('./measureUnitModel');
const {IndicatorSchema, Indicator} = require('./indicatorModel');
const {ProductSchema, Product} = require('./productModel');
const { CategorySchema, Category } = require('./categoryModel');
const { OrderSchema, Order } = require('./orderModel');

function setUpModels (sequelize) {
    Customer.init(CustomerSchema, Customer.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    MeasureUnit.init(MeasureUnitSchema, MeasureUnit.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Indicator.init(IndicatorSchema, Indicator.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    // associate
    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
    MeasureUnit.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
}

module.exports = setUpModels;
