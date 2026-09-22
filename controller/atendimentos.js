import ServiceAtendimentos from '../service/atendimentos.js'

class ControllerAtendimentos {
    // Recebimento e a Saida das info
    async Buscar(_, res) {
        try {
            const atendimentos = await ServiceAtendimentos.Buscar()
            res.status(200).send({ mensagem: atendimentos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const atendimentos = await ServiceAtendimentos.Detalhe(id)

            res.status(200).send({ mensagem: atendimentos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { id, dia, hora, valor, concluido } = req.body

            await ServiceAtendimentos.Criar(id, dia, valor, concluido)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { dia, hora, valor, concluido } = req.body
            const id = req.params.id

            await ServiceAtendimentos.Alterar(id, hora, valor, concluido)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceAtendimentos.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerAtendimentos()