//5
let array = ['12:00', '14:00',"15,00"]
let adicionar = array.splice(1,0, "13:00")
console.log(array)

let pos = array.indexOf("12:00")
let remover = array.splice(pos,1)