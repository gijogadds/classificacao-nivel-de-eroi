// Matriz (array) de objetos simulando diferentes heróis e seus respectivos XPs
const herois = [
    { nome: "Arthur", xp: 500 },      // Menor que 1.000
    { nome: "Lancelot", xp: 1500 },   // Entre 1.001 e 2.000
    { nome: "Gawain", xp: 3500 },     // Entre 2.001 e 5.000
    { nome: "Percival", xp: 6000 },   // Entre 5.001 e 7.000
    { nome: "Galahad", xp: 7500 },    // Entre 7.001 e 8.000
    { nome: "Bors", xp: 8500 },       // Entre 8.001 e 9.000
    { nome: "Tristão", xp: 9500 },    // Entre 9.001 e 10.000
    { nome: "Merlin", xp: 12000 }     // Maior ou igual a 10.001
];

// Laço de repetição (for) para passar por todos os heróis da lista
for (let i = 0; i < herois.length; i++) {

    // Variáveis para armazenar o nome e XP
    let nome = herois[i].nome;
    let xp = herois[i].xp;

    // Variável para armazenar o nível do herói
    let nivel = "";

    // Estruturas de decisão (if, else if) com operadores lógicos (&&, <=, >=)
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    // Saída de dados formatada com template literals
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}
