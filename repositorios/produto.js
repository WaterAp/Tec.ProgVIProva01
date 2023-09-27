let produtos = [
    {
        nome: "Geladeira",
        preco: 4599.99,
        peso: 98.5,
        cor: "branca",
        marca: "Eletrolux",
        id: 1
    }
]
let ultimo_id = 1

const validar = require("../validacoes/produto")

const produtoRepositorio = () => {
    return {
        get_all: () => {
            return produtos
        },

        get: (id) => {
            const produtosFiltrados = produtos.filter(prod => prod.id == id)

            if(produtosFiltrados.length == 0){
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "ID não foi encontrado"
                }))
            }else{
                return produtosFiltrados[0]
            }
        },

        create: (dados) => {
            if (validar(dados)) {

                const novo_produto = {
                    nome: dados.nome,
                    preco: dados.preco,
                    peso: dados.peso,
                    cor: dados.nome,
                    marca: dados.nome

                }
                novo_produto.id = ++ultimo_id

                produtos.push(novo_produto)
                return novo_produto

            } else {
                throw new Error(JSON.stringify({
                    status: 400,
                    msg: "Você precisa de todas as informações para criar um produto"
                }))

            }
        },

        destroy: (id) => {
            const produtosFiltrados = produtos.filter(prod => prod.id != id)

            if(produtosFiltrados.length == 0){
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Produto não foi encontrado para remoção"
                }))
            }

            produtos = produtosFiltrados
            return produtos
        },


    }
}

module.exports = {
    produtoRepositorio
}