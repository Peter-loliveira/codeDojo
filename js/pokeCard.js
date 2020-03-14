var AreaNovosCards = document.getElementById("novosCards")

var botao = document.getElementById("btAddCard")
botao.onclick = function () {
    gerarCard()
}
var Card = document.getElementById("areaTotalCard")



function gerarCard() {
    let novoCard = document.createElement("button")
    novoCard.style.border = "0"
    novoCard.style.backgroundColor = "white"

    let preencherDados = document.getElementById("CheckNovoCard")
    if (preencherDados.checked) {
        let linkImagem = document.getElementById("url").value
        let tipo = document.getElementById("novoTipo").value
        let novoNome = document.getElementById("novoNome").value
        let novoPoder = document.getElementById("novoPoder").value
        let novoDano = document.getElementById("novoDano").value
        let novoAtaque = document.getElementById("novoAtaque").value
        let novaEvolucao = document.getElementById("novaEvolucao").value        
        var htmlPokemon = 
        `
        <div id="card">
        <div id="imagem">
            <img src="${linkImagem}" alt="" srcset="">
        </div>
        <div id="tipo">
            <h4>${tipo}</h4>
        </div>
        <div id="status">
            <p id="nome" class="nome">${novoNome}</p>
            <div id="ivsPokemon">
                <p id="poder">Poder: ${novoPoder}</p>
                <p id="dano">Dano: ${novoDano}</p>
                <p id="ataque">Ataque: ${novoAtaque}</p>
                <p id="evolucao">Evolução: ${novaEvolucao}</p>
            </div>
            <p class="nome">Pokesystem 2.0</p>
        </div>
    </div>
        `
        novoCard.innerHTML = htmlPokemon
    } else {        
        novoCard.innerHTML = Card.innerHTML
    }

    AreaNovosCards.appendChild(novoCard)
}

// function gerarCard() {
//     let Carta = document.createElement("button")
//     Carta.setAttribute("id", "card")
//     AreaNovosCards.append(Carta)

//     let imagem = document.createElement("div")
//     imagem.setAttribute("id", "imagem")
//     Carta.appendChild(imagem)

//     let img = document.createElement("img")
//     var novaImagem = document.getElementById("url")
//     if (novaImagem.value) {
//         img.setAttribute("src", novaImagem.value)
//     } else {
//         img.setAttribute("src", "img/pokemon.png")
//     }
//     imagem.appendChild(img)

//     let tipo = document.createElement("div")
//     tipo.setAttribute("id", "tipo")
//     Carta.appendChild(tipo)

//     let h4 = document.createElement("h4")
//     h4.innerHTML = document.getElementById("novoTipo").value
//     tipo.appendChild(h4)

//     let status = document.createElement("div")
//     status.setAttribute("id", "status")
//     Carta.appendChild(status)

//     let nome = document.createElement("p")
//     nome.setAttribute("id", "nome")
//     nome.setAttribute("class", "nome")
//     nome.innerHTML = document.getElementById('novoNome').value
//     status.appendChild(nome)

//     let ivsPokemon = document.createElement("div")
//     ivsPokemon.setAttribute("id", "ivsPokemon")
//     status.appendChild(ivsPokemon)

//     let poder = document.createElement("p")
//     poder.setAttribute("id", "poder")
//     poder.innerHTML = `Poder: ${document.getElementById("novoPoder").value}`
//     ivsPokemon.appendChild(poder)

//     let dano = document.createElement("p")
//     dano.setAttribute("id", "dano")
//     dano.innerHTML = `Dano: ${document.getElementById("novoDano").value}`
//     ivsPokemon.appendChild(dano)

//     let ataque = document.createElement("p")
//     ataque.setAttribute("id", "ataque")
//     ataque.innerHTML = `Ataque: ${document.getElementById("novoAtaque").value}`
//     ivsPokemon.appendChild(ataque)

//     let evolucao = document.createElement("p")
//     evolucao.setAttribute("id", "evolucao")
//     evolucao.innerHTML = document.getElementById("novaEvolucao").value
//     ivsPokemon.appendChild(evolucao)

//     let pokesystem = document.createElement("p")
//     pokesystem.setAttribute("class", "nome")
//     pokesystem.innerHTML = "Pokesystem 2.0"
//     status.appendChild(pokesystem)

//     AreaNovosCards.appendChild(Carta)
// }