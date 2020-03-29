//Arquivo com as rotas, retira esse peso do index.js

/**
 * Rota / Recurso
 */
/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-en
 * DELETE: deletar uma informação no back-end
 */

 /**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?"
 * (filtros, paginação)
 * Route Params: Parâmetros utilizados para identifcar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */ 

 /**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users).select('*').where()
  */
/*
 routes.post('/users ou /users/:id ao usar get', (request, response) => {
    const queryParams = request.query; //Acessa os parâmetros vindos da requisição - É utilizado com a rota GET
    const routeParams = request.params; //Utilizado para acessar os route params, acessa um usuário em específico. Não aceita parâmetros extras - É utilizado com a rota GET
    const body = request.body; //Utilizado para acessar o corpo da requisição - É utilizado com a rota POST e portanto a rota é só /users
    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Diego Fernandes'
    });
});
*/
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;