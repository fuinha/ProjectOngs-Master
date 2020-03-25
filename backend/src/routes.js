const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionOngController = require('./controllers/SessionOngController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/session_ong', SessionOngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
// ---------------------------------------------------

/*
routes.post('/users', (request,response) => {

    const body = request.body;
    console.log(body);
    
    return response.json({
    msg:"ok"
    });
    
    });

routes.get('/users', (request,response) => {
        //http://localhost:3333/users?name:marcelo&idade=25

    const params = request.query;
    console.log(params);

    return response.json({
        evento: 'AirspaceDefense',
        prof: 'Eng. Marcelo'
    });
});
*/
module.exports = routes;
