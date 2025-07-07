let players = [document.getElementById("jogador-1"),document.getElementById("jogador-2"), document.getElementById("jogador-3"), document.getElementById("jogador-4"), document.getElementById("jogador-5"), document.getElementById("jogador-6")]
let contador = 0

function adicionar() {
    players[contador].classList.remove("selecao");
    players[contador].classList.add("selecionado");
    contador++
    if(contador >= 5){
        contador = 5;
    }
}
function remover(){
    players[contador].classList.remove("selecionado");
    players[contador].classList.add("selecao");
    contador--
    if(contador < 0){
        contador = 0;
    }
    if(contador == 0){
        players[contador].classList.add("selecionado");
    }
}