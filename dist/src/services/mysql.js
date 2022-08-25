"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
};
let pool = mysql.createPool(mysqlConfig);
const connection = function (cb) {
    pool.getConnection(function (err, connect) {
        if (err)
            return cb(err);
        cb(null, connect);
    });
};
exports.default = connection;
//# sourceMappingURL=mysql.js.map