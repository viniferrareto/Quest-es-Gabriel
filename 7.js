//7
let jogadores = ["Jogador1", "Jogador2", "Jogador3", "Jogador4"];
jogadores.shift() 

if (jogadores.length < 3){
    jogadores.unshift("JogadorNovo")
    console.log("Jogador adicionado", jogadores)
} else {
    console.log("Jogo Completo", jogadores)
}
