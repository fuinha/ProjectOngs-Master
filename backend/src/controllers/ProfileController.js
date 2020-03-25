const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
  
     // LIST  get /incidents one
    async index(request, response) {
     
        const ong_id = request.headers.authorization;

               // select incidents com id=id and return ong_id
               const incidents =  await connection('incidents')
               .where('ong_id', ong_id)
               .select('*');

        return response.json(incidents);
    }, 

}