const Link = require('../models/Link');

const redirect = async (req, res) =>{
    // Aqui ele coloca o valor do argumento em uma variavel
    let title = req.params.title;

    // Fazendo tratamento de erro para a busca
    try {
        // Salva a busca na varivel docs / Link.findOne é para retorar somente 1 registro no banco.
        let docs = await Link.findOne({ title })

        // Aqui ele entrega como resposta já um redicionamento para a URL que tem no meu banco
        res.redirect(docs.url);
    } catch (err) {
        res.send("Houve um erro");
    }
}

module.exports = {redirect};