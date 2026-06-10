let nomes = [];
let alturas = [];
let confirmacao = "";
let i = 0;

do {
    nomes[i] = prompt('Digite o nome da pessoa:');
    alturas[i] = Number(prompt('Agora, digite sua altura (em centímetros):'));

    i++;

    confirmacao = prompt('Deseja inserir mais informações? (digite "ok" para encerrar as atividades e "continuar" para permanecer)');
} while (confirmacao != "Ok" && confirmacao != "ok" && confirmacao != "OK");

let maiorAltura = alturas[0];
let posicaoMaior = 0;

for (let j = 1; j < i; j++) {
    if (alturas[j] > maiorAltura) {
        maiorAltura = alturas[j];
        posicaoMaior = j;
    }
}

alert('A maior altura é de ' + (maiorAltura/100).toFixed(2) + 'm.\nO detentor dessa altura é: ' + nomes[posicaoMaior] + '.')