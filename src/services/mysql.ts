const mysql = require('mysql');
const mysqlConfig = {
    connectionLimit: 5,
    host: 'ravekh.cu7tugak0azk.us-east-2.rds.amazonaws.com',
    //host : 'localhost',
    user: 'admin',
    //user     : 'root',
    password: 'ravekh123',
    //password : 'root',
    database: 'rebk_db'
}
let pool = mysql.createPool(mysqlConfig);

const connection = function (cb: any) {
    pool.getConnection(function (err: any, connect: any) {
        if (err) return cb(err);
        cb(null, connect);
    })
}
export default connection;

