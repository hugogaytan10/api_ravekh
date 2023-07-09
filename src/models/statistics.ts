import Database from "../services/database";
class Statistic extends Database {
    constructor(){
        super({table: 'estadisticas'});
    }
}
export default Statistic;