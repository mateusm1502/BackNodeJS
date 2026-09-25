import database from "../config/database.js";

class atendimentos {
    constructor() {
        this.model = database.db.define("atendimentos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.STRING,
                unique: true,
            },
            hora: {
                type: database.db.Sequelize.INTEGER,
            },
            valor: {
                type: database.db.Sequelize.INTEGER,
            },
            concluido: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}

export default new atendimentos().model