console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// ctrl + k + c = coloca comentário em várias linhas
// ctrl + k + u = tira

//array é basicamente uma lista
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);
//declarar e atribuir

listaDeDestinos.push(`Curitiba`)
//serve para colocar um valor dentro da lista
//sendo uma constante, apenas é errado quando faz listaDeDestinos = 2; atribuindo a uma constante

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
//para remover um item do array, então o número colocado dentro é um dos valores dentro do array 
//e a quantidade de itens deletados
// as posições começam no 0
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0])
//mostrar apenas o indice do array
//vai mostrar o RJ e salvador

//let new = 2; (vai dar erro pq é um nome atribuido à linguagem)