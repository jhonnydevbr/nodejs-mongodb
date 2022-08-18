const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
var PORT = 3000;

const linkRoute = require('./routes/linkRoute');

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro ao conectar no banco de dados!") });
db.once("open", () => { console.log("Banco carregado!"); });

app.use('/', linkRoute);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Aqui inicia um servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})