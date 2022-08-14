const mongoose = require('mongoose');

// Esquema de como será a minha base, do jeito que vai ser construido nossa coleção no Mongo.
const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
});

// Model: Representação da nossa coleção
// Aqui vamos criar uma coleção que todos os documentos irão seguir o mold do linkSchema
module.exports = mongoose.model('Link', linkSchema);