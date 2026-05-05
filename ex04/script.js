let nome = "";
let sobrenome = "";

while (nome === "") {
    nome = prompt("Digite seu nome: ");
}

while (sobrenome === "") {
    sobrenome = prompt("Digite seu sobrenome: ");
}

console.log("Nome completo:", nome + " " + sobrenome);