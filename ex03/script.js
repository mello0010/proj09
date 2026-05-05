let total = 0;
let valor = 1;

while (valor !== 0) {
    valor = Number(prompt("Digite o valor da compra (0 para finalizar): "));
    total += valor;
}

console.log("Total da compra: R$", total);