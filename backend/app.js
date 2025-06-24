const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const app = express();
const stuffRoutes=require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');


// Nouvelle chaîne de connexion corrigée
mongoose.connect('mongodb+srv://yasmineelmkhantar:yasmine@cluster0.uysjb28.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => {
        console.log('Connexion à MongoDB échouée !');
        console.error('Détails de l\'erreur:', error.message);
    });
    
    
    
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });
    app.use(express.json());

    app.use('/api/stuff',stuffRoutes);
    app.use('/api/auth', userRoutes);
    app.use('/images',express.static(path.join(__dirname,'images')));


module.exports = app;