const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {}
/***
 * Voici les champs nécessaires pour le Model
 * name string
 * tableName: 'categories',
 */
// Etape 1 : On configure le model Category afin de réaliser ensuite les associations dans index
Category.init({
    name: {
        type : DataTypes.TEXT,
        allowNull: false
    }}, {
        sequelize,
        tableName: 'categories',
})
module.exports = Category;
