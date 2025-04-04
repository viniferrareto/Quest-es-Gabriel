//4

let videos = ['video1', 'video2', 'video3', 'video4', 'video5']
let remocoes = 0

function removerVideo() {
    if (videos.length > 0) {
        videos.pop()
        remocoes++
        console.log("Vídeo removido. Lista atual:", videos)
        if (remocoes === 3) {
            adicionarNovoVideo()
            remocoes = 0 
        }
    } else {
        console.log("Não há mais vídeos para remover.")
    }
}
    videos.push(novoVideo)
    console.log("Novo vídeo adicionado:", novoVideo)