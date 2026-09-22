import RepositoryClientes from '../repository/clientes.js'

class ServiceClientes {

    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryClientes.Find()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const clientes = await RepositoryClientes.FindById(id)
        
        if(!clientes) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }

        return clientes
    }
    // Função(parametros, parametros, parametros)
    async Criar(id, nome, email, senha) {
        if (!id || !nome || !email || !senha) {
            throw new Error("Favor informar todos os dados")
        }

        const clientes = await RepositoryClientes.Create(id, nome, email, senha)

        return clientes
    }

    async Alterar(id, nome, email, senha) {
        if (!id) {
            throw new Error("Favor informar os dados");
        }

        const clientesAlterado = await RepositoryClientes.Update(id, nome, email, senha)
        
        return clientesAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        
        const clientes = await RepositoryClientes.Delete(id)

        return clientes
    }

}

export default new ServiceClientes()