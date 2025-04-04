let livros = ["Harry potter", "senhor dos aneis", "bird box"]
let Livroquedeseja = (" como treinar seu dragão")
let indice = livros.indexOf(Livroquedeseja)

if (indice===1){
    console.log("Livro existente",indice)
} else {
    console.log("Livro Inexistente",indice)
}