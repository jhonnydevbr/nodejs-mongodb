const express = require('express');
const mongoose = require('mongoose');
const app = express();
var PORT = 3000;


const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number
});



mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro ao conectar no banco de dados!") });
db.once("open", () => {console.log("Banco carregado!");});





// Aqui é uma rota
app.get('/', (req, res) => res.send('Hello World!'))

// Aqui inicia um servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})