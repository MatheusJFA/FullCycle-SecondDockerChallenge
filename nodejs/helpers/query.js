const {database} = require('../configs');
const mysql = require('mysql2');

const queryFactory = async (sql, values) => {
    let connection = mysql.createConnection(database);

    const promise = new Promise((resolve, reject) => {
        connection.query(sql, values, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });        
    
    const [result] = await Promise.all([promise]);

    connection.end();

    return result;
}

module.exports = queryFactory;