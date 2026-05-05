let saldo = 1000;
let saque;

while (saldo > 0) {
    saque = Number(prompt("Saldo: R$" + saldo + " | Digite o valor do saque: "));

    while (saque > saldo) {
        console.log("Saldo insuficiente!");
        saque = Number(prompt("Digite outro valor: "));
    }

    saldo -= saque;
}

console.log("Saldo zerado ou negativo. Encerrando...");
