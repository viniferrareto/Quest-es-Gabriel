//2
let fila = [];
let limite = 1; //limite da fila

fila.unshift("Adriano") //add
fila.unshift("Zaza") //add

function addCliente(){
    fila.unshift("Erinaldo"),//add
    fila.unshift("Luculucas"),//add
    fila.unshift("Patriqui")//add
};

function removerCliente(){
    fila.pop()//remove
};

function verifica(i){
    i = fila.length
    if (i < limite) {
        addCliente();//adiciona cliente
        console.log(fila)//imprime
    }
    else{
        removerCliente();//remove
        console.log(fila)//imprime
    }
};
verifica();