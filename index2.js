// Função que recebe a quantidade de vitórias e derrotas e calcula o saldo e o nível
function obterDadosRankeadas(vitorias, derrotas) {
    // Uso de operadores para calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estruturas de decisões para definir o nível
    // Nota: O enunciado pede explicitamente "Se vitórias for...", então a lógica usa a variável 'vitorias'.
    // O valor 10 foi incluído na condição inicial (<= 10) para evitar que esse número fique sem classificação.
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return {
        saldo: saldoVitorias,
        nivel: nivel
    };
}

// Lista de exemplos para testar diferentes cenários (vitórias, derrotas)
let testes = [
    { vitorias: 8, derrotas: 3 },     // Ferro
    { vitorias: 15, derrotas: 5 },    // Bronze
    { vitorias: 30, derrotas: 10 },   // Prata
    { vitorias: 65, derrotas: 20 },   // Ouro
    { vitorias: 85, derrotas: 30 },   // Diamante
    { vitorias: 95, derrotas: 40 },   // Lendário
    { vitorias: 120, derrotas: 50 }   // Imortal
];

console.log("=== CALCULADORA DE PARTIDAS RANKEADAS ===\n");

// Uso de laços de repetição (for)
for (let i = 0; i < testes.length; i++) {
    // Variáveis
    let v = testes[i].vitorias;
    let d = testes[i].derrotas;
    
    // Retornando o resultado da função para uma variável
    let resultado = obterDadosRankeadas(v, d);
    
    // Saída com a mensagem solicitada
    console.log(`O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.nivel}**`);
}
