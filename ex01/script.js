let idades = [
    prompt('Digite a primeira idade:'),
    prompt('Digite a segunda idade:'),
    prompt('Digite a terceira idade:'),
    prompt('Digite a quarta e última idade:'),
]

let maiorIdade = 0;
let posicaoMaior = 0;

for (let i = 0; i < 4; i++) {
    if (i == 0 || idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaior = i + 1;
    }
}

alert("Maior idade apresenta: " + maiorIdade + "." + "\n" + "Posição (ordem de digitação): " + posicaoMaior + ".");