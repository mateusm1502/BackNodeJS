import clientes from '../model/clientes.js';
import clientes from '../model/clientes.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryClientes {
    
    async Find() {
        const clientes = await clientes.findAll()

        return clientes
    }

    async FindById(id) {
        const clientesDetalhes = await clientes.findByPk(id)

        return clientesDetalhes
    }

    async Create(marca, ano) {
        const carroCreate = await carro.create({ marca, ano })

        return carroCreate
    }

    async Update(id, marca, ano) {
        const carroAlterar = await carro.findByPk(id)

        if(!carroAlterar) {
            throw new Error("Carro não encontrado")
        }

        carroAlterar.marca = marca || carroAlterar.marca
        carroAlterar.ano = ano || carroAlterar.ano

        await carroAlterar.save()
    }

    async Delete(id) {
        const carroDeletar = await carro.findByPk(id)

        if(!carroDeletar){
            throw new Error("Carro não encontrado")
        }

        await carroDeletar.destroy()

        return carroDeletar
    }
}

export default new RepositoryClientes()