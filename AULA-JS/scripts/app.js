let nome = "johnny";
var sobrenome = "dias mathias";  // Não utilizar var, pois pode sobrescrever variáveis
const ultimoNome = "junior";

const idade = 18;5;

let mensagem;

if (idade < 18) {

    mensagem = "é menor de idade";

}
else{

    mensagem = "é maior de idade";
    
}

console.log(nome, sobrenome, ultimoNome);

console.log('Tipo da variavel idade', typeof idade);

console.log(nome, mensagem);

