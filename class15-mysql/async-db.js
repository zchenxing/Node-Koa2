const mysql = require('mysql');

const pool  = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123123',
    database : 'koa_demo' 
});

let query = function ( sql, value ) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, value, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    });
}


module.exports = { query };