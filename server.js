//Installaion du serveur express 
const express = require('express');
const path = require('path');

const app = express();

/// Servir uniquement les fichiers statiques de l' 

app.use(express.static('./dist/angular-heroku'));

app.get('/*', (req, res) =>
res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
);

/// Démarrez l'application en écoutant l' 
app.listen(process.env.PORT || 8080);