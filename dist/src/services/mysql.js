"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const mysqlConfig = mysql.createConnection({
    //host: 'ravekh.cd6upsy0rosm.us-east-1.rds.amazonaws.com',
    host: 'localhost',
    //user: 'admin',
    user: 'root',
    //password: 'ravekh123',
    password: 'root',
    database: 'rebk_db'
});
exports.default = mysqlConfig;
//# sourceMappingURL=mysql.js.map