const mysql = require('mysql');
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql.createPool({
    host : 'containers-us-west-65.railway.app',
    port: "6299",
    //host : 'localhost',
    user     : 'root',
    //user     : 'root',
    password : 'aZAgB9aqwIbVM3vrbO3W',
    //password : 'root',
    database : 'railway'
})

export default connection;

