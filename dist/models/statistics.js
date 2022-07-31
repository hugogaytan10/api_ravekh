"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../services/database"));
class Statistic extends database_1.default {
    constructor() {
        super({ table: 'estadisticas' });
    }
}
exports.default = Statistic;
//# sourceMappingURL=statistics.js.map