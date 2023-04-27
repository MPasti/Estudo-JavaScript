console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
//valor booleano
const estaAcompanhada = true;
const temPassagemComprada = true;

listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada == true) {
//   //else if para não ter que separar linha e ficar mais simples
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("Comprador menor de idade");
// }

//como o de cima tem dois if, dá para reduzir duplicação de código

//operador de ou 
// ||
if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("Comprador menor de idade");
}

//operador de e
// &&
console.log("Embarque: ")
if(idadeComprador >= 18 && temPassagemComprada == true){
  console.log("Boa viagem!!");
} else{
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

//operadores booleanos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
