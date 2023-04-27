console.log("Trabalhando com atribuição de variáveis");

const nome = "Matheus";
const sobrenome = "Pasti";
let contador;

console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
//usando a virgula concatena texto como se tivesse um espaçamento

console.log(`Meu nome é ${nome} ${sobrenome}`);
//com a crase é possível fazer a interpolação de variáveis
//esse ${} serve para deixar visível que é uma variável

const nomeCompleto = nome + sobrenome;
//isso dá erro pois é um tipo constante de variável, isso quer dizer que não pode mudar da atribuição inicial
//transformando o nome em let, vira uma variável que é modificável
//é uma linguagem fracamente tipável
//mudança de estado na programação gera erros, é importante gerar constantes que jamais irão mudar
//então é bom atribuir numa variável diferente, nova
console.log(nomeCompleto);

contador = contador + 1;

//é bom nomear da forma mais clara, o nome pode virar primeiroNome

let idade; //declarando variável
idade = 26; //atribuindo valor
// let idade = 26;
idade = idade + 1;
console.log(idade);

