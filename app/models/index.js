const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Role = require('./Role');

// Un produit peut avoir une catétorie
// Une catégorie peut avoir des produits
// Associer les catégories aux produits (as products)
// Associer les produits aux catégories (as category)

Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'users',
});

User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'role',
});

// Etape 1 : on configure les associations des différents models afin de simplifier les requêtes à la BDD
Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'categories',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'products',
});

module.exports = { User, Category, Product, Role };
