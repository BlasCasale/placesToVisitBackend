require('dotenv').config();
const server = require('./src/server');
const { PORT } = process.env;
const { db } = require('./src/db');

// se crea una instancia para levantar el servidor para los test

const app = server.listen(PORT, async () => {
    try {
        await db.sync({ alter: true });
        console.log(`Listening on port localhost:${PORT}`);
    } catch (error) {
        console.error('Algo fallo', error);
    };
});

module.exports = { server, app };