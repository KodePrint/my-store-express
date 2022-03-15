const {UserSchema, User} = require('./userModel');
const {ProfileSchema, Profile} = require('./profileModel');
const {AddressSchema, Address} = require('./addressModel');
const {MeasureUnitSchema, MeasureUnit} = require('./measureUnitModel');
const {IndicatorSchema, Indicator} = require('./indicatorModel');
const {ProductSchema, Product} = require('./productModel');
const { CategorySchema, Category } = require('./categoryModel');
const { OrderSchema, Order } = require('./orderModel');

function setUpModels (sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Profile.init(ProfileSchema, Profile.config(sequelize));
    Address.init(AddressSchema, Address.config(sequelize));
    MeasureUnit.init(MeasureUnitSchema, MeasureUnit.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Indicator.init(IndicatorSchema, Indicator.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    // associate
    User.associate(sequelize.models);
    Profile.associate(sequelize.models);
    Address.associate(sequelize.models);
    MeasureUnit.associate(sequelize.models);
    Category.associate(sequelize.models);
    Indicator.associate(sequelize.models);
    Product.associate(sequelize.models);
    Order.associate(sequelize.models);
}

module.exports = setUpModels;
