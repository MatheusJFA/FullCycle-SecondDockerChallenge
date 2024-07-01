const query = require('./query');


const countUsers = async () => {
    const sql = `SELECT COUNT(*) as total FROM users`;

    const [result] = await query(sql);

    return result.total;
};

const databaseInitialize = async () => {

    if (await countUsers() === 0) {
        const users = ["Matheus", "Pâmella", "Maria José", "Gerson Ferreira", "Gerson Júnio", "Lucas", "Caio", "Celson", "Maria Eduarda", "Cristiano", "Vivian"];

        const sql = `INSERT INTO users (name) VALUES (?)`;

        for (let user of users) {
            await query(sql, [user]);
        }
   } else return "Database already initialized!"
}

module.exports = databaseInitialize;