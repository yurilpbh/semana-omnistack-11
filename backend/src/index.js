const express = require('express'); //Importa o módulo
const cors = require('cors');
const routes = require('./routes'); //Importa a rota

const app = express();

app.use(cors());
app.use(express.json()); //Informar para o servidor que estará sendo utilizado o formato JSON para as requisições
app.use(routes); //Usa a rota

app.listen(3333);