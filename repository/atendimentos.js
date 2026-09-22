import atendimentos from '../model/atendimentos.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryAtendimentos {
    
    async Find() {
        const atendimentos = await atendimentos.findAll()

        return atendimentos
    }

    async FindById(id) {
        const atendimentosDetalhes = await atendimentos.findByPk(id)

        return atendimentosDetalhes
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

export default new RepositoryAtendimentos()