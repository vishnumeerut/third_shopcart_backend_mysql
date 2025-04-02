const Category = require("./category");
const Product = require("./product");
const Cart = require("./cart");
const User = require("./user");
const CartProduct = require("./cart_product");
const Order = require("./order");
const OrderProduct = require("./order_product");


Category.hasMany(Product, { foreignKey: 'categoryId'});
Product.belongsTo(Category, {foreignKey: 'categoryId'});


// cart and user one to one

User.hasOne(Cart, {foreignKey: 'userId'});
Cart.belongsTo(User, {foreignKey: 'userId'});


// m:m cart and product;

Cart.belongsToMany(Product, {through: CartProduct});
Product.belongsToMany(Cart, {through: CartProduct});




User.hasMany(Order, { foreignKey: 'userId'});
Order.belongsTo(User, {foreignKey: 'userId'});



Order.belongsToMany(Product, {through: OrderProduct});
Product.belongsToMany(Order, {through: OrderProduct});


module.exports = {
    Category,  
    Product,
    User,
    Cart,
    CartProduct,
}