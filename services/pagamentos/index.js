const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/pagamentos', (req, res) => {
  res.json({
    servico: "Pagamentos - Loja Veloz",
    status: "Gateway de Pagamento Ativo",
    metodos_aceitos: ["Cartão de Crédito", "Pix", "Boleto"],
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Serviço de Pagamentos rodando na porta ${PORT}`);
});
