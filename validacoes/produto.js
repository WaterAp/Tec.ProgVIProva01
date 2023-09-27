const validar = (dados) => {
    if (!(dados.nome && dados.preco && dados.peso && dados.cor && dados.marca)) {
        return false
    }

    return true
}

module.exports = validar

/*      nome: "Geladeira",
        preco: 4599.99,
        peso: 98.5,
        cor: "branca",
        marca: "Eletrolux",
        id: 1 */