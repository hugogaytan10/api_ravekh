"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const statistics_1 = __importDefault(require("../models/statistics"));
const modelStatistic = new statistics_1.default();
class Controller {
    getSalesByYear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let date = new Date();
                let year = date.getFullYear();
                const procedure = {
                    name: 'VentasPorAnio',
                    items: '?,?'
                };
                const data = [year, req.body.store_id];
                const catched = yield modelStatistic.procedure(procedure, data);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    getClothesByYear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let date = new Date();
                let year = date.getFullYear();
                const procedure = {
                    name: 'cantidadDePrendasPorAnio',
                    items: '?,?'
                };
                const data = [year, req.body.store_id];
                const catched = yield modelStatistic.procedure(procedure, data);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    getBestSallingClothes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let date = new Date();
                let year = date.getFullYear();
                const procedure = {
                    name: 'prendas_mas_vendidas',
                    items: '?,?'
                };
                const data = [year, req.body.store_id];
                const catched = yield modelStatistic.procedure(procedure, data);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=statistics.js.map