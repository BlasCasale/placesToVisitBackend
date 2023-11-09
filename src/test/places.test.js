const supertest = require('supertest');
const { server, app } = require('../../index');
const { db } = require('../db');

const api = supertest(server);

const UserId = 'a2e553b7-975b-4de4-859f-3cbc5f277186';

const placeToCreate = {
    name: "El morenito",
    adress: "Av libertador",
    theme: "comida",
    UserId: "a2e553b7-975b-4de4-859f-3cbc5f277186"
};

describe('Test para las rutas de los lugares', () => {

    it('Prueba para saber que el GET retorna un JSON', async () => {
        await api.get(`/place/getPlace?UserId=${UserId}`)
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Fallo al obtener los lugares de un usuario', async () => {
        await api.get('/place/getPlace?UserId=')
            .expect(500);
    });

    it('Prueba de creación de un lugar y que me retorne un JSON', async () => {
        await api.post('/place/createPlace')
            .send(placeToCreate)
            .expect(201)
            .expect('Content-Type', "application/json; charset=utf-8");
    });

    it('Fallo al crear un lugar', async () => {
        await api.post('/place/createPlace')
            .send({})
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