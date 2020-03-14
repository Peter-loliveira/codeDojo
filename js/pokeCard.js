var AreaNovosCards = document.getElementById("novosCards")

var botao = document.getElementById("btAddCard")
botao.onclick = function () {
    gerarCard()
}

// var Card = document.getElementById("card")
//  function gerarCard() {
//      let novoCard = new Card()
//      AreaNovosCards.appendChild(novoCard)
//  }

function gerarCard() {
    let Carta = document.createElement("button")
    Carta.setAttribute("id", "card")
    AreaNovosCards.append(Carta)

    let imagem = document.createElement("div")
    imagem.setAttribute("id", "imagem")
    Carta.appendChild(imagem)

    let img = document.createElement("img")
    var novaImagem = document.getElementById("url")    
    if (novaImagem.value) {
        img.setAttribute("src", novaImagem.value)
    } else {
        img.setAttribute("src", "img/pokemon.png")
    }
    imagem.appendChild(img)

    let tipo = document.createElement("div")
    tipo.setAttribute("id", "tipo")
    Carta.appendChild(tipo)

    let h4 = document.createElement("h4")
    h4.innerHTML = document.getElementById("novoTipo").value
    tipo.appendChild(h4)

    let status = document.createElement("div")
    status.setAttribute("id", "status")
    Carta.appendChild(status)

    let nome = document.createElement("p")
    nome.setAttribute("id", "nome")
    nome.setAttribute("class", "nome")
    nome.innerHTML = document.getElementById('novoNome').value
    status.appendChild(nome)

    let ivsPokemon = document.createElement("div")
    ivsPokemon.setAttribute("id", "ivsPokemon")
    status.appendChild(ivsPokemon)

    let poder = document.createElement("p")
    poder.setAttribute("id", "poder")
    poder.innerHTML = `Poder: ${document.getElementById("novoPoder").value}`
    ivsPokemon.appendChild(poder)

    let dano = document.createElement("p")
    dano.setAttribute("id", "dano")
    dano.innerHTML = `Dano: ${document.getElementById("novoDano").value}`
    ivsPokemon.appendChild(dano)

    let ataque = document.createElement("p")
    ataque.setAttribute("id", "ataque")
    ataque.innerHTML = `Ataque: ${document.getElementById("novoAtaque").value}`
    ivsPokemon.appendChild(ataque)

    let evolucao = document.createElement("p")
    evolucao.setAttribute("id", "evolucao")
    evolucao.innerHTML = document.getElementById("novaEvolucao").value
    ivsPokemon.appendChild(evolucao)

    let pokesystem = document.createElement("p")
    pokesystem.setAttribute("class", "nome")
    pokesystem.innerHTML = "Pokesystem 2.0"
    status.appendChild(pokesystem)

    AreaNovosCards.appendChild(Carta)
}