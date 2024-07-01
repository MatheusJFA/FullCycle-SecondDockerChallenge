const query = require('./query');

const databaseInitialize = async () => {
    const users = ["Matheus", "Pâmella"];

    const sql = `INSERT INTO users (name) VALUES (?)`;

    for(let user of users) {
        await query(sql, [user]);
    }
}

module.exports = databaseInitialize;