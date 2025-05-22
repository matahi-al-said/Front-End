let nome = "johnny";
var sobrenome = "dias mathias";  // Não utilizar var, pois pode sobrescrever variáveis
const ultimoNome = "junior";

const idade =  18;
const idade2 = "18"; // number = string

const valor1 = "";
const valor2 = false; //false e null são iguais

const valor3 = "1";
const valor4 = true; // 1 e true são iguais

let mensagem;

if (idade < 18) {
    mensagem = "é menor de idade";
} else if (idade == 18) {
    mensagem = "tem exatamente 18 anos";
}else{
    mensagem = "é maior de idade";
}

console.log(nome, sobrenome, ultimoNome);

console.log('Tipo da variavel idade', typeof idade);

console.log(nome, idade, mensagem);

if (idade == idade2) {
    console.log("são iguais");
} else {
    console.log("não são iguais");
}



