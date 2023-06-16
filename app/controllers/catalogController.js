const { Category, Product } = require('../models');

const catalogController = {
    index: async (req, res) => {
        res.render('index');
    },

    productsList: async (req, res) => {
        try {
            // todo, ici il faudra les vrais produits et catégories de la db
            // Etape 2: On fait la requête à la BDD afin de récupérer tous les produits et catégories
            const products = await Product.findAll();
            const categories = await Category.findAll();
            // On renvoie ensuite le tout à la view
            res.render('shop', { 
                categories,
                products 
            });

        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    },

    category: async (req, res) => {
        // todo, il faut récupérer la catégorie en fonction de l'id présent dans l'url et la passer à la vue
        const id = req.params.id;
        try {
        // Etape 2: On fait la requête à la BDD afin de récupérer une catégorie en fonction de l'id récupéré dans l'url

          const category = await Category.findByPk(id, {
            include: 'categories',
          });
          res.render('category', {
            category
          });
    
        } catch (error) {
          console.log(error);
          res.status(500).send('Server Error');
        }
    },

    product: async (req, res) => {
        // todo, récupérer le produit demandé en base de données.
        const id = req.params.id;
        try {
        // Etape 2: On fait la requête à la BDD afin de récupérer un produit en fonction de l'id récupéré dans l'url

          const product = await Product.findByPk(id, {
            include: 'products',
          });
          res.render('product', {
            product
          });
    
        } catch (error) {
          console.log(error);
          res.status(500).send('Server Error');
        }
    },

    cart: (req, res) => {
        res.render('cart');
    },
};

module.exports = catalogController;
