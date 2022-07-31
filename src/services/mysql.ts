import mysql from 'mysql';
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql.createConnection({
    host : 'my-instance.ckqzly8drmmp.us-west-2.rds.amazonaws.com',
    //host : 'localhost',
    user     : 'ravekh',
    //user     : 'root',
    password : '34#vdDv.3',
    //password : 'root',
    database : 'rebk_db'
})

export default connection;

