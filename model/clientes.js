import database from "../config/database.js";

class clientes {
    constructor() {
        this.model = database.db.define("usuarios", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
            },
            email: {
                type: database.db.Sequelize.INTEGER,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}

export default new clientes().model