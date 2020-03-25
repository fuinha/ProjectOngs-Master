const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
    // create table POST /incidents
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
      
        const [id] =await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        /*
        const result =await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        const id = result[0];
        */
        
        return response.json({ id });
    },
    //http://localhost:3333/incidents?page=2
     // LIST  get /incidents  5 per page
    async index(request, response) {
        const { page = 1} = request.query; //if not exist page =1
        // return all incidentes
        //const incidents =  await connection('incidents').select('*');
        
        // take only first [0] of array
        const [count] = await connection('incidents').count()
        console.log(count);

        // return 5 incidents per page
        // take data in ongs table where = incidents.ong_id(object primary)
        const incidents =  await connection('incidents')
        .join('ongs', 'ong_id', '=' , 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) *5) // except in page 1
        //.select('*'); // return all
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]); // return all excep ongs.id for sobreposition
        
        const ong_id = request.headers.authorization;

        // response in header
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    }, 

      // delete  delete /incidents
      async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        // select incidents com id=id and return ong_id
        const incidents =  await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

     if (incidents.ong_id !== ong_id){
        return response.status(401).json({error: 'operation not permited'});

     }

     await connection('incidents')
            .where('id', id)
            .delete();

        return response.status(200).send({msg:'deleted'});
    }, 
}