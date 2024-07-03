const express = require('express');
const queryFactory = require('./helpers/query');

const {server} = require('./configs');
const databaseInitialize = require('./helpers/databaseInitialize');

const application = express();

application.use(express.json());

(async () => {
    databaseInitialize();
})();

application.get('/', async (request, response) => {
    const sql = `SELECT name FROM users`;

    const users = await queryFactory(sql);

    const html = `
        <h1>Full Cycle Rocks!</h1>
        <ul>
            ${users.map(user => `<li>${user.name}</li>`).join('')}
        </ul>
    `;

    response.send(html);
})


application.post('/users', async (request, response) => {
    const {name} = request.body;

    const sql = `INSERT INTO users (name) VALUES (?)`;

    await queryFactory(sql, [name]);

    response.json({name});
});

application.listen(server.port, () => {
    console.log(`Server is running on port ${server.port}`);
});