import mysql from 'mysql';
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'rebk_db',
})
export default connection;

