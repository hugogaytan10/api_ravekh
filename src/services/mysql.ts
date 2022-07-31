import mysql from 'mysql';
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql.createConnection({
    host     : 'my-instance.ckqzly8drmmp.us-west-2.rds.amazonaws.com',
    user     : 'ravekh',
    password : '34#vdDv.3',
    database : 'rebk_db',
})
export default connection;

