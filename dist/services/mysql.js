"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql.createPool({
    host: 'my-instance.ckqzly8drmmp.us-west-2.rds.amazonaws.com',
    //host : 'localhost',
    user: 'ravekh',
    //user     : 'root',
    password: '34#vdDv.3',
    //password : 'root',
    database: 'rebk_db'
});
exports.default = connection;
//# sourceMappingURL=mysql.js.map