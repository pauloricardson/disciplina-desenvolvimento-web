let nota = 11.0;

if (nota < 0 || nota > 10) {
    console.log("Nota inválida, deve estar entre 0 e 10");
    return;
}

if (nota >= 7) {
    console.log("Aluno aprovado");
} else if (nota >= 5) {
    console.log("Aluno em recumperação");
} else {
    console.log("Aluno reprovado");
}