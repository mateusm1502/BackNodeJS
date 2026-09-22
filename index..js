import express from "express"
import { FORCE } from "sequelize/lib/index-hints"

const app = express()
app.use(expres.json())

app.use("/api/v1/agenda", agenda)
app.use("/api/v1/clientes", clientes)

DatabaseError.db 
    .sync({ forece: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .cath((e) => {
        console.log(e)
    })