import ServiceClientes from '../service/clientes.js'

class ControllerClientes {
    // Recebimento e a Saida das info
    async Buscar(_, res) {
        try {
            const clientes = await ServiceClientes.Buscar()
            res.status(200).send({ mensagem: clientes })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const clientes = await ServiceClientes.Detalhe(id)

            res.status(200).send({ mensagem: clientes })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { id, nome, email, senha } = req.body

            await ServiceUsuario.Criar(id, nome, email, senha)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { nome, email, senha } = req.body
            const id = req.params.id

            await ServiceUsuario.Alterar(id, nome, email, senha)
            
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

            await ServiceClientes.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Login(req, res) {
        try {
            const { id, nome, email, senha } = req.body
            const token = await ServiceUsuario.Login(id, nome, email, senha)
            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}

export default new ControllerClientes()