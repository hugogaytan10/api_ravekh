var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Statistic from "../models/statistics";
const modelStatistic = new Statistic();
export class Controller {
    getSalesByYear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let date = new Date();
                let year = date.getFullYear();
                const procedure = {
                    name: 'VentasPorAnio',
                    items: '?'
                };
                const catched = yield modelStatistic.procedure(procedure, year);
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
                    items: '?'
                };
                const catched = yield modelStatistic.procedure(procedure, year);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
}
