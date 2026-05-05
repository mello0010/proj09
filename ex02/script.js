let soma = 0;
let contador = 0;
let nota;

while (true) {
    nota = Number(prompt("Digite uma nota (negativo para parar): "));

    if (nota < 0) {
        break;
    }

    soma += nota;
    contador++;
}

if (contador > 0) {
    console.log("Média:", soma / contador);
} else {
    console.log("Nenhuma nota válida foi digitada.");
}