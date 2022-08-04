const mysql = require('mysql');
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql.createPool({
    //host : 'ravekh.cu7tugak0azk.us-east-2.rds.amazonaws.com',
    host : 'localhost',
    //user     : 'admin',
    user     : 'root',
    //password : 'ravekh123',
    password : 'root',
    database : 'rebk_db'
})

export default connection;

