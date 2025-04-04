//9

let contato = ["ana", "Gabriel Henrique", "João Vitor", "Paulo", "arthur correa"];

function primeiroContatoComNomeLongo(contatos) {
  let resultado = null;

  contatos.forEach(function(nome) {
    if (nome.length > 10 && resultado === null) {
      resultado = nome;
    }
  });

  return resultado;
}

let contatoEncontrado = primeiroContatoComNomeLongo(contato);
console.log(contatoEncontrado);
