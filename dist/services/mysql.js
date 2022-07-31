"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
// Usar esta configuración para manejar un servidor local de MySQL
const connection = mysql_1.default.createConnection({
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