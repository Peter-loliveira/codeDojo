var AreaNovosCards = document.getElementById("novosCards")

var botao = document.getElementById("btAddCard")
botao.onclick = function () {
    gerarCard()
}
function gerarCard() {
    let novoCard = document.getElementById("card")
    
    AreaNovosCards.appendChild(novoCard)
}