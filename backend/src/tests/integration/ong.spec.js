const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');


describe('Ong', () => {
    beforeEach(async() =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
       await connection.destroy();
    });

    it('should be able to create new Ong', async () => {
        const response = await request(app)
            .post('/ongs')
           // .set('Authorization', 'asd')  //header
            .send({
                name: "apda",
                email: "uva@gmail.com",
                password: "1234567",
                whatsapp: "470000000",
                city: "Rio",
                uf: "sc"
            });
        console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);


    });

});
