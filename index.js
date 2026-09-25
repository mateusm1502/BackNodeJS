import express from 'express'
import atendimentos from './router/atendimentos.js'
import clientes from './router/clientes.js'
import database from './config/database.js'

const app = express()
app.use(express.json())

app.use("/api/v1/atendimentos", atendimentos)
app.use("/api/v1/clientes", clientes)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })