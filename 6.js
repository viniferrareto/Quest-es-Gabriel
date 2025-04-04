//6
let chamada = [  "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda",
    "Gabriel", "Helena", "Igor", "Juliana", "Kleber", "Larissa"]

    let addpos = chamada.indexOf("Juliana")
    let novachamada = chamada.splice(addpos,0,"João")

    let removeraluno = chamada.indexOf("Igor")
    let alunoremovido = chamada.splice(removeraluno,1)

    console.log("nova chamada atualizada", chamada)