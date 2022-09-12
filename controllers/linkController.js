const Link = require('../models/Link');

const redirect = async (req, res, next) => {
    // Aqui ele coloca o valor do argumento em uma variavel
    let title = req.params.title;

    // Fazendo tratamento de erro para a busca
    try {
        // Salva a busca na varivel docs / Link.findOne é para retorar somente 1 registro no banco.
        let docs = await Link.findOne({ title })
        if (docs) {
            // Aqui ele entrega como resposta já um redicionamento para a URL que tem no meu banco
            res.redirect(docs.url);
        } else {
            next();
        }

    } catch (err) {
        res.send(err);
    }
}

const addLink = async (req, res) => {

    let link = new Link(req.body);

    try {
        let doc = await link.save();
        res.send("Link cadastrado com sucesso!");
    } catch (err) {
        res.render('index', { err, body: req.body });
    }

}

const allLinks = async (req, res) => {

    try {
        let links = await Link.find({})
        res.render('all', { links });
    } catch (err) {
        res.send(err);
    }
}

const deleteLink = async (req, res) => {

    let id = req.params.id;

    if(!id){
        id = req.body.id
    }

    try {
        await Link.findByIdAndDelete(id)
        res.send(id)
    } catch (err) {
        res.status(404).send(err);
    }

}

module.exports = { redirect, addLink, allLinks, deleteLink };