const { produtoRepositorio } = require('../repositorios/produto')
const repositorio = produtoRepositorio()

const Router = require('express').Router()

//não considerar esse... uso somente para checar o banco
Router.get('/produto', (req, res) => {
    const produto = repositorio.get_all()
    res.send(produto)
})

Router.get('/produto/:id', (req, res) => {
    try {
        const {id} = req.params

        const produto = repositorio.get(id)

        res.send(produto)

    } catch (err) {
        const erro = JSON.parse(err.message)
        res.status(erro.status).send(erro.msg)
    }   
})

Router.post('/produto', (req, res) => {
    try {
        //const {id} = req.params
        const dados = req.body
        const produto = repositorio.create(dados)

        res.status(200).send(produto)

    } catch (err) {
        const erro = JSON.parse(err.message)
        res.status(erro.status).send(erro.msg)
    }   
}),

Router.delete('/produto/:id', (req, res) => {
    try {
        const {id} = req.params

        const produtos = repositorio.destroy(id)

        res.status(200).send(produtos)

    } catch (err) {
        const erro = JSON.parse(err.message)
        res.status(erro.status).send(erro.msg)
    }   
}),

module.exports = Router