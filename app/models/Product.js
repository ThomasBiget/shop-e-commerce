const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Product extends Sequelize.Model {}
/**
 * Voici les champs nécessaires pour faire le Model
 * category_id int
 * ref string
 * image string
 * title string
 * description text
 * price number
 * tableName: 'products',
 */
// Etape 1 : On configure le model Product afin de réaliser ensuite les associations dans index

 Product.init({
    category_id: {
        type : DataTypes.INTEGER,
    },
    ref: {
        type : DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type : DataTypes.TEXT,
        allowNull: false
    },
    title: {
        type : DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type : DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
}, {
        sequelize,
        tableName: 'products',
})
module.exports = Product;
