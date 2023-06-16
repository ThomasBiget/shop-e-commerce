const bcrypt = require('bcrypt');
const { User, Role } = require('../models');

const sessionController = {
    index: (req, res) => {
        res.render('login');
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            // !! Votre code à partir d'ici
            // Etape : 3
            // On récupère user avec le role
            // Est-ce que l'utilisateur existe en BDD ?
            // Sélectionner user avec email et inclure le role, si on ne le trouve pas :
            //      on envoie un message d'erreur dans un objet:  {error: "Utilisateur ou mot de passe incorrect"} et on render `login` en lui passant l'erreur
            // Sinon on continue.
            const result = await User.findOne({
                // include: role,
                where: {
                    email
                }
            })
            // si on a pas trouvé d'user ayant cet email
            if (!result) {
                throw new Error('Utilisateur ou mot de passe incorrect')
            };
            // Le mot de passe est il correct ?
            // On compare le mots de passe du formulaire avec celui de l'utilisateur
            //      Si le mot de passe est incorrect : on envoie un message d'erreur dans un objet:  {error: "Utilisateur ou mot de passe incorrect"} et on render `login` en lui passant l'erreur
            const validPwd = await bcrypt.compare(password, result.password)
            // si le mot de passe passé dans le formulaire n'équivaut pas au mot de passe hashé se trouvant dans la bdd une fois décrypté, on lance un erreur
            if (validPwd === false) {
                throw new Error('Identifiants invalides')
            };
            // On ajoute user a la session
            req.session.user = result;
            // On enlève le mot de passe de la session.
            delete req.session.user.password;
            // !! Ne pas modifier cette ligne
            res.redirect('/');
        } catch (e) {
            console.error(e.message);
            res.status(500).send('Server Error');
        }
    },

    logout: (req, res) => {
        // !! Votre code ici
        req.session.user = false;
        res.redirect('/');
    },
};

module.exports = sessionController;
