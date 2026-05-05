let numero = -1;

while (numero < 0) {
    numero = parseFloat(prompt("Digite um número positivo:"));
    if (numero < 0) {
        alert("Valor inválido! Por favor, digite um número maior ou igual a zero.");
    }
}

alert("Você digitou o número: " + numero);