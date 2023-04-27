console.log("Trabalhando com Loops");

const listaDeDestinos = new Array(
 `Salvador`,
 `São Paulo`, 
 `Rio de Janeiro`
 );

const idadeComprador = 15;
const estaAcompanhada = true;
const destino = "Salvador";
let temPassagemComprada = false;
let destinoExiste = false;
// vira let para o valor mudar

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
    //transformando o retorno dessas operações (a direita) em uma variável, pois são operações
  
    let contador = 0;
while (contador <3){
    
    //array[indice]
    if(listaDeDestinos[contador] == destino){
        console.log("destino disponível");
        destinoExiste = true;
        break;
    }
    //ele fica em looping infinito se não aumentar o contador
    contador++
    //ou contador = contador + 1
    //ou contador += 1
}

console.log("Destino existe? ", destinoExiste);

if(PodeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpa... Houve um erro!");
}

//necessita de 3 condições
// a do meio é o contador, condição para entrar em loop
// o primeiro é a inicialização da variável de loop
// o terceiro comando é o comando de modificar o contador
//atalho para somar +1  |  cont++

//exemplo de for
// for(let i ; i > 3 ; i++ ){
//     if(listaDeDestinos[i] == destino){
//         destinoExiste = true;
//     }
// }
  
