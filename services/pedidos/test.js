const assert = require('assert');

// Função de validação (Contrato da API)
function validarEstruturaPedido(dados) {
    if (!dados.servico || dados.servico !== "Pedidos - Loja Veloz") return false;
    if (!dados.timestamp) return false;
    return true;
}

console.log("-----------------------------------------");
console.log(" Iniciando Testes: Microsserviço Pedidos");

try {
    // Cenário 1: Dados Corretos
    const dadosValidos = {
        servico: "Pedidos - Loja Veloz",
        timestamp: new Date()
    };
    assert.strictEqual(validarEstruturaPedido(dadosValidos), true, "Deveria aceitar dados válidos");
    console.log("Teste 1: Validação de estrutura - OK");

    // Cenário 2: Dados Incorretos
    const dadosInvalidos = { servico: "Erro", timestamp: null };
    assert.strictEqual(validarEstruturaPedido(dadosInvalidos), false, "Deveria rejeitar dados inválidos");
    console.log("Teste 2: Filtro de segurança - OK");

    console.log("\n Resultado: Todos os testes passaram!");
    process.exit(0); // Código de sucesso
} catch (error) {
    console.error("\n Falha nos testes:");
    console.error(error.message);
    process.exit(1); // Código de erro  
}