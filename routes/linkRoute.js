const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

// Rota para o diretorio raiz / e logo após um argumento, que seria o title. /title
router.get('/:title', linkController.redirect);

// Rota raiz
router.get('/', (req, res) => {res.send("Hello World!");});

// Post para inserir no banco de dados
router.post('/', express.urlencoded({extended: true}), linkController.addLink);

module.exports = router;