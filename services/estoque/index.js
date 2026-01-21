const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Dados simulados de estoque (Mock)
const estoque = [
  { id: 1, produto: "Camiseta", quantidade: 10 },
  { id: 2, produto: "Tênis", quantidade: 5 },
  { id: 3, produto: "Boné", quantidade: 0 }
];

app.get('/estoque', (req, res) => {
  console.log("Consulta de estoque recebida");
  res.json({
    servico: "Estoque",
    itens: estoque,
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Serviço de Estoque rodando na porta ${PORT}`);
});