"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const clothes_1 = __importDefault(require("./clothes"));
const dotenv_1 = __importDefault(require("dotenv"));
const categories_1 = __importDefault(require("./categories"));
const stores_1 = __importDefault(require("./stores"));
const sales_1 = __importDefault(require("./sales"));
const statistics_1 = __importDefault(require("./statistics"));
const employees_1 = __importDefault(require("./employees"));
const company_1 = __importDefault(require("./company"));
dotenv_1.default.config();
exports.default = (app) => {
    app.use('/api', clothes_1.default);
    app.use('/api', users_1.default);
    app.use('/api', categories_1.default);
    app.use('/api', sales_1.default);
    app.use('/api', stores_1.default);
    app.use('/api', statistics_1.default);
    app.use('/api', employees_1.default);
    app.use('/api', company_1.default);
};
//# sourceMappingURL=index.js.map