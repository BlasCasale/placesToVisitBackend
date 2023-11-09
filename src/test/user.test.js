const supertest = require('supertest');
const { server, app } = require('../../index');
const { db } = require('../db');

const api = supertest(server);

const user = {
    name: "Juan",
    last_name: "Torres",
    mail: "juantorres@gmail.com",
    password: "Juantorres81."
};

describe('Test de usuarios', () => {

    it('El usuario retornado debe estar en formato JSON', async () => {
        await api.get('/user/getUser?mail=norbertoperez@live.com&password=Norbertoperez41.')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Fallo en el GET', async () => {
        await api.get('/user/getUser?mail=norbertoperez@live.com')
            .expect(500);
    });

    it('Al crear un usuario, este mismo debe ser retornado y en formato JSON', async () => {
        await api.post('/user/createUser')
            .send(user)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Fallo al crear un usuario', async () => {
        await api.post('/user/create/user')
            .send({})
            .expect(404);
    });

    it('Al borrar un usuario, este mismo debe ser retornado y en formato JSON', async () => {
        await api.delete(`/user/deleteUser?mail=${user.mail}`)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Error al borrar un usuario', async () => {
        await api.delete('/user/deleteUser?mail=')
            .expect(500);
    });

});

beforeAll(() => {
    console.log('Conectando a la base de datos.');
});

afterAll(async () => {
    await db.close();
    app.close();
});