"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mysql_1 = __importDefault(require("../services/mysql"));
const database_1 = __importDefault(require("../services/database"));
class Company extends database_1.default {
    constructor() {
        super({ table: 'empresas' });
    }
    getCompany(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`SELECT * FROM empresas where id = '${id}'`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results[0]);
            });
        });
    }
}
exports.Company = Company;
//# sourceMappingURL=company.js.map