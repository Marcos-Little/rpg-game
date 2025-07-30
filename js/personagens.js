let players = [document.getElementById("jogador-1"),document.getElementById("jogador-2"), document.getElementById("jogador-3"), document.getElementById("jogador-4"), document.getElementById("jogador-5"), document.getElementById("jogador-6")]
let contador = 1

function adicionar() {
    if(contador <= 5{
        players[contador].classList.remove("selecao");
        players[contador].classList.add("selecionado");
        contador++   
    }
}    
function remover(){
    if(contador <=5 ){
    players[contador].classList.remove("selecionado");
    players[contador].classList.add("selecao");
    contador--}
    else if(contador == 5){
        players[contador].classList.remove("selecionado");
        players[contador].classList.add("selecao");
        contador--
    }
    if(contador < 1){
        contador = 1;
    }
    if(contador == 1){
        players[contador].classList.add("selecionado");
    }
}
