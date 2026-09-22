import RepositoryAtendimentos from '../repository/atendimentos.js'

class ServiceAtendimentos {

    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryAtendimentos.Find()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const atendimentos = await RepositoryAtendimentos.FindById(id)
        
        if(!atendimentos) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }

        return atendimentos
    }
    // Função(parametros, parametros, parametros)
    async Criar(id, dia, hora, valor, concluido) {
        if (!id || !dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }

        const atendimentos = await RepositoryAtendimentos.Create(id, dia, hora, valor, concluido)

        return concluido
    }

    async Alterar(id, dia, hora, valor, concluido) {
        if (!id) {
            throw new Error("Favor informar os dados");
        }

        const atendimentosAlterado = await RepositoryAtendimentos.Update(id, dia, hora, valor, concluido)
        
        return atendimentosAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        
        const atendimentos = await RepositoryAtendimentos.Delete(id)

        return atendimentos
    }

}

export default new ServiceAtendimentos()