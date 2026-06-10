let nomes = [
    prompt('Os dados informados em cada posição correspondem ao mesmo funcionário. Digite o primeiro nome:'),
    prompt('Digite o segundo nome:'),
    prompt('Digite o terceiro nome:'),
    prompt('Digite o quarto nome:'),
    prompt('Digite o quinto e último nome:')
]
let sexos = [
    prompt('Digite o primeiro sexo (seguindo as instruções iniciais) com "M" para masculino e "F" para feminino:'),
    prompt('Digite o segundo sexo:'),
    prompt('Digite o terceiro sexo:'),
    prompt('Digite o quarto sexo:'),
    prompt('Digite o quinto e último sexo:')
]
let salarios = [
    Number(prompt('Digite o primeiro salário (mantendo a estrutura):')),
    Number(prompt('Digite o segundo salário:')),
    Number(prompt('Digite o terceiro salário:')),
    Number(prompt('Digite o quarto salário:')),
    Number(prompt('Digite o quinto e último salário:'))
]
let mulheresDestaque = "";

for (let i = 0; i < 4; i++) {
    if ((sexos[i] == "F" || sexos[i] == "f") && salarios[i] >= 5000) {
        mulheresDestaque += nomes[i] + " (R$" + salarios[i].toFixed(2) + ")" + ".\n";
    }
}

if (mulheresDestaque != "") {
    alert("As mulheres com salário maior ou igual a R$5000,00 são:\n\n" + mulheresDestaque);
} else {
    alert("Não há mulheres com salário maior que R$5000,00.");
}